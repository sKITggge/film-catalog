<script>
import FilmCard from "@/components/FilmCard.vue";
import { capitalize } from "@/utils";
import { filmData } from "@/assets/mock-data";

export default {
  data() {
    return {
      films: filmData,
      search: "",
    };
  },
  components: { FilmCard },
  methods: {
    toggleFavourite(filmId) {
      this.films = this.films.map((film) => {
        return film.filmId === filmId
          ? { ...film, isFavourite: !film.isFavourite }
          : film;
      });
    },
  },
  computed: {
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
};
</script>

<template>
  <div>
    <h2 class="search-title" v-if="search">
      Search results for "{{ search | capitalize }}"
    </h2>
    <section class="film-container">
      <FilmCard
        @toggleFavourite="toggleFavourite"
        v-for="film in filteredFilms"
        :key="film.filmId"
        :film="film"
      />
    </section>
  </div>
</template>

<style scoped>
.film-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.search-title {
  font-size: var(--space-5);
  font-weight: 700;
  margin-bottom: var(--space-2);
}
</style>
