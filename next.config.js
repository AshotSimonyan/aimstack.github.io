const { withContentlayer } = require('next-contentlayer');
const withExportImages = require('next-export-optimize-images')

const nextConfig = withExportImages({
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
  // optimizeFonts: false,
  // images: {
  //   // remotePatterns: [
  //   //   {
  //   //     protocol: 'https',
  //   //     hostname: 'aim-netlify-image.s3.amazonaws.com',
  //   //     port: '',
  //   //     // pathname: '/account123/**',
  //   //   },
  //   // ],
  // },
  disableImportAliasWarning: true,
});

module.exports = withContentlayer(nextConfig);
