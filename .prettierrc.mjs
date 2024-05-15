/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: ["*.astro", "*.md", "*.mdx"],
      options: {
        parser: "astro",
      },
    },
  ],
};
