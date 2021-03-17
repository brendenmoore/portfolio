module.exports = {
  siteMetadata: {
    title: "Brenden Moore",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "teb3l0hf",
        dataset: "production"
      },
    },
  ],
};
