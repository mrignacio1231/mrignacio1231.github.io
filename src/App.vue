<template>
  <div id="app">
    <section id="inicio" class="hero is-primary is-medium header-image">
      <menubar></menubar>
      <div class="hero-body"></div>
    </section>
    <div class="hero-cta">
      <nav class="level">
        <div class="level-item has-text-centered">
          <p class="title is-2">Sobre mí</p>
        </div>
      </nav>
    </div>
    <sobremi></sobremi>
    <projects></projects>
    <footerbar></footerbar>
  </div>
</template>

<script>
  import MenuBar from './components/MenuBar';
  import FooterBar from './components/Footer';
  import Projects from './components/Projects';
  import SobreMi from './components/SobreMi';

  export default {
    name: 'app',
    components: {
      menubar: MenuBar,
      footerbar: FooterBar,
      projects: Projects,
      sobremi: SobreMi,
    },
  };
</script>
<style lang="scss">
  @import "node_modules/bulma/bulma";
  @import "src/assets/hero.scss";
  .panel {
    color: #95A5A6;
  }
</style>
