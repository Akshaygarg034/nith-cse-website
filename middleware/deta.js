const { Deta } = require('deta'); // import Deta

// Initialize with a Project Key
// locally, set the project key in an env var called DETA_PROJECT_KEY





const deta = global.deta || Deta(process.env.DETA_KEY);

if (process.env.NODE_ENV === "development") global.deta = deta;

export default deta;