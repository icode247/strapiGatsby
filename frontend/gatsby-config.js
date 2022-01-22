module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  
  },
  // In your gatsby-config.js
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`api/article`, `api/user`],
        singleTypes: [
          { 
            name',
            api: { qs: { _locale: `all` } }
           }
        ]
       // singleTypes: [`home-page`, `contact`],
      },
    },
  ]
};