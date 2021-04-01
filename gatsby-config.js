require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Blend",
    titleTemplate: "%s · Blend",
    description:
      "Trouvez le job qui vous correspond. Blend trouve pour vous les meilleures opportunités de carrière. Des profils qualifiés Qui reflètent vos valeurs Trouvez le bon candidat en un rien de temps",
    url: "https://blend.careers", // No trailing slash allowed!
    siteUrl: "https://blend.careers",
    image: "/images/icon.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cloudinary-images`,
        path: `${__dirname}/src/cloudinary-images`,
      },
    },
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: "landingV1",
        // enableDefaultTransformations: true,
        // fluidMaxWidth: 1800,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        short_name: "blend",
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-7B48NKX5T0', // Google Analytics / GA
          // optional
          // 'OPTIONAL----AW-CONVERSION_ID', // Google Ads / Adwords / AW
          // 'OPTIONAL----DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: 'OPT_CONTAINER_ID',
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        // pluginConfig: {
          // Puts tracking script in the head instead of the body
          // head: false,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        // },
      },
    },
  ],
};
