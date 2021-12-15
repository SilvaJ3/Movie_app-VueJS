import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    loadMovies(state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    loadMovies({ commit }) {
      axios.get("https://api.themoviedb.org/3/movie/550?api_key=c0b1ecd6347e5b7e8483c2353b7da5ab")
        .then(response => {
          commit("loadMovies", response.data.results);
        })
    }
  },
  modules: {
  }
})
