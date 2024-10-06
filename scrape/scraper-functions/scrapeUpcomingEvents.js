const puppeteer = require('puppeteer');
const { connectToMongo, closeMongoConnection } = require('../db/mongoClient');

const scrapeUpcomingEvents = async () => {
  let browser;
  try {
    // Launch a headless browser
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the website
    await page.goto('https://nith.ac.in/', { waitUntil: 'networkidle2' });

    // Wait for the marquee element with the class campusEvents to load
    await page.waitForSelector('.campusEvents');

    // Extract the HTML content of the marquee element
    const events = await page.evaluate(() => {
      const eventElements = document.querySelectorAll('.campusEvents .eventRow');
      return Array.from(eventElements).slice(0, 6).map(element => {
        const dateElement = element.querySelector('.eventDate');
        const titleElement = element.querySelector('.eventDiscription');
        const linkElement = element.querySelector('a');

        const date = dateElement ? dateElement.innerText.replace(/\s+/g, ' ').trim() : '';
        const title = titleElement ? titleElement.innerText.trim() : '';
        const link = linkElement ? linkElement.href : '';

        return { date, title, link };
      });
    });

    console.log('First 6 Events:', events);

    // Connect to MongoDB
    const db = await connectToMongo();
    const collection = db.collection(process.env.MONGODB_UPCOMING_EVENTS_COLLECTION);

    // Delete previous entries and insert new ones
    await collection.deleteMany({});
    await collection.insertMany(events);

    console.log('Database updated with new events !!!');
  } catch (error) {
    console.error('Error scraping upcoming events:', error);
  } finally {
    if (browser) {
      // Close the browser
      await browser.close();
    }
    await closeMongoConnection();
  }
};

module.exports = scrapeUpcomingEvents;