<script lang="typescript">
  export let backgroundColor = null
  export let customBackgroundColor = backgroundColor != null

  let styleTokens = `
    --backgroundColor:${backgroundColor};
  `
</script>
<div class="box"
  style="{styleTokens}"
  class:customBackgroundColor
>
  <slot />
</div>

<style type="text/scss">
    .box.customBackgroundColor {
      background-color: var(--backgroundColor);
    }
</style>
