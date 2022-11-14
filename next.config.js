const {withContentlayer} = require('next-contentlayer')

const nextconfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "",
    },
    disableImportAliasWarning: true,
}


module.exports = withContentlayer(nextconfig)
