/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  module: {
    rules: [
      {
        test: /froala_editor\.pkgd\.min\.css$/,
        loader: 'string-replace-loader',
        options: {
          search: /stretch-available/g,
        }
      }
    ]
  }
  
}

module.exports = nextConfig
