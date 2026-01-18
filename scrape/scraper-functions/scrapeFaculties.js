const puppeteer = require('puppeteer');
const { connectToMongo, closeMongoConnection } = require('../db/mongoClient');

const scrapeFaculties = async () => {
  let browser;
  try {
    // Launch a headless browser
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the website
    await page.goto(process.env.FACULTIES_SCRAPE_URL, { waitUntil: 'networkidle2', timeout: 120000 });

    // Wait for the table to load
    await page.waitForSelector('.table.table-bordered.mytabnum');

    // Extract the data from the table
    const tableData = await page.evaluate(() => {
      const table = document.querySelector('.table.table-bordered.mytabnum');
      const rows = Array.from(table.querySelectorAll('tbody tr'));
      const data = [];
      let currentRole = 'Professor';
      let order = 0;

      rows.forEach(row => {
        if (row.classList.contains('thcolor')) {
          // Ignore rows with class "thcolor"
          return;
        }

        const cells = row.querySelectorAll('td');
        if (cells.length === 1 && cells[0].classList.contains('da_chairman')) {
          // This row is a role header
          currentRole = cells[0].innerText.trim();
        } else if (cells.length === 5) {
          // This row contains faculty data
          const name = cells[1].innerText.trim();
          const areas = cells[2].innerText.trim().split(',').map(area => area.trim());
          const linkElement = cells[4].querySelector('a');
          const findMore = linkElement ? linkElement.href : '';
          const img = '';

          data.push({
            name,
            role: currentRole,
            img,
            areas,
            findMore,
            order: order++
          });
        }
      });

      return data;
    });

    // Function to extract image URL from a given URL
    const extractImageUrl = async (url) => {
      const newPage = await browser.newPage();
      try {
        await newPage.goto(url, { waitUntil: 'networkidle2', timeout: 120000 });
        const imgUrl = await newPage.evaluate(() => {
          const imgElement = document.querySelector('.logo img');
          return imgElement ? imgElement.src : '';
        });
        await newPage.close();
        return imgUrl;
      } catch (error) {
        await newPage.close();
        throw error;
      }
    };

    // Process each entry concurrently
    await Promise.all(tableData.map(async (entry) => {
      if (entry.findMore) {
        try {
          entry.img = await extractImageUrl(entry.findMore);
          // In website the image url is incorrect for this entry
          if (entry.name === 'Dr. Pardeep Singh'){
            entry.img = 'https://portfolios.nith.ac.in/uploads/member_details/65.jpg';
            console.log(`Corrected image URL for ${entry.name} !!!`);
          }
        } catch (error) {
            console.error(`Error processing entry for ${entry.name}:`, error);
          }
      }
    }));

    // Print final table data
    console.log('Final table data:', tableData);

    // Connect to MongoDB
    const db = await connectToMongo();
    const collection = db.collection(process.env.MONGODB_FACULTY_COLLECTION);

    // Delete previous entries and insert new ones
    await collection.deleteMany({});
    await collection.insertMany(tableData);

    console.log('Database updated with new faculty data !!!');

  } catch (error) {
    console.error('Error scraping faculty data:', error);
  } finally {
    if (browser) {
      // Close the browser
      await browser.close();
    }
    await closeMongoConnection();
  }
};

module.exports = scrapeFaculties;