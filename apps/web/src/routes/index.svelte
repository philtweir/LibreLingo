<script lang="typescript">
  import Mascot from "../components/Mascot.svelte"
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
  <div class="hero-body">
    <div class="container">
      <Columns>
        <Column size="1/4">
          <div class="mascot">
            <Mascot shadow="{false}" glow="{true}" />
          </div>
        </Column>
        <Column>
          <Box>
            <Title>LibreLingo</Title>
            <h2 class="subtitle">
              <Translate key="index.subtitle">
                an experiment to create a community driven language-learning
                platform
              </Translate>
            </h2>
            <div class="buttons">
              <ButtonLink primary hidden href="course/irish-from-english">
                <Translate key="index.start_irish_course">
                  Start learning Irish
                </Translate>
              </ButtonLink>

              <ButtonLink primary href="about">
                <Translate key="index.about_librelingo">
                  About LibreLingo
                </Translate>
              </ButtonLink>

              <Hidden>
                <Button style="primary" href="/devtools">
                  Development tools
                </Button>
              </Hidden>

              <Button style="primary" href="https://librelingo.app/docs/">
                <Translate key="index.development_docs">
                  Development documentation
                </Translate>
              </Button>
            </div>
          </Box>
        </Column>
      </Columns>
    </div>
  </div>
</section>

<div class="license">
  <LicenseLogo />
</div>

<style type="text/scss">
  @import "../variables";

  .title img {
    height: 3em;
  }

  .hero {
    background-color: $primary;
  }

  .license {
    position: absolute;
    right: 1em;
    bottom: 1em;
  }

  @include until($tablet) {
    .mascot {
      width: 45%;
      margin: auto;
      margin-top: -3em;
    }
  }
</style>
