import Vue from 'vue'
import Vuex from 'vuex'
import sideBar from "./modules/sideBar";
import navBar from "./modules/navBar";
import data from "./modules/data";
import episodes from "./modules/episodes";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sideBar,
    navBar,
    data,
    episodes,
  }
})
