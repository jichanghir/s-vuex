import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 12
    },
    getters: {
        count(state, allGetter) {
            return state.count;
        }
    },
    mutations: {
        inc(state, v) {
            state.count += v;
        },
        dec(state, v) {
            state.count -= v;
        }
    },
    actions: {
        doSomething(context) {
            console.log('do');
        }
    },
    modules: {
        submodule: {
            namespaced: true,
            state: {
                count: 20
            },
            getters: {
                count(state, getters, rootState, rootGetters) {
                    return rootState.count;
                }
            },
            mutations: {
                inc(state) {
                    state.count *= 2;
                }
            },
            actions: {
                doSomething({commit}) {
                    commit('inc', 6, {root: true});
                }
            },
            modules: {
                ///
            }
        },
        another: {
            state: {},
            getters: {},
            mutations: {},
            actions: {}
        },
        some: {
            state: {},
            getters: {},
            mutations: {},
            actions: {}
        }
    }
});
