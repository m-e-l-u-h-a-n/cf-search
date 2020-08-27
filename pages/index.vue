<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm10 md10>
      <pre-loader v-if="!this.$store.state.hasLoaded"></pre-loader>
      <div v-else>
        <search-form></search-form>
        <display-result/>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import PreLoader from '@/components/PreLoader.vue';
import SearchForm from '@/components/SearchForm.vue';
import DisplayResult from '@/components/DisplayResult.vue';
export default {
  components: {
    PreLoader,
    SearchForm,
    DisplayResult
  },
  created(){
    console.log("Loading data");
    this.$axios
      .$get()
      .then(({ result }) => {
          console.log("success");
          //console.log("data = ", result);
          this.$store.state.userList = result;
          this.$store.state.hasLoaded = true;
      })
      .catch((err) => {
          //this.$error(err);
          console.log("failed");
          this.$store.state.failed = true;
          console.log(error);
      })
  }
};
</script>
