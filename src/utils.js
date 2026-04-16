import { filmData } from "@/assets/mock-data";

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function getFilmById(filmId) {
  return filmData.find((film) => film.filmId === filmId);
}

export function formatDate(value) {
  const date = new Date(value);
  if (!isNaN(date.getTime())) {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return null;
}

export function formatTime(value) {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  if (hours === 0) return `${minutes} m`;
  if (minutes === 0) return `${hours} h`;
  return `${hours} h ${minutes} m`;
}
