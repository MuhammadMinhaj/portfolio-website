/**
 * Date:16/12/2020
 * Author: Muhammad Minhaj
 * Title: Website Seo
 * Description: This is a seo component for website
 * **/

//  Included Third Pertty Components Or Packages
import data from "../../data";
const {
  title,
  description,
  keywords,
  url,
  author,
  altForImage,
  siteName,
  fbAppId,
  twitterSiteUsername,
  image,
  favicon,
} = data.seo;

const SEO = ({ pageTitle }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="twitter:title" content={author} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={twitterSiteUsername} />
      <meta name="twitter:image:alt" content={altForImage} />
      <meta name="twitter:site" content={twitterSiteUsername} />
      <meta name="twitter:card" content={description} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="fb:app_id" content={fbAppId} />
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/png" sizes="48x48" href={favicon} />
    </>
  );
};

export default SEO;
