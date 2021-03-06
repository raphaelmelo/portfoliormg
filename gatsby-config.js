module.exports = {
  siteMetadata: {
    title: `Raphael Melo`,
    description: `Desenvolvedor front-end`,
    author: `@raph4dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: ['gap', 'clamp', 'flexbox', 'vw', 'vh']
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raphael Melo`,
        short_name: `raph4dev`,
        start_url: `/`,
        background_color: `#0D88E0`,
        theme_color: `#0D88E0`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
      // 'gatsby-plugin-styled-components',
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
