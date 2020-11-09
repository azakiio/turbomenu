/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: "AIzaSyBclRqQlcTS_HN6Zr466nzNMzauO_NwkqI",
          authDomain: "turbo-menu.firebaseapp.com",
          databaseURL: "https://turbo-menu.firebaseio.com",
          projectId: "turbo-menu",
          storageBucket: "turbo-menu.appspot.com",
          messagingSenderId: "570866613735",
          appId: "1:570866613735:web:eda6d13a5a9c172b2e9142",
          measurementId: "G-L9WKYFQ172",
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
