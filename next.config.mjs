/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  //   webpack(config) {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       handlebars: path.resolve(
  //         __dirname,
  //         "node_modules",
  //         "handlebars",
  //         "dist",
  //         "handlebars.js"
  //       ),
  //       // your aliases
  //     };
  //   },
};

export default nextConfig;
