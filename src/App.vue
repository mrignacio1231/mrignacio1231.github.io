<template>
  <div id="app">
    <section class="hero is-primary is-medium header-image">
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
    <div class="section main">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <div class="panel section">
              <div class="panel">
                <p class=" has-text-centered"><i class="fa fa-graduation-cap icon-block"></i></p>
                <br>
                <p>Estudiante de ingeniería en telecomunicaciones y entusiasmado por aprender las nuevas tecnologías web.</p>
                <br>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="panel">
              <div class="panel section">
                <p class="has-text-centered"><i class="fa fa-cog icon-block"></i></p>
                <br>
                <p>Capacidad de aprender rápido y trabajar eficazmente en equipo. Dipuesto a escuchar a los demás y recibir críticas.</p>
                <br>
              </div>
            </div>

          </div>
          <div class="column is-4">
            <div class="panel">
              <div class="panel section">
                <p class="has-text-centered"><i class="fa fa-cloud icon-block"></i></p>
                <br>
                <p>Capaz de manejar tecnologías web tanto del lado del servidor como del cliente.</p>
                <br>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <projects></projects>
    <footerbar></footerbar>
  </div>
</template>

<script>
  import MenuBar from './components/MenuBar';
  import FooterBar from './components/Footer';
  import Projects from './components/Projects';

  export default {
    name: 'app',
    components: {
      menubar: MenuBar,
      footerbar: FooterBar,
      projects: Projects,
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
