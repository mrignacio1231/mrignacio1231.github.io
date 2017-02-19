<template>
  <div>
    <section class="section main">
      <div class="container">
        <div class="heading">
          <h1 class="title has-text-centered">Proyectos realizados</h1>
        </div>
        <div class="columns">
          <div v-for="project in projects" class="column is-4">
            <div class="media section">
              <figure class="media-left">
                <p class="image is-128x128">
                  <img src="http://bulma.io/images/placeholders/128x128.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p class="title" v-text="project.name">Null</p>
                  <p v-text="project.description">Null</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  import ScrollReveal from 'scrollreveal';

  export default {
    data() {
      return {
        projects: [{
          name: 'Operativo',
          description: 'Manejo de certificados de salud para una empresa',
          img: '',
        }],
      };
    },
    mounted() {
      ScrollReveal({ duration: 500, delay: 200 }).reveal('.column');
    },
  };
</script>
