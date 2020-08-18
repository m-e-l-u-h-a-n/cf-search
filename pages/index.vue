<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm10 md10>
      <pre-loader v-if="!this.$store.state.hasLoaded"></pre-loader>
      <div v-else>
        <search-form></search-form>
        <display-result v-if="this.$store.state.resultReady == 2"/>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import PreLoader from '@/components/PreLoader.vue';
import SearchForm from '@/components/SearchForm.vue';
import DisplayResult from '@/components/DisplayResult.vue';
export default {
  components: {
    PreLoader,
    SearchForm,
    DisplayResult
  },
  //middleware: 'loadData'
};
</script>
