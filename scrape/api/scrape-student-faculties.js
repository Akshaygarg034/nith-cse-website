import scrapeFaculties from '../scraper-functions/scrapeFaculties.js';
import scrapeStudents from '../scraper-functions/scrapeStudents.js';

export default async function handler(req, res) {
  try {
    console.log('Running scrapeFaculties...');
    await scrapeFaculties();
    console.log('Running scrapeStrudents...');
    await scrapeStudents()
    res.status(200).json({ success: true, message: 'Scraping Students and Faculty completed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
