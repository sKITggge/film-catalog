import { filmData } from "@/assets/mock-data";

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function getFilmById(filmId) {
  return filmData.find((film) => film.filmId === Number(filmId));
}
