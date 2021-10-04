import staticAdapter from "@sveltejs/adapter-static"
import precompileIntl from "svelte-intl-precompile/sveltekit-plugin.js"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: staticAdapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      plugins: [precompileIntl("locales")],
    },
  },

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
