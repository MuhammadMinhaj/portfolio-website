
module.exports = {
  env: {
    HEROKU_API_KEY: process.env.PUBLIC_API_KEY || "",
    CONTACT_SEND_MAIL_URI_POST: process.env.PUBLIC_CONTACT_API_URI || "",
  },
};
