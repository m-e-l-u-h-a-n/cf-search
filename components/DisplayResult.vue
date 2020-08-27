<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card id="resultCard">
          <v-card-title>
            <div v-if="(resultList.length>0 && resultList.length<=1000)">Results</div>
            <div v-else-if="resultList.length<=0">☹️☹️ Sorry no results matched your query under given filters ☹️☹️</div>
            <div v-else>Too many results, consider using some filters, or more specified query.</div>
          </v-card-title>
          <v-card-text v-if="(resultList.length>0 && resultList.length<=1000)">
            <v-expansion-panels>
              <v-expansion-panel v-for="(user,index) in resultList" :key="index">
                <v-expansion-panel-header>{{ user.handle }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card flat>
                  <v-card-title>User Info</v-card-title>
                  <v-card-subtitle>{{user.handle}}</v-card-subtitle>
                  <v-card-text>
                    <v-list rounded>
                      <v-list-item-group>
                        <v-list-item v-if="checkName(user)">
                          <v-list-item-content>
                            <v-list-item-title>Name</v-list-item-title>
                            <v-list-item-subtitle>{{getName(user)}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>Rating</v-list-item-title>
                            <v-list-item-subtitle>{{user.rating}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-if="'organization' in user">
                          <v-list-item-content>
                            <v-list-item-title>Organization</v-list-item-title>
                            <v-list-item-subtitle>{{user.organization}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-if="'city' in user">
                          <v-list-item-content>
                            <v-list-item-title>City</v-list-item-title>
                            <v-list-item-subtitle>{{user.city}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-if="'country' in user">
                          <v-list-item-content>
                            <v-list-item-title>Country</v-list-item-title>
                            <v-list-item-subtitle>{{user.country}}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn text>
											<a :href="getProfileUrl(user)" target="_blank" rel="noopener noreferrer">See on codeforces</a>
										</v-btn>
                  </v-card-actions>
                </v-card>
              </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
	name: "DisplayResult",
  data() {
    return {};
  },
  computed: {
    ...mapState(["resultList"]),
  },
  methods: {
    checkName(user) {
      return 'firstName' in user || 'lastName' in user;
    },
    getName(user) {
      let name = "";
      if ('firstName' in user) {
        name = user.firstName;
        name = name + " ";
      }
      if ('lastName' in user) name = name + user.lastName;
      return name;
		},
		getProfileUrl(user){
			return "https://codeforces.com/profile/" + user.handle;
		}
  }
};
</script>
<style scoped>
#resultCard{
  box-shadow: 0 0 15px #76FF03 !important;
  margin-top: 3rem;
}
</style>