<script lang="typescript">
  import { tweened } from "svelte/motion"

  export let value

  const progress = tweened(0)
  $: progress.set(value)
</script>

<div class="progress-container">
  <progress color="green" class="progress" value="{$progress}" max="1">
    {$progress * 100}%
  </progress>
</div>

<style type="text/scss">
  @import "../variables";
  div {
    padding-bottom: $size-6;
  }

  .progress {
    border: none;
    border-radius: 0 0;
    color: linear-gradient(to right, #88ff88 0px, #8888ff 100px, #ff88ff 200px, orange 300px, red 400px, white 100%);
  }
  .progress::-webkit-progress-value {
    background: linear-gradient(to right, #88ff88 0px, #8888ff 100px, #ff88ff 200px, orange 300px, red 400px, white 100%);
  }
  .progress::-moz-progress-bar {
    background: linear-gradient(to right, #88ff88 0px, #8888ff 100px, #ff88ff 200px, orange 300px, red 400px, white 100%);
  }

  .progress-container {
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    padding-bottom: 0;
    width: 100%;
  }
</style>
