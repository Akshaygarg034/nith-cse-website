import scrapeStudents from '../scraper-functions/scrapeStudents.js';

export default async function handler(req, res) {
  try {
    console.log('Running scrapeStudents...');
    await scrapeStudents();
    res.status(200).json({ success: true, message: 'scrapeStudents completed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
