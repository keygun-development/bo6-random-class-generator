import { config } from 'dotenv';
import SitemapGenerator from 'sitemap-generator';

config();

const APP_URL = process.env.VITE_APP_URL;

export function generateSitemap() {
    const generator = SitemapGenerator(APP_URL, {
        stripQuerystring: true,
        filepath: './public/sitemap.xml',
        maxDepth: 0,
    });

    generator.on('done', (e) => {
        console.log('Sitemap generation done:', e);
    });

    // Start the generator
    generator.start();
}
