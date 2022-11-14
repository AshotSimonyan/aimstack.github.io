const {withContentlayer} = require('next-contentlayer')

const nextconfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "",
    },
    basePath: "/netlifycms-test",
    assetPrefix: "/netlifycms-test",
    disableImportAliasWarning: true,
}


module.exports = withContentlayer(nextconfig)
