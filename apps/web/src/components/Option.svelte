<script lang="typescript">
  export let active
  export let inactive
  export let correct
  export let formInTargetLanguage
</script>

<li class:active class:inactive>
  <div
    class="option"
    data-test="{active ? 'active' : inactive ? 'inactive' : 'neutral'}"
    data-test-correct="{correct}"
  >
    <div class="option-content">
      <div class="is-size-5 is-size-5-mobile">{formInTargetLanguage}</div>
    </div>
  </div>
</li>

<style type="text/scss">
  @import "../variables";

  .option {
    padding: 0.35em 0.25em;
    width: 100%;
    transition: opacity 0.15s, outline 0.2s;
    display: inline-block;
    cursor: pointer;
    color: white;
    font-weight: bold;
    background-color: #cdba72;
    margin: 1rem;
    border-radius: 3rem;
  }

  .inactive .option {
    opacity: 0.65;
    background: inherit;
    color: #cdba72;
    background-color: white;
  }

  @include mobile {
    .option-content {
      padding: $size-7;
    }
  }
</style>
