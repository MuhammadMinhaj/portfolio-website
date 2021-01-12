const isDev = process.env.NODE_ENV === "development";

module.exports = {
  env: {
    HEROKU_API_KEY: process.env.NEXT_PUBLIC_API_KEY || "",
    CONTACT_SEND_MAIL_URI_POST: process.env.NEXT_PUBLIC_CONTACT_API_URI || "",
  },

  // Use the CDN in production and localhost for development.
  assetPrefix: isDev ? "" : "/",
};
