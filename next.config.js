const { withContentlayer } = require('next-contentlayer');
const withOptimizedImages  = require('next-optimized-images')

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    loader: "akamai",
    path: "",
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'aim-netlify-image.s3.amazonaws.com',
    //     port: '',
    //     // pathname: '/account123/**',
    //   },
    // ],
  },
  basePath: "/",
  assetPrefix: "/",
  disableImportAliasWarning: true,
};

module.exports = withContentlayer(nextConfig);

// const {withContentlayer} = require('next-contentlayer')
//
// // const isGithubActions = process.env.GITHUB_ACTIONS || false //TODO
// const isGithubActions = true //TODO
// // const baseUrl =
//
// let assetPrefix = ''
// let basePath = '/'
//
// if (isGithubActions) {
//     // const repo = process.env.SITE_URL.replace(/.*?\//, '')
//     const repo = 'netlifycms-test'
//
//     assetPrefix = `/${repo}/`
//     basePath = `/${repo}`
// }
//
// const nextconfig = {
//     reactStrictMode: true,
//     images: {
//         loader: "imgix",
//         path: "",
//     },
//     // basePath: basePath,
//     // assetPrefix: assetPrefix,
// }
//
//
// module.exports = withContentlayer(nextconfig)
