<script>
export default {
  props: {
    actor: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <router-link
    :to="{ name: 'actors', params: { actorId: actor.actorId } }"
    class="actor-card"
  >
    <img
      class="actor-card__image"
      :src="actor.image"
      :alt="actor.name"
    />
    <div class="actor-card__roles">
      <div
        v-for="role in actor.roles"
        :key="role"
        class="actor-card__role"
      >
        {{ role }}
      </div>
    </div>
    <div class="actor-card__info">
      <h2 class="actor-card__title">
        {{ actor.name }}
      </h2>
      <p class="actor-card__caption">
        {{ actor.moviesCount }}
      </p>
    </div>
  </router-link>
</template>

<style scoped>
.actor-card {
  position: relative;
  border-radius: var(--space-3);
  background-color: var(--color-neutral-80);
  min-width: 270px;
  overflow: hidden;
  color: inherit;
}

.actor-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.actor-card__roles {
  position: absolute;
  top: var(--space-3);
  left: var(--space-1);

  display: flex;
  gap: calc(var(--space-1) / 2);
  flex-wrap: wrap;
}

.actor-card__role {
  font-size: 14px;
  font-weight: 300;

  border-radius: var(--space-3);
  background-color: #00000099;
  backdrop-filter: blur(10px);

  padding: calc(var(--space-1) / 2) var(--space-1);
}

.actor-card__info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  text-align: center;
  padding: var(--space-1) var(--space-3);
  backdrop-filter: blur(68px);
}

.actor-card__title {
  font-size: 14px;
  font-weight: 600;
}

.actor-card__caption {
  font-size: 12px;
}
</style>
