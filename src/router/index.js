import Vue from 'vue'
import VueRouter from 'vue-router'
import UpCommingMovies from "../views/movies/UpCommingMovies";
import LatestMovies from "../views/movies/LatestMovies";
import PopularMovies from "../views/movies/PopularMovies";
import TopRatedMovies from "../views/movies/TopRatedMovies";
import MovieDetails from "../views/movies/MovieDetails";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UpCommingMovies',
    component: UpCommingMovies,
  },
  {
    path: '/NowPlaying',
    name: 'NowPlaying',
    component: LatestMovies
  },
  {
    path: '/Popular',
    name: 'Popular',
    component: PopularMovies
  },
  {
    path: '/TopRated',
    name: 'TopRated',
    component: TopRatedMovies
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
