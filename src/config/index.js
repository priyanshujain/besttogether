/**
 * - runtime config
 * holds all config values based on runtime environment
 */
const airtableAPIKey = process.env.GATSBY_AIRTABLE_API_KEY;
const airtableBase = process.env.GATSBY_AIRTABLE_BASE;
const airtableApiUrl = process.env.GATSBY_AIRTABLE_API_URL;
const appApiBaseUrl = process.env.GATSBY_APP_API_BASE_URL;

export { airtableAPIKey, airtableBase, airtableApiUrl, appApiBaseUrl };
