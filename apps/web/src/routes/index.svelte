<script lang="typescript">
  import { fade } from 'svelte/transition';
  import Mascot from "../components/Mascot.svelte"
  import MedalButton from "../components/MedalButton.svelte"
  import LicenseLogo from "../components/LicenseLogo.svelte"
  import Button from "lluis/Button.svelte"
  import Box from "lluis/Box.svelte"
  import Column from "lluis/Column.svelte"
  import Columns from "lluis/Columns.svelte"
  import Hidden from "lluis/Hidden.svelte"
  import Title from "lluis/Title.svelte"
  import { _ } from "svelte-i18n"
  import Translate from "../Translate.svelte"
</script>

<svelte:head>
  <title>{$_("meta.title")}</title>
  <meta name="description" content="{$_('index.meta.description')}" />
</svelte:head>

<section class="hero is-bold is-fullheight">
  <div class="hero-body" in:fade={{ delay: 500 }}>
    <div class="container">
      <Columns>
        <Column size="1/2">
          <div class="mascot">
            <Mascot shadow="{false}" glow="{true}" />
          </div>
        </Column>
        <Column size="1/4">
          <div class="medals">
            <Box backgroundColor="rgba(255, 255, 255, 0.3)">
              <MedalButton maxWidth="75%" />
            </Box>
          </div>
        </Column>
        <Column>
          <Box>
            <h2 class="subtitle">
              <Translate key="index.subtitle">
                Tionscadal chun aip teanga féin-tiomáinte a dhéanamh
              </Translate>
            </h2>
            <div class="buttons">
              <Button primary href="https://librelingo.app">
                <Translate key="index.about_librelingo">
                  About LibreLingo
                </Translate>
              </Button>
              <Button primary href="https://peppercarrot.com">
                <Translate key="index.about_pepper_carrot">
                  About Pepper and Carrot
                </Translate>
              </Button>
            </div>
            <p class="description">
              <Translate key="index.meta.description">
                Tionscadal chun aip teanga féin-tiomáinte a dhéanamh
              </Translate>
            </p>
            <p class="attribution">
              <Translate key="index.meta.attribution">
                Tionscadal chun aip teanga féin-tiomáinte a dhéanamh
              </Translate>
            </p>
          </Box>
        </Column>
      </Columns>
    </div>
  </div>
</section>

<div class="license">
  <LicenseLogo />
  <a href="./pyodide/pyodide.html">Edit</a>
</div>

<style type="text/scss">
  @import "../variables";

  .title img {
    height: 3em;
  }

  .hero {
    background: url('images/revoy-pepper-dragon-night.png') no-repeat center;
    background-size: cover;
  }

  .license {
    position: absolute;
    right: 1em;
    bottom: 1em;
  }

  .medals {
    .box {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  @include until($tablet) {
    .mascot {
      width: 45%;
      margin: auto;
      margin-top: -3em;
    }
  }

  p {
    font-size: 75%;
  }
</style>
