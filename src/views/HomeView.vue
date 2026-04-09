<script>
import MainHeader from "@/components/MainHeader.vue";
import MainSidebar from "@/components/MainSidebar.vue";
import FilmCard from "@/components/FilmCard.vue";
import filmImage from "@/assets/filmImage.png";

const filmsData = [
  {
    filmId: 1,
    title: "Hotel Transylvania",
    genres: ["Animation", "Comedy"],
    image: filmImage,
    altText: "Hotel Transylvania",
    rating: 7,
  },
  {
    filmId: 2,
    title: "Lucifer",
    genres: ["Crime", "Drama", "Fantasy"],
    image: filmImage,
    altText: "Lucifer",
    rating: 8.1,
  },
  {
    filmId: 3,
    title: "Gangs of London",
    genres: ["Action", "Drama", "Crime"],
    image: filmImage,
    altText: "Gangs of London",
    rating: 8,
  },
];

export default {
  data() {
    return {
      films: filmsData,
    };
  },
  components: {
    FilmCard,
    MainSidebar,
    MainHeader,
  },
};
</script>

<template>
  <div class="container">
    <MainSidebar />
    <div>
      <MainHeader />
      <main class="film-container">
        <FilmCard
          v-for="film in films"
          :key="film.filmId"
          :film="film"
        />
      </main>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 6fr;
  align-items: start;
}

.film-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin: 0 var(--space-4);
}
</style>
