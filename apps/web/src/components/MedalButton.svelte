<script lang="typescript">
  export let imageURL = "images/learn-irish-button.svg"
  export let alt = "Learn Irish"
  export let href = "course/irish-from-english"
  export let maxWidth = null
  export let customMaxWidth = maxWidth != null

  let styleTokens = `
    --maxWidth:${maxWidth};
  `
</script>

<div class="medal">
<a alt="{alt}" href="{href}">
  <img
    style="{styleTokens}"
    src="{imageURL}"
    class:customMaxWidth
  >
</a>
</div>

<style type="text/scss">
    .medal {
      width: 100%;
      text-align: center;
    }

    .medal img.customMaxWidth {
      max-width: var(--maxWidth);
    }

    .medal a {
      display: inline-block;
      height: 100%;
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
    .medal img {
      display: inline-block;
      width: 100%;
      max-height: 20vh;
    }
</style>
