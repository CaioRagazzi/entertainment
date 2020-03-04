import Vue from 'vue'
import VueRouter from 'vue-router'
import UpCommingMovies from "../views/movies/UpCommingMovies";
import LatestMovies from "../views/movies/LatestMovies";
import PopularMovies from "../views/movies/PopularMovies";
import TopRatedMovies from "../views/movies/TopRatedMovies";
import SearchMovie from "../views/movies/Search";
import PopularCasts from "../views/casts/PopularCasts";
import AiringToday from "../views/tvs/AiringToday";
import OnTheAir from "../views/tvs/OnTheAir";
import PopularTV from "../views/tvs/PopularTV";
import TopRatedTV from "../views/tvs/TopRatedTV";
import SearchTV from "../views/tvs/Search";
import MovieDetails from "../views/movies/MovieDetails";
import CastDetails from "../views/casts/CastDetails";
import SearchCast from "../views/casts/Search";
import SearchAll from "../views/search/Search";
import TVDetails from "../views/tvs/TVDetails";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UpCommingMovies',
    component: UpCommingMovies,
  },
  {
    path: '/Movie/NowPlaying',
    name: 'NowPlayingMovies',
    component: LatestMovies,
  },
  {
    path: '/Movie/Popular',
    name: 'PopularMovies',
    component: PopularMovies
  },
  {
    path: '/Movie/TopRated',
    name: 'TopRatedMovies',
    component: TopRatedMovies
  },
  {
    path: '/Movie/Search',
    name: 'SearchMovies',
    component: SearchMovie
  },
  {
    path: '/Cast/Popular',
    name: 'PopularCast',
    component: PopularCasts
  },
  
  {
    path: '/Cast/Search',
    name: 'SearchCast',
    component: SearchCast
  },
  {
    path: '/TV/AiringToday',
    name: 'AiringToday',
    component: AiringToday
  },
  {
    path: '/TV/OnTheAir',
    name: 'OnTheAir',
    component: OnTheAir
  },
  {
    path: '/TV/Popular',
    name: 'PopularTV',
    component: PopularTV
  },
  {
    path: '/TV/TopRatedTV',
    name: 'TopRatedTV',
    component: TopRatedTV
  },
  {
    path: '/TV/Search',
    name: 'SearchTV',
    component: SearchTV
  },
  {
    path: '/All/Search',
    name: 'SearchAll',
    component: SearchAll
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
