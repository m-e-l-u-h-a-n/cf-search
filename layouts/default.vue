<template>
  <v-app dark>
    <v-main>
      <brand/>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
      class="pink--text text--darken-1"
    >
      <span>&copy; {{ new Date().getFullYear() }}, All rights reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
import Brand from "@/components/Brand.vue";
export default {
  data () {
    return {}
  },
  components: {
    Brand,
  }
}
</script>
