import createNextIntlPlugin from 'next-intl/plugin';
 
let withNextIntl;
try {
  withNextIntl = createNextIntlPlugin({
    defaultLocale: 'ru',
    locales: ['en', 'ru', 'kz'],
  });
} catch (err) {
  console.error("Error initializing next-intl plugin:", err);
  throw new Error("Failed to initialize next-intl plugin");
}
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
};
 
export default withNextIntl(nextConfig);