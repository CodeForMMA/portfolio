module.exports = {
    siteMetadata: {
        title: "Jalaly",
        author: "Mansour Jalaly",
        description: "The Jalaly Foundation Homepage",
        social: [
            {
                name: `Twitter`,
                url: `https://twitter.com/gatsbyjs`,
            },
            {
                name: `GitHub`,
                url: `https://github.com/gatsbyjs`,
            },
        ],
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'mansour-jalaly-portfolio',
                short_name: 'portfolio',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/MJ-icon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-theme-blog-test`,
            options: {
                basePath: `/blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/posts/`,
                name: `posts`,
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
        'gatsby-plugin-material-ui',
        `gatsby-transformer-remark`,
    ],
}
