const express = require('express');
const cron = require('node-cron');
const scrapeUpcomingEvents = require('./scraper-functions/scrapeUpcomingEvents');
const scrapeFaculties = require('./scraper-functions/scrapeFaculties');
const scrapeStudents = require('./scraper-functions/scrapeStudents');
require('dotenv').config();

// Set the timezone to Indian Standard Time (IST)
process.env.TZ = 'Asia/Kolkata';

// Create an Express application
const app = express();

// API Health check endpoint
app.get('/', (req, res) => {
  res.status(200).send('Server is active and running!'); 
});

// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const runScrapeUpcomingEvents = () => {
  console.log('Running scrapeUpcomingEvents...');
  scrapeUpcomingEvents()
    .then(() => console.log('scrapeUpcomingEvents completed successfully'))
    .catch(err => console.error('Error running scrapeUpcomingEvents:', err));
};
setInterval(runScrapeUpcomingEvents, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

// Schedule Scraping Faculties task to run on the 1st of August at 12:00 AM IST
cron.schedule('0 0 1 8 *', () => {
  console.log('Running scrapeFaculties...');
  scrapeFaculties();
}, {
  scheduled: true,
  timezone: "Asia/Kolkata"
});


// Schedule Scraping students task to run on the 1st of September at 12:00 AM IST
cron.schedule('0 0 1 9 *', () => {
    console.log('Running scrapeStudents...');
    scrapeStudents();
  }, {
    scheduled: true,
    timezone: "Asia/Kolkata"
  });