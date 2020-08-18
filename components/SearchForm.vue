<template>
  <span mt-3>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title color="primary">
              <div class="headline my-2">Codeforces User search</div>
            </v-card-title>
            <v-card-subtitle>All fields and filters are optional but you have to fill atleast one for valid search.</v-card-subtitle>
            <v-card-text>
              <v-container>
                <v-layout column>
                  <v-flex xs12>
                    <v-text-field
                      v-model="query"
                      label="Query String"
                      type="text"
                      :rules="queryRules"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <div class="text-h4">Filters</div>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="org" label="organization" type="text"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="country" label="Country" type="text"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="city" label="City" type="text"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" :disabled="!isValid" @click="submit">Search</v-btn>
              <v-btn color="primary" :disabled="!isValid" @click="initialise">Reset</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>
<script>
import { mapGetters,mapState } from "vuex";
export default {
  name: "SearchForm",
  data() {
    return {
      query: "",
      org: "",
      country: "",
      city: "",
      queryRules: [v => !!v || "This field cannot be empty!"]
    };
  },
  computed: {
    ...mapGetters(["processState"]),
    isValid() {
      return this.query.length > 0;
    },
    ...mapState(["resetClicked"]),
  },
  methods: {
    submit() {
      this.$store.state.isProcessing = true;
      this.$store.state.resultReady = 1;
      this.$store.dispatch('resultInititaliser');
      if (this.org.length > 0) {
        this.$store.commit("orgFilter", this.org.toLowerCase());
      }
      if (this.country.length > 0) {
        this.$store.commit("countryFilter", this.country.toLowerCase());
      }
      if (this.city.length > 0) {
        this.$store.commit("cityFilter", this.city.toLowerCase());
      }
      this.$store.commit("querySearch", this.query.toLowerCase());
      this.$store.state.isProcessing = false;
      this.$store.state.resultReady = 2;
    },
    resetProcess(){
      this.query = "";
      this.org = "";
      this.country = "";
      this.city = "";
    },
    initialise() {
      this.resetProcess();
      this.$store.dispatch("reset");
    },
  }
};
</script>
<style scoped></style>