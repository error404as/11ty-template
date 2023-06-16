const htmlmin = require('html-minifier');
const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en',
  });

  // to access "filters" in ejs templates
  fn11ty = eleventyConfig.javascriptFunctions;

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.setServerOptions({
    port: 8081
  });

  // Watch our compiled assets for changes
  eleventyConfig.addWatchTarget('./src/compiled-assets/main.css');
  eleventyConfig.addWatchTarget('./src/compiled-assets/main.js');

  // Copy src/compiled-assets to /assets
  eleventyConfig.addPassthroughCopy({ 'src/compiled-assets': 'assets' });
  // Copy all images
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy({ 'src/assets/files': '.' });

  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
      if (outputPath.endsWith('.html')) {
        const minified = htmlmin.minify(content, {
          collapseInlineTagWhitespace: false,
          collapseWhitespace: true,
          removeComments: true,
          sortClassName: true,
          useShortDoctype: true,
        });

        return minified;
      }

      return content;
    });
  }

  return {
    dir: {
      includes: '_components',
      input: 'src',
      layouts: '_layouts',
      output: 'dist',
    },
    markdownTemplateEngine: 'ejs',
    templateFormats: [
      'ejs',
      'md',
    ],
  };
};
