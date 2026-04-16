<script>
import IconStar from "@/components/icons/IconStar.vue";
import { formattedRating } from "@/filters";
import { formatTime } from "@/utils";

export default {
  components: { IconStar },
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
  filters: {
    formattedRating,
    formatTime,
  },
};
</script>

<template>
  <article class="film-card">
    <img class="film-img" :src="film.image" :alt="film.altText" />
    <div class="film-info">
      <div class="film-info-header">
        <h1 class="film-info__title">{{ film.title }}</h1>
        <span>({{ film.releaseYear }} - {{ film.endYear || "" }})</span>
      </div>
      <ul class="film-info__list">
        <li class="film-info__item">{{ film.showType }}</li>
        <li class="film-info__item">
          {{ film.information.runtime | formatTime }}
        </li>
        <li class="film-info__item">{{ film.contentRating }}</li>
      </ul>
      <ul class="film-genres__list">
        <li
          class="film-genres__item"
          v-for="genre in film.genres"
          :key="genre"
        >
          {{ genre }}
        </li>
      </ul>
      <p class="film-card__description">
        {{ film.description }}
      </p>
      <div class="film-info__footer">
        <button class="film-card__button">Play Last Episode</button>
        <button class="film-card__button film-card__button-transparent">
          Watch Trailer
        </button>
        <div class="film-info__rating">
          <IconStar class="rating-star" />
          {{ film.rating | formattedRating }}
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.film-card {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-neutral-60);
  border-radius: var(--space-2);
  overflow: hidden;
}

.film-img {
  width: 100%;
}

.film-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding: var(--space-5);
}

.film-info-header {
  display: flex;
  gap: var(--space-4);
  align-items: flex-end;
}

.film-info__title {
  font-size: 48px;
  font-weight: 700;
  line-height: 100%;
}

.film-info__list {
  display: flex;
  gap: var(--space-2);
  list-style: none;
  padding-left: 0;
}

.film-info__item {
  font-size: 12px;
}

.film-info__item::after {
  content: "·";
  padding-left: var(--space-2);
}

.film-info__item:last-child::after {
  content: "";
  padding-left: 0;
}

.film-genres__list {
  display: flex;
  gap: var(--space-2);
  padding-left: 0;
  list-style: none;
}

.film-genres__item {
  border: 1px solid var(--color-neutral-80);
  border-radius: var(--space-2);
  background: var(--color-neutral-90);
  padding: var(--space-2) var(--space-3);
}

.film-card__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 150%;
}

.film-info__footer {
  display: flex;
  gap: var(--space-3);
  align-items: center;
}

.film-card__button {
  border-radius: var(--space-2);
  border: none;
  background: var(--color-primary-50);
  color: var(--color-black);
  font-size: 14px;
  padding: var(--space-2) var(--space-3);
  cursor: pointer;

  transition: background-color 0.2s ease-in;
}

.film-card__button:hover {
  background: var(--color-primary-40);
}

.film-card__button-transparent {
  background: transparent;
  border: 1px solid var(--color-primary-50);
  color: var(--color-primary-50);
  transition: background 0.2s ease-in, box-shadow 0.2s ease-in, color 0.2s ease-in;
}

.film-card__button-transparent:hover {
  color: var(--color-primary-40);
  border-color: var(--color-primary-40);
  background-color: transparent;
  box-shadow: 0 0 8px 1px var(--color-primary-40);
}

.film-info__rating {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.rating-star {
  width: var(--space-4);
  height: var(--space-4);
  fill: var(--color-primary-50);
}
</style>
