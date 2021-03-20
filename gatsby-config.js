module.exports = {
  siteMetadata: {
    title: "Brenden Moore",
  },
  plugins: [
    "gatsby-plugin-postcss",
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "teb3l0hf",
        dataset: "production",
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: "teb3l0hf",
        dataset: "production",
      },
    },
  ],
}
