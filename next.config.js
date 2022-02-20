const isProd = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    HEROKU_API_KEY: "muhammadMinhajContactApiKey",
    CONTACT_SEND_MAIL_URI_POST:
      "https://dev-mdminhaj.herokuapp.com/api/contact",
  },
  assetPrefix: isProd ? "https://cdn.mydomain.com" : "",
};
