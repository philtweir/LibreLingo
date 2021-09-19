<script lang="typescript">
  import {  onMount } from "svelte"
  import InlineSVG from "svelte-inline-svg"
  export let imageURL = "images/skill-button-level-1.svg"
  export let alt = "Learn Irish"
  export let maxWidth = null

  export let title: string
  export let levels: number
  export let practiceHref: string
  export let introduction: string
  export let id: string
  export let imageSet: string[] = []
  export let summary: string

  let completed = null
  let started = null
  let stale = null
  let progress = null
  let svgElement = null
  let ready = false

  import live from "../db/live"
  import getSkillStats from "../db/skill/getSkillStats"

  const transform = (svg) => {
      const stage = Math.round(5 * progress / levels)
      for (let i = 1; i <= 5; i++) {
          const rainbow = svg.getElementById(`rainbow-${i}`)
          const solid = svg.getElementById(`solid-${i}`)
          const eltOff = i > stage ? solid : rainbow
          const eltOn = i > stage ? rainbow : solid
          eltOff.classList.add("invisible")
          eltOn.classList.add("visible")
          eltOn.classList.remove("invisible")
          eltOff.classList.remove("visible")
      }
      const progressArc = svg.getElementById("progress-arc")
      const circum = 2 * Math.PI * 10
      if (!completed) {
          const completedLayer = svg.getElementById("complete")
          completedLayer.classList.add("invisible")
      } else {
          for (let i = 1; i <= 5; i++) {
              const rainbow = svg.getElementById(`rainbow-${i}`)
              const solid = svg.getElementById(`solid-${i}`)
              rainbow.classList.add("invisible")
              solid.classList.add("invisible")
              rainbow.classList.remove("visible")
              solid.classList.remove("visible")
          }
      }
      progressArc.setAttributeNS(null, "stroke-dasharray", `${circum * progress / levels / 2} ${circum * (1 - progress / levels) / 2}`)
      return svg
  }

  onMount(() => {
      live((db) =>
          getSkillStats(db, { id })
              .then((stats) => {
                  completed = stats.progress >= levels
                  progress = stats.progress
                  started = stats.started
                  stale = stats.stale && completed
                  ready = true
              })
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              .catch(() => {})
      )
  })

  let styleTokens = `
    max-width:${maxWidth};
  `
</script>

<div class="medal">
<a alt="{alt}" href="{practiceHref}">
  {#if ready}
  <InlineSVG
    style="{styleTokens}"
    bind:this="{svgElement}"
    transformSrc={transform}
    class="skill-medal"
    src="{imageURL}"
  />
  {/if}
  <h2>{title}</h2>
</a>
</div>

<style type="text/scss">
    .medal {
      width: 100%;
      text-align: center;
    }

    .medal a {
      display: inline-block;
      transition: background 0.8s;
      border-radius: 3em;
      padding-top: 0.6em;
      padding-left: 0.6em;
      padding-right: 0.6em;
    }
    .medal a:hover {
      background: rgba(255, 255, 255, 0.1) radial-gradient(circle, transparent 1%, rgba(255, 255, 255, 0.1) 1%) center/15000%;
    }
    .medal a:active {
      background-color: rgba(255, 255, 255, 0);
      background-size: 100%;
      transition: background 0s;
    }
    .medal svg {
    }
    .medal h2 {
      font-size: 150%;
      font-weight: bold;
      font-family: "Neucha";
      color: #fef3b0;
      background-color: #cdba72;
      padding: 0.8rem;
      padding-bottom: 0.3rem;
      border-radius: 20px;
      box-shadow: 0px 0px 15px 0px #dedab0;
      line-height: 1;
    }
    :global(.skill-medal) {
      display: inline-block;
      width: 100%;
      height: auto;
    }
    .medal :global(.skill-medal) :global(.invisible) {
      display: none;
    }
</style>
