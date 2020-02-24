import Vue from 'vue'
import VueRouter from 'vue-router'
import UpCommingMovies from "../views/movies/UpCommingMovies";
import MovieDetails from "../views/movies/MovieDetails";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UpCommingMovies',
    component: UpCommingMovies
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
