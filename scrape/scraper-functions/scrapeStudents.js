const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { connectToMongo, closeMongoConnection } = require('../db/mongoClient');
require('dotenv').config();

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
    const transformedData = filteredData.map(student => {
      const existingStudent = existingData.find(existing => existing._id === student.roll_number);

      return {
        _id: student.roll_number,
        name: student.name,
        fathers_name: student.fathers_name,
        semester: existingStudent ? existingStudent.semester : "Not added",
        cgpi: student.cgpi.toString(),
        branch_rank: student.branch_rank,
        year_rank: student.year_rank,
        class_rank: student.class_rank,
        image: existingStudent ? existingStudent.image : "https://res.cloudinary.com/dz1vsgxm5/image/upload/nith-cse-website/fykmv1tsesa1bdvpldfa.jpg",
        about: existingStudent ? existingStudent.about : "Not added",
        education10: existingStudent ? existingStudent.education10 : "Not added",
        education12: existingStudent ? existingStudent.education12 : "Not added",
        email: existingStudent ? existingStudent.email : "Not added",
        phone: existingStudent ? existingStudent.phone : "Not added",
        github: existingStudent ? existingStudent.github : "Not added",
        linkedin: existingStudent ? existingStudent.linkedin : "Not added",
        portfolio: existingStudent ? existingStudent.portfolio : "Not added",
        address: existingStudent ? existingStudent.address : "Not added",
        skills: existingStudent ? existingStudent.skills : ["Not added"]
      };
    });

    // Sort the transformed data by _id in ascending order
    transformedData.sort((a, b) => a._id.localeCompare(b._id));

    // Save the transformed data to a local file
    const localFilePath = path.resolve(__dirname, 'transformed_students.json');
    fs.writeFileSync(localFilePath, JSON.stringify(transformedData, null, 2));
    console.log('Transformed JSON data saved successfully.');

    // Update MongoDB with the transformed data
    await Promise.all(transformedData.map(async student => {
      await collection.updateOne(
        { _id: student._id },
        { $set: student },
        { upsert: true }
      );
    }));

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