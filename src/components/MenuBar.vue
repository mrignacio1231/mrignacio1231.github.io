<template>
  <div>
    <div class="hero-head">
      <header class="nav has-shadow">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item is-brand" href="index.html">
              <p class="title">Ignacio Del Nardo</p>
            </a>
          </div>
          <div class="nav-center">
            <a href="https://github.com/mrignacio1231" class="nav-item">
              <span class="icon">
              <i class="fa fa-github"></i>
              </span>
            </a>
            <a class="nav-item">
              <span class="icon">
              <i class="fa fa-twitter"></i>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/ignaciodelnardo/" class="nav-item">
              <span class="icon">
              <i class="fa fa-linkedin"></i>
              </span>
            </a>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <a data-scroll href="#inicio" class="nav-item is-active">
              Home
            </a>
            <a data-scroll href="#projects" class="nav-item">
              Proyectos
            </a>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>
