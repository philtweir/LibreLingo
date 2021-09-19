<script lang="typescript">
  export let shadow = true
  export let glow = false
  let imageURL =
        "images/bandraoi.svg"
</script>

<img data-test="mascot-bandraoi" src="{imageURL}" alt="" class:glow />

<style type="text/scss">
  .glow {
    filter: drop-shadow(0 0 50em #fff);
    background-color: rgba(10, 10, 20, 0.0);
  }
</style>
