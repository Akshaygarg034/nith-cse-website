import scrapeUpcomingEvents from '../scraper-functions/scrapeUpcomingEvents.js';

export default async function handler(req, res) {
  try {
    console.log('Running scrapeUpcomingEvents...');
    await scrapeUpcomingEvents();
    res.status(200).json({ success: true, message: 'scrapeUpcomingEvents completed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
