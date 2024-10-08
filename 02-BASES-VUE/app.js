// console.log(Vue);
const app = Vue.createApp({
  // template: `
  // <h1> Hola mundo</h1>
  // <p>Desde app.js</p>
  // `,
  data() {
    return {
      quote: "I'm Batman",
      author: 'Bruce Wayne',
    };
  },
  methods: {},
  watch: {},
});

app.mount('#myApp');
