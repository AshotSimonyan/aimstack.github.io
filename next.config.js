const { withContentlayer } = require('next-contentlayer');
const withExportImages = require('next-export-optimize-images')

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  // images: {
  //   // loader: "akami",
  //   // path: "",
  //   // remotePatterns: [
  //   //   {
  //   //     protocol: 'https',
  //   //     hostname: 'aim-netlify-image.s3.amazonaws.com',
  //   //     port: '',
  //   //     // pathname: '/account123/**',
  //   //   },
  //   // ],
  // },
  // basePath: "",
  // assetPrefix: "",
  disableImportAliasWarning: true,
};

module.exports = withExportImages(withContentlayer(nextConfig));

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
