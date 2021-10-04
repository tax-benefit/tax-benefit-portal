<script lang="ts">
  import { locale, t } from "svelte-intl-precompile"

  const languageLabelFlagTriples = [
    ["en-US", "English", "🇬🇧"],
    ["fr-FR", "Français", "🇫🇷"],
  ]
</script>

<div class="navbar bg-neutral text-neutral-content">
  <div class="navbar-start">
    <span class="font-bold text-lg">{$t("Tax and Benefit Simulators")}</span>
  </div>

  <div class="navbar-end">
    <div class="flex items-stretch">
      <div class="dropdown dropdown-end">
        <select
          class="select select-bordered select-ghost"
          bind:value={$locale}
        >
          {#each languageLabelFlagTriples as [language, label, flag]}
            <option value={language}>{flag} {label}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</div>

<div class="hero bg-base-200">
  <div class="hero-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl">
        Simulate the tax and benefit system of your country
      </h1>
      <p>Select your tax and benefit system:</p>
      <ul class="list-disc list-inside">
        <li>
          <a class="link link-primary" href="https://fr.tax-benefit.org"
            >France <div class="badge badge-primary badge-sm">alpha</div></a
          >
        </li>
        <!-- <li>
          <a class="link" href="https://sn.tax-benefit.org"
            >Senegal <div class="badge badge-sm badge-warning">in progress</div></a
          >
        </li> -->
        <li>
          <a class="link" href="https://tn.tax-benefit.org"
            >Tunisia <div class="badge badge-sm badge-warning">
              in progress
            </div></a
          >
        </li>
        <li>
          <a class="link" href="https://uk.tax-benefit.org"
            >United Kingdom <div class="badge badge-sm badge-warning">
              in progress
            </div></a
          >
        </li>
        <li>
          <a class="link" href="https://us.tax-benefit.org"
            >USA <div class="badge badge-sm badge-warning">in progress</div></a
          >
        </li>
      </ul>
    </div>
  </div>
</div>
