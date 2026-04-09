<script>
import IconStar from "@/components/icons/IconStar.vue";
import IconLike from "@/components/icons/IconLike.vue";

export default {
  components: { IconStar, IconLike },
  props: {
    film: Object,
  },
  data() {
    return {};
  },
  computed: {
    formattedRating() {
      return this.film.rating.toFixed(1).toString();
    },
    formattedGenres() {
      const capitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1);
      return this.film.genres.map((g) => capitalized(g)).join(", ");
    },
  },
};
</script>

<template>
  <router-link :to="'films/' + film.filmId" class="card">
    <img
      class="card__img"
      :src="film.image"
      :alt="film.altText"
    />
    <div class="card__rating">
      <IconStar class="card__rating-star" />
      {{ formattedRating }} <span class="card__rating-caption">/ 10</span>
    </div>
    <div class="card__favourite-wrapper">
      <button class="card__favourite-button">
        <IconLike class="card__favourite-icon" />
      </button>
    </div>
    <div class="card__info">
      <h2 class="card__title">
        {{ film.title }}
      </h2>
      <p class="card__genres">
        {{ formattedGenres }}
      </p>
    </div>
  </router-link>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: var(--space-2);
  border: var(--space-1) solid var(--color-neutral-80);
  background-color: var(--color-neutral-80);
  transition: border 0.3s ease-in;

  overflow: hidden;
  color: inherit;
}

.card:hover {
  border-color: var(--color-neutral-70);
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__rating {
  position: absolute;
  top: var(--space-1);
  left: var(--space-1);

  display: flex;
  align-items: center;

  background-color: var(--color-neutral-80);
  border-radius: var(--space-1);
  padding: 2px 4px;

  font-size: 12px;
}

.card__rating-star {
  width: var(--space-2);
  height: var(--space-2);
  fill: var(--color-primary-50);
}

.card__rating-caption {
  font-size: 10px;
  color: var(--color-neutral-30);
}

.card__favourite-wrapper {
  position: absolute;
  top: calc(var(--space-1) / 2);
  right: calc(var(--space-1) / 2);
}

.card__favourite-button {
  width: var(--space-4);
  height: var(--space-4);

  border: none;
  border-radius: var(--space-1);
  background-color: var(--color-neutral-60);
  transition: background-color 0.3s ease-in;

  cursor: pointer;
}

.card__favourite-icon {
  width: var(--space-2);
  height: var(--space-2);
  fill: var(--color-neutral-10);
}

.card__favourite-button:hover {
  background-color: var(--color-neutral-50);
}

.card__info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  text-align: center;
  padding: var(--space-2) var(--space-3);
  backdrop-filter: blur(16px);
}

.card__title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.card__genres {
  font-size: 12px;
  color: var(--color-neutral-10);
}
</style>
