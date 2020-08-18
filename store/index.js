import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            userList: [],
            hasLoaded: false,
            resulInit: 3,
            isProcessing: false,
            resultReady: 3,
            resultList: [],
            failed: false
        },
        getters: {
            processState: (state) => state.isProcessing,
            getResultList: (state) => state.resultList,
        },
        mutations: {
            orgFilter(state, org) {
                console.log('in orgFilter');
                state.resultList = state.resultList.filter(user => {
                    if ('organization' in user)
                        return user.organization.toLowerCase() === org
                    else
                        return true;
                });
            },
            countryFilter(state, country) {
                console.log('in countryFilter');
                state.resultList = state.resultList.filter(user => {
                    if ('country' in user)
                        return user.country.toLowerCase() === country
                    else
                        return true;
                });
            },
            cityFilter(state, city) {
                console.log('in cityFilter');
                state.resultList = state.resultList.filter(user => {
                    if ('city' in user)
                        return user.city.toLowerCase() === city;
                    else
                        return true;
                });
            },
            querySearch(state, query) {
                console.log(query);
                console.log(state.resultList.length, ' ', state.userList.length);
                for (let i = 0; i < state.resultList.length; i++) {
                    let user = state.resultList[i];
                    if (user.score != 0)
                        user.score = 0;
                    if (user.handle.toLowerCase().search(query) != -1)
                        user.score++;
                    if (('firstName' in user) && (user.firstName.toLowerCase().search(query) != -1))
                        user.score++;
                    if (('lastName' in user) && (user.lastName.toLowerCase().search(query) != -1))
                        user.score++;
                    if (('email' in user) && (user.email.toLowerCase().search(query) != -1))
                        user.score++;
                    if (('organization' in user) && (user.organization.toLowerCase().search(query) != -1))
                        user.score++;
                }
                state.resultList = state.resultList.filter(user => user.score > 0);
                console.log("After search result list length = ", state.resultList.length);
                //state.resultList.sort((a, b) => (a.score > b.score ? -1 : 1));
                this.isProcessing = false;
            },
            initialiseResultList(state) {
                this.resulInit = 1;
                state.resultList = state.userList;
                for (let user of state.resultList) {
                    user = {...user, score: 0 };
                }
                this.resulInit = 2;
            },
        },
        actions: {
            resultInititaliser({ commit }) {
                commit("initialiseResultList");
            },
            reset({ state, commit }) {
                state.resultReady = 3;
                state.isProcessing = false;
                commit('initialiseResultList');
            },
        },
        modules: {}
    });
}

export default createStore