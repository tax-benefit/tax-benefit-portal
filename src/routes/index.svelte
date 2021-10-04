<script lang="ts">
  import { locale, t } from "svelte-intl-precompile"

  const languageLabelFlagTriples = [
    ["en-US", "English", "🇬🇧"],
    ["fr-FR", "Français", "🇫🇷"],
  ]
</script>

<div class="navbar bg-neutral text-neutral-content">
  <div class="navbar-start">
    <span class="font-bold text-lg">{$t("site.title")}</span>
  </div>

  <div class="navbar-end">
    <div class="flex items-stretch">
      <select class="select select-ghost" bind:value={$locale}>
        {#each languageLabelFlagTriples as [language, label, flag]}
          <option value={language}>{flag} {label}</option>
        {/each}
      </select>
    </div>
  </div>
</div>

<div class="hero bg-base-200">
  <div class="hero-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl text-center">
        {$t("hero.title")}
      </h1>
      <p>{$t("Select tax-benefit system")}</p>
      <ul class="list-disc list-inside">
        <li>
          <a class="link link-primary" href="https://fr.tax-benefit.org"
            >{$t("France")}
            <div class="badge badge-primary badge-sm">{$t("alpha")}</div></a
          >
        </li>
        <!-- <li>
          <a class="link" href="https://sn.tax-benefit.org"
            >{$t("Senegal")} <div class="badge badge-sm badge-warning">{$t("in progress")}</div></a
          >
        </li> -->
        <li>
          <a class="link" href="https://tn.tax-benefit.org"
            >{$t("Tunisia")}
            <div class="badge badge-sm badge-warning">
              {$t("in progress")}
            </div></a
          >
        </li>
        <li>
          <a class="link" href="https://uk.tax-benefit.org"
            >{$t("United Kingdom")}
            <div class="badge badge-sm badge-warning">
              {$t("in progress")}
            </div></a
          >
        </li>
        <li>
          <a class="link" href="https://us.tax-benefit.org"
            >{$t("United States of America")}
            <div class="badge badge-sm badge-warning">
              {$t("in progress")}
            </div></a
          >
        </li>
      </ul>
    </div>
  </div>
</div>
