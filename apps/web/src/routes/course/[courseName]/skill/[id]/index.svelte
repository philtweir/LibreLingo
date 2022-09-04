<script lang="typescript" context="module">
  export async function preload(page) {
      const { id, courseName } = page.params

      return {
          // rawChallenges: Array.from(rawChallenges),
          // languageName,
          // languageCode,
          // specialCharacters,
          id,
          courseName: courseName,
          // skillId,
          // challengesPerLevel,
          courseURL: `course/${courseName}`,
      }
  }
</script>

<script lang="typescript">
  import ChallengeScreen from "../../../../../components/ChallengeScreen.svelte"
  import NavBar from "../../../../../components/NavBar.svelte"
  import { sortChallengeGroups } from "./_logic"
  import { onMount } from 'svelte';
  let ready = false;

  onMount(async () => {
      const res = await fetch(
          `/LibreLingo/courses/${courseName}/courseData.json`
      )
      const pair = await res.json()
      languageName = pair.languageName
      languageCode = pair.languageCode
      specialCharacters = pair.specialCharacters

console.log(`/LibreLingo/courses/${courseName}/challenges/${id}.json`);
      const skillRes = await fetch(
          `/LibreLingo/courses/${courseName}/challenges/${id}.json`
      )
      const skillData = await skillRes.json()
      console.log(skillData)
      skillId = skillData.id
      rawChallenges = Array.from(skillData.challenges)
      challengesPerLevel = skillData.challenges.length / skillData.levels
ready = true;
      expectedNumberOfChallenges = Math.max(
          4,
          Math.round(challengesPerLevel * 1.2)
      )

  })

  export let courseName = null
  export let rawChallenges
  export let languageName: string
  export let languageCode: string
  export let specialCharacters: Array<string>
  export let id: string
  export let courseURL: string
  export let skillId: string
  export let challengesPerLevel: number

  let expectedNumberOfChallenges: number
</script>

<svelte:head>
  <title>LibreLingo - learn {id} in {languageName} for free</title>
</svelte:head>

<NavBar />

{#if ready}
<ChallengeScreen
  {expectedNumberOfChallenges}
  {skillId}
  {rawChallenges}
  {languageName}
  {languageCode}
  {specialCharacters}
  {sortChallengeGroups}
  {courseURL} />
{/if}
