<script>
import ActorCard from "@/components/ActorCard.vue";
import { actorsData } from "@/assets/mock-data";

export default {
  components: { ActorCard },
  data() {
    return {
      actors: actorsData,
    };
  },
};
</script>

<template>
  <div class="actor-container">
    <ActorCard
      v-for="actor in actors"
      :key="actor.actorId"
      :actor="actor"
    />
  </div>
</template>

<style scoped>
.actor-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}
</style>
