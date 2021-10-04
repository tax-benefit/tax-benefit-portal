const config = {
  mode: "jit",
  plugins: [require("daisyui")],
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
}

module.exports = config
