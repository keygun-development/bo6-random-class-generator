export const onPostBuild = async ({ utils }) => {
    try {
        console.log("Generating sitemap...");
        const { generateSitemap } = await import('../src/lib/generate-sitemap.js');
        await generateSitemap();
        console.log("Sitemap generated successfully!");
    } catch (error) {
        utils.build.failBuild("Failed to generate sitemap", { error });
    }
};