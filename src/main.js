import Vue from 'vue';
import App from './App';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mounted() {
    /* eslint-disable no-undef */
    smoothScroll.init();
    /* eslint-disable */
    const burger = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  },
});

