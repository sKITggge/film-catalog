<script>
import FilmCard from "@/components/FilmCard.vue";
import { capitalize } from "@/utils";

export default {
  data() {
    return {
      search: "",
    };
  },
  components: { FilmCard },
  methods: {
    toggleFavourite(filmId) {
      this.$store.dispatch("toggleFavourite", filmId);
    },
    removeFilm(filmId) {
      this.$store.dispatch("removeFilm", filmId);
    },
  },
  computed: {
    films() {
      return this.$store.getters.films;
    },
    filteredFilms() {
      const genre = this.$route.query.genre;
      let result = this.films;

      if (genre) {
        result = this.films.filter((film) => film.genres.includes(genre));
      }

      if (this.search) {
        result = result.filter((film) =>
          film.title.toLowerCase().includes(this.search.toLowerCase())
        );
      }
      return result;
    },
  },
  filters: {
    capitalize: capitalize,
  },
  watch: {
    "$route.query.search": {
      handler(val) {
        this.search = val;
      },
      immediate: true,
    },
  },
  created() {
    this.$store.dispatch("fetchFilms");
  },
};
</script>

<template>
  <div>
    <h2 class="search-title" v-if="search">
      Search results for "{{ search | capitalize }}"
    </h2>
    <section class="film-container">
      <div
        class="film-item"
        v-for="film in filteredFilms"
        :key="film.filmId"
      >
        <FilmCard
          @toggleFavourite="toggleFavourite"
          :film="film"
        />
        <button
          class="remove-button"
          @click="removeFilm(film.filmId)"
        >
          Remove
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.film-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.film-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.remove-button {
  border: none;
  border-radius: var(--space-1);
  padding: var(--space-2);
  background: var(--color-neutral-70);
  color: white;
  cursor: pointer;
}

.search-title {
  font-size: var(--space-5);
  font-weight: 700;
  margin-bottom: var(--space-2);
}
</style>
