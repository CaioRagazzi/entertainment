import Vue from 'vue'
import Vuex from 'vuex'
import sideBar from "./modules/sideBar";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sideBar
  }
})
