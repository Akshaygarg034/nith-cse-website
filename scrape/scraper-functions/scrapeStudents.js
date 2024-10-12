const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { connectToMongo, closeMongoConnection } = require('../db/mongoClient');
require('dotenv').config();

const toTitleCase = (str) => {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

const scrapeStudents = async () => {
  const url = process.env.STUDENTS_SCRAPE_URL;

  try {
    // Fetch new data
    const response = await axios.get(url);
    const jsonData = response.data;
    console.log('JSON data loaded successfully.');

    // Filter the data to keep only entries where branch is "Computer Science"
    const filteredData = jsonData.filter(student => student.branch === 'Computer Science');
    console.log('Filtered data:', filteredData.length);

    // Connect to MongoDB
    const db = await connectToMongo();
    const collection = db.collection(process.env.MONGODB_STUDENT_COLLECTION);

    // Fetch existing data from MongoDB
    const existingData = await collection.find({}).toArray();
    console.log('Existing data fetched from MongoDB:', existingData.length);

    // Transform the data into the desired format and merge with existing data
    const transformedData = filteredData.map((student, index) => {
      const existingStudent = existingData.find(existing => existing._id === student.roll_number.toLowerCase());
      const defaultEmail = `${student.roll_number.toLowerCase()}@nith.ac.in`;

      return {
        _id: student.roll_number.toLowerCase(),
        name: toTitleCase(student.name),
        fathers_name: toTitleCase(student.fathers_name),
        batch: student.batch,
        cgpi: student.cgpi,
        branch_rank: student.branch_rank,
        year_rank: student.year_rank,
        class_rank: student.class_rank,
        image: existingStudent ? existingStudent.image : "https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/fykmv1tsesa1bdvpldfa.jpg",
        about: existingStudent ? existingStudent.about : "",
        education10: existingStudent ? existingStudent.education10 : "",
        education12: existingStudent ? existingStudent.education12 : "",
        email: existingStudent ? existingStudent.email : defaultEmail,
        phone: existingStudent ? existingStudent.phone : "",
        github: existingStudent ? existingStudent.github : "",
        linkedin: existingStudent ? existingStudent.linkedin : "",
        portfolio: existingStudent ? existingStudent.portfolio : "",
        address: existingStudent ? existingStudent.address : "",
        skills: existingStudent ? existingStudent.skills : [""],
        order: index // Add order field
      };
    });

    // Sort the transformed data by cgpi in decreasing order
    transformedData.sort((a, b) => b.cgpi - a.cgpi);

    // // Save the transformed data to a local file
    // const localFilePath = path.resolve(__dirname, 'transformed_students.json');
    // fs.writeFileSync(localFilePath, JSON.stringify(transformedData, null, 2));
    // console.log('Transformed JSON data saved successfully.');

    // Update MongoDB with the transformed data sequentially
    for (const student of transformedData) {
      await collection.updateOne(
        { _id: student._id },
        { $set: student },
        { upsert: true }
      );
    }

    console.log('MongoDB updated successfully.');

    await closeMongoConnection();
    return transformedData;
  } catch (error) {
    console.error('Error while scraping students data:', error);
    await closeMongoConnection();
    throw error;
  }
};

module.exports = scrapeStudents;