import Vue from 'vue'
import Vuex from 'vuex'
import sideBar from "./modules/sideBar";
import navBar from "./modules/navBar";
import configuration from "./modules/configuration";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sideBar,
    navBar,
    configuration,
  }
})
