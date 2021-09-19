<script lang="typescript">
  import type { SizeType } from "./types"

  export let sizeMobile: null | SizeType = null
  export let sizeTablet: null | SizeType = null
  export let sizeDesktop: null | SizeType = null
  export let isSubtitle = false
  export let isSpaced = false
  export let size = isSubtitle ? 5 : 3
  export let textWeight: null | "semibold" = null
  export let align: null | "centered" = null
</script>

<h1
  class:title={!isSubtitle}
  class:subtitle={isSubtitle}
  class="{`is-size-${size}
  ${sizeMobile ? `is-size-${sizeMobile}-mobile` : '' }
  ${sizeTablet ? `is-size-${sizeTablet}-tablet` : ''}
  ${sizeDesktop ? `is-size-${sizeDesktop}-desktop` : ''}
  ${textWeight? `has-text-weight-${textWeight}` : '' }
  ${align? `has-text-${align}` : '' }`}"
  class:is-spaced={isSpaced}>
  <slot />
</h1>

<style type="text/scss">
  @import './node_modules/bulma/sass/utilities/_all';
  @import "./node_modules/bulma/sass/elements/title.sass";

  h1 {
    padding: 2em 0;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 150%;
    font-weight: bold;
    font-family: "Neucha";
    padding: 0.8rem;
    padding-bottom: 0;
    border-radius: 20px;
    box-shadow: 0px 0px 15px 0px #dedab0;
    line-height: 1;
    height: 100%;
  }

  h1.title {
    color: #8d7a32;
    background-color: #fef3b0;
  }

  h1.subtitle {
    color: black;
    background-color: rgba(255, 240, 200, 0.3);
  }
</style>
