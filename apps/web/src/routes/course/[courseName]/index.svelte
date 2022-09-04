<script lang="typescript" context="module">
  export async function preload(page) {
      const { courseName } = page.params
      return { courseName, modules: [], languageName: "unset" }
  }
</script>

<script lang="typescript">
  import SkillCard from "../../../components/SkillCard/index.svelte"
  import { onMount } from 'svelte';
  import SkillButton from "../../../components/SkillButton.svelte"
  import NavBar from "../../../components/NavBar.svelte"
  import Column from "lluis/Column.svelte"
  import Columns from "lluis/Columns.svelte"
  import Content from "lluis/Content.svelte"
  import type { ModulesType } from "../../../types/ModulesType"

  onMount(async () => {
      const res = await fetch(
          `/LibreLingo/courses/${courseName}/courseData.json`
      )
      let pair
      pair = await res.json()
      modules = pair.modules
      languageName = pair.languageName
      console.log(modules, languageName, pair)
  })

  export let courseName = null
  export let modules: ModulesType = null
  export let languageName = null
</script>

<svelte:head>
  <title>LibreLingo - learn {languageName} for free</title>
</svelte:head>

<NavBar hasAuth />

{#each modules as { title, skills }}
  <section class="section">
    <div class="container">
      <svg width="250px" height="100px" class="banner">
        <image height="100px" x="0px" width="250px" href="images/banner-background.svg"/>
        <text fill="#dedab0" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">{title}</text>
      </svg>
      <Columns multiline>
        {#each skills as skill}
          <Column sizeDesktop="1/3" sizeTablet="1/2">
            <SkillButton
              maxWidth="75%" {... { ...skill } }
              practiceHref="{`course/${courseName}/skill/${skill.practiceHref}`}" />
          </Column>
        {/each}
      </Columns>
    </div>
  </section>
{/each}

<footer class="footer">
  <Content>
    <Columns>
      <Column>
        <strong>LibreLingo</strong>
        by
        <a href="https://github.com/kantord">Dániel Kántor</a>
        and
        <a href="https://github.com/kantord/LibreLingo#contributors-">
          various contributors
        </a>
        .
      </Column>
      <Column>
        The source code is licensed
        <a href="https://opensource.org/licenses/AGPL-3.0">AGPL-3.0.</a>
        <br />
        <a href="https://github.com/kantord/LibreLingo">
          Source code available on GitHub.
        </a>
      </Column>
      <Column />
    </Columns>
    <p></p>
  </Content>
</footer>

<style type="text/scss">
  @import "../../../variables";
  .container {
    padding-right: 20px;
    padding-left: 20px;
    text-align: center;
  }
  .container div.banner {
    padding: 1rem;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('images/banner-background.svg');
  }
  .container svg.banner {
    display: inline-block;
  }
  .container svg.banner text {
    font-family: "Neucha";
    font-size: 2.5rem;
    font-weight: bold;
  }
</style>
