<template>
    <v-row justify="center" align-content-center>
      <v-col cols="10">
          <div class="content">
            <h1 class="display-4">404</h1>
            <h2>Page not found</h2>
            <nuxt-link to="/">Back to home</nuxt-link>
          </div>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'error',
  methods: {},
}
</script>

<style scoped lang="scss">
.content {
  text-align: center;
  color: #cdd4de;
  margin-top: 5rem;
  h1 {
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
    font-size: 0.9rem;
    text-transform: uppercase;
    border: 0.09rem solid #cdd4de94;
    padding: 0.5rem 0.9rem;
    border-radius: 0.25rem;
    opacity: 1;
    cursor: pointer;
    color: whitesmoke;
  }
}
</style>