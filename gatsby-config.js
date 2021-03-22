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
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
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
  ],
};
