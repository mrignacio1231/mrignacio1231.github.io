<template lang="pug" src="./../views/Projects.pug" />

<script>
  import ScrollReveal from 'scrollreveal';

  export default {
    data() {
      return {
        projects: [{
          name: 'Operativo',
          description: 'Manejo de certificados de salud para una empresa',
          /* eslint-disable global-require */
          img: 'operativo.png',
        }],
      };
    },
    mounted() {
      ScrollReveal({ duration: 500, delay: 200 }).reveal('.column');
    },
    methods: {
      loadImage(url) {
        /* eslint-disable */
        return require(`./../assets/img/${url}`)
      },
    },
  };
</script>
