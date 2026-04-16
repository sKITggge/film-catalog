<script>
import DetailedFilmCard from "@/components/DetailedFilmCard.vue";
import FilmInfo from "@/components/FilmInfo.vue";
import { getFilmById } from "@/utils";

export default {
  components: { FilmInfo, DetailedFilmCard },
  data() {
    return {
      film: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    const film = getFilmById(Number(to.params.filmId));
    if (!film) {
      next('/404');
    } else {
      next((vm) => {
        vm.film = film;
      });
    }
  },
};
</script>

<template>
  <div v-if="film" class="container">
    <DetailedFilmCard :film="film" />
    <FilmInfo :info="film.information" />
    <div>
      <h4 class="story-line__title">Story line:</h4>
      <p class="story-line__content">
        {{ film.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: var(--space-7);
}

.story-line__title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: var(--space-1);
}

.story-line__content {
  font-size: 18px;
  font-weight: 200;
  line-height: 150%;
}
</style>
