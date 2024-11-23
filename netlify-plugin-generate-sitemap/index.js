export const onPostBuild = async ({ utils }) => {
    try {
        console.log("Generating sitemap...");
        const { default: runSitemapGenerator } = await import('../src/lib/generate-sitemap.js');
        await runSitemapGenerator();
        console.log("Sitemap generated successfully!");
    } catch (error) {
        utils.build.failBuild("Failed to generate sitemap", { error });
    }
};