import {config} from 'dotenv';
import SitemapGenerator from 'sitemap-generator';

config();

const generator = SitemapGenerator("https://bo6randomclassgenerator.nl/", {
    stripQuerystring: true,
    filepath: './public/sitemap.xml',
    maxDepth: 0,
});

generator.on('done', (e) => {
    console.log('Sitemap generation done:', e);
});

generator.start();
