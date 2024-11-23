import { generateSitemap } from './src/lib/generate-sitemap.js';

export const onPostBuild = async ({ utils }) => {
    try {
        console.log("Generating sitemap...");
        await generateSitemap(); // Call your function
        console.log("Sitemap generated!");
    } catch (err) {
        utils.build.failBuild("Failed to generate sitemap", { error: err });
    }
};