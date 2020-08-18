<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title>Codeforces User Search</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}, All rights reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";
export default {
  data () {
    return {}
  },
  components: {
    SearchForm,
  }
}
</script>
