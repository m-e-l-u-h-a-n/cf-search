<template>
    <v-row>
      <v-col cols="12">
          <h1>404</h1>
          <h2>Page not found</h2>
          <nuxt-link to="/">back to home</nuxt-link>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'error',
  methods: {
    animation() {
      var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 30
      function animate() {
        x += (lFollowX - x) * friction
        y += (lFollowY - y) * friction
        let translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)'
        let img = document.querySelector('#background')
        img.setAttribute('style',`-webit-transform: ${translate};-moz-transform: ${translate};transform: ${translate};`)
        window.requestAnimationFrame(animate)
      }
      document.addEventListener('mousemove', function (e) {
        var lMouseX = Math.max(
          -100,
          Math.min(100, window.innerWidth / 2 - e.clientX)
        )
        var lMouseY = Math.max(
          -100,
          Math.min(100, window.innerHeight / 2 - e.clientY)
        )
        lFollowX = (20 * lMouseX) / 100 // 100 : 12 = lMouxeX : lFollow
        lFollowY = (10 * lMouseY) / 100
      })
      animate()
    },
  },
  mounted() {
    this.animation()
    console.log('run')
  },
}
</script>

<style scoped lang="scss">
/*--------------------
Page
--------------------*/
.page {
  margin : 5rem 12rem;
  z-index: 1;
  font-family: Roboto, sans-serif;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px #76FF03 !important;
  display: flex;
  justify-content: center;
}
/*--------------------
Header
--------------------*/
.content {
  text-align: center;
  padding-top: 0px;
  color: #cdd4de;
  // position: absolute;
  // top: 10%;
  // left: 50%;
  transform: translate(-50%, -10%);
  h1 {
    font-weight: 900;
    font-size: 15rem;
    line-height: 1;
    margin-bottom: -0.9rem;
    opacity: 0.8;
    color: rgba($color: #fff, $alpha: 0.9);
    text-shadow: 2px 2px rgba($color: #aaa, $alpha: 0.8);
  }
  h2 {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 0.7rem;
    opacity: 0.9;
    color: rgba(213, 24, 59, 0.8);
    text-shadow: 1px 2px rgba($color: #fff, $alpha: 0.7);
  }
  a {
    display: inline-block;
    text-decoration: none;
    font-weight: 300;
    font-size: 12px;
    text-transform: uppercase;
    border: 1px solid #cdd4de94;
    padding: 0.5rem 0.9rem;
    border-radius: 0.25rem;
    opacity: 1;
    cursor: pointer;
    color: whitesmoke;
  }
}
/*--------------------
Image
--------------------*/
</style>