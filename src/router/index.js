import Vue from 'vue'
import VueRouter from 'vue-router'
import UpCommingMovies from "../views/movies/UpCommingMovies";
import LatestMovies from "../views/movies/LatestMovies";
import PopularMovies from "../views/movies/PopularMovies";
import TopRatedMovies from "../views/movies/TopRatedMovies";
import PopularCasts from "../views/casts/PopularCasts";
import AiringToday from "../views/tvs/AiringToday";
import MovieDetails from "../views/movies/MovieDetails";
import CastDetails from "../views/casts/CastDetails";
import TVDetails from "../views/tvs/TVDetails";

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
    component: LatestMovies,
  },
  {
    path: '/PopularMovies',
    name: 'Popular',
    component: PopularMovies
  },
  {
    path: '/TopRatedMovies',
    name: 'TopRated',
    component: TopRatedMovies
  },
  {
    path: '/PopularCast',
    name: 'PopularCast',
    component: PopularCasts
  },
  {
    path: '/TV/AiringToday',
    name: 'AiringToday',
    component: AiringToday
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails
  },
  {
    path: '/cast/:id',
    name: 'CastDetails',
    component: CastDetails
  },
  {
    path: '/tv/:id',
    name: 'TVDetails',
    component: TVDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
