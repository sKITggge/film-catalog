import Vue from "vue";
import Vuex from "vuex";
import { filmData } from "@/assets/mock-data";
import {
  ADD_FILM,
  REMOVE_FILM,
  SET_FILMS,
  TOGGLE_FAVOURITE,
} from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: [],
  },
  getters: {
    films: (state) => state.films,
  },
  mutations: {
    [SET_FILMS](state, films) {
      state.films = films;
    },
    [ADD_FILM](state, film) {
      state.films = [film, ...state.films];
    },
    [REMOVE_FILM](state, filmId) {
      state.films = state.films.filter((film) => film.filmId !== filmId);
    },
    [TOGGLE_FAVOURITE](state, filmId) {
      state.films = state.films.map((film) => {
        return film.filmId === filmId
          ? { ...film, isFavourite: !film.isFavourite }
          : film;
      });
    },
  },
  actions: {
    fetchFilms({ commit }) {
      commit(SET_FILMS, filmData);
    },
    addFilm({ commit, state }, film) {
      const maxId = state.films.reduce(
        (acc, item) => Math.max(acc, item.filmId),
        0
      );
      commit(ADD_FILM, { ...film, filmId: maxId + 1 });
    },
    removeFilm({ commit }, filmId) {
      commit(REMOVE_FILM, filmId);
    },
    toggleFavourite({ commit }, filmId) {
      commit(TOGGLE_FAVOURITE, filmId);
    },
  },
});
