import Vue from 'vue';
import Vuex from 'vuex';
import * as http from 'tns-core-modules/http';
import config from "./config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: 'c50ed36a9e46029dcf92211c22e931ea',
    movies: []
  },
  getters: {
    movies(state) {
      return state.movies;
    }
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    searchMovies(context, payload) {
      let url = 'https://api.themoviedb.org/3/search/movie' +
          '?api_key=' + config.apiKey +
          "&query=" + encodeURI(payload.searchTerm) +
          "&language=" + config.language;

      http.getJSON(url).then(
          (response) => {
            context.commit('setMovies', response.results);
            if (payload.callback) {
              payload.callback();
            }
          },
          (error) => {
            if (payload.callback) {
              payload.callback();
            }
          }
      );
    }
  }
});
