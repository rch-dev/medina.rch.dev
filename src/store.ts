import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      medinaState: "idle",
  },
  mutations: {
      medinaInit (state) {
        axios.get('http://localhost:1001/')
          .then(res => {
              console.log(res);
              state.medinaState = res.data;
          })
          .catch(e => {
              console.log(e);
          })
      }
  },
  actions: {

  }
})
