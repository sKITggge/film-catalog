<script>
import FilmCard from "@/components/FilmCard.vue";
import filmImage from "@/assets/filmImage.png";
import { capitalize } from "@/utils";

const filmsData = [
  {
    filmId: 1,
    title: "Hotel Transylvania",
    genres: ["Animation", "Comedy"],
    image: filmImage,
    altText: "Hotel Transylvania",
    rating: 7,
    isFavourite: false,
  },
  {
    filmId: 2,
    title: "Lucifer",
    genres: ["Crime", "Drama", "Fantasy"],
    image: filmImage,
    altText: "Lucifer",
    rating: 8.1,
    isFavourite: false,
  },
  {
    filmId: 3,
    title: "Gangs of London",
    genres: ["Action", "Drama", "Crime"],
    image: filmImage,
    altText: "Gangs of London",
    rating: 8,
    isFavourite: false,
  },
];

export default {
  data() {
    return {
      films: filmsData,
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
