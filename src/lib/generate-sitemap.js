import SitemapGenerator from 'sitemap-generator';

const generator = SitemapGenerator("https://dev-bo6-random-class.netlify.app/", {
    stripQuerystring: true,
    filepath: './public/sitemap.xml',
    maxDepth: 0,
});

generator.on('done', (e) => {
    console.log('Sitemap generation done:', e);
});

generator.start();
