import scrapeFaculties from '../scraper-functions/scrapeFaculties.js';

export default async function handler(req, res) {
  try {
    console.log('Running scrapeFaculties...');
    await scrapeFaculties();
    res.status(200).json({ success: true, message: 'scrapeFaculties completed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
