import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
    }),
    trailingSlash: 'always',
    appDir: 'app_',
  },
};
