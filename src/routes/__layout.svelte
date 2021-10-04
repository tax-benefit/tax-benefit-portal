<script lang="ts">
  import "../app.css"

  import {
    addMessages,
    getLocaleFromNavigator,
    init as initI18n,
    locale,
  } from "svelte-intl-precompile"

  import enUS from "$locales/en-US"
  import frFR from "$locales/fr-FR"

  addMessages("en", enUS)
  // addMessages("en-UK", enUK)
  addMessages("en-US", enUS)
  addMessages("fr", frFR)
  addMessages("fr-FR", frFR)

  initI18n({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  })
</script>

<svelte:head>
  <html lang={$locale} />
</svelte:head>
<slot />
