import { config } from 'dotenv';
import SitemapGenerator from "sitemap-generator"

config();

const APP_URL = process.env.VITE_APP_URL;

const generator = SitemapGenerator(APP_URL, {
    stripQuerystring: true,
    filepath: './public/sitemap.xml',
    maxDepth: 0,
});

generator.on('done', (e) => {
    console.log(e);
});

// Start the generator
generator.start();
