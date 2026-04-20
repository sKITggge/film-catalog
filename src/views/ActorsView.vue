<script>
import ActorCard from "@/components/ActorCard.vue";
import { actorsData } from "@/assets/mock-data";
import IconMagnifyingGlass from "@/components/icons/IconMagnifyingGlass.vue";
import IconCross from "@/components/icons/IconCross.vue";

export default {
  components: { IconCross, IconMagnifyingGlass, ActorCard },
  data() {
    return {
      actors: actorsData,
      search: "",
    };
  },
  methods: {
    handleSearch() {
      if (this.search.trim() === "") {
        return;
      }

      const query = { ...this.$route.query, search: this.search };
      this.search = "";
      this.$router.push({ path: "/actors", query });
    },
    clearSearch() {
      this.search = "";

      const query = { ...this.$route.query };
      delete query.search;
      this.$router.push({ path: "/actors", query });
    },
  },
  watch: {
    "$route.query.search": {
      handler(val) {
        if (val) {
          this.search = val;
          this.actors = actorsData.filter((actor) =>
            actor.name.toLowerCase().includes(val.toLowerCase())
          );
        } else {
          this.actors = actorsData;
        }
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div>
    <div class="search">
      <h1 class="search__title">List of Artists</h1>
      <div class="search__field-wrapper">
        <form
          class="search__field"
          @submit.prevent="handleSearch"
        >
          <IconMagnifyingGlass class="search__icon" />
          <input
            class="search__input"
            type="text"
            placeholder="Search the Actors, Actresses ..."
            v-model="search"
          />
        </form>
        <button
          @click="clearSearch"
          type="button"
          class="clear-search__button"
        >
          <IconCross class="clear-search__icon" />
        </button>
      </div>
    </div>
    <div class="actor-container">
      <ActorCard v-for="actor in actors" :key="actor.actorId" :actor="actor" />
    </div>
  </div>
</template>

<style scoped>
.actor-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.search {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.search__title {
  font-size: 24px;
  font-weight: 700;
}

.search__field-wrapper {
  display: flex;
  gap: var(--space-3);
  margin-inline: var(--space-10);
}

.clear-search__button {
  padding: var(--space-2);
  border-radius: var(--space-2);
  background-color: var(--color-neutral-80);
  border: none;
  outline: none;
  cursor: pointer;
}

.clear-search__icon {
  width: 32px;
  height: 32px;
  fill: var(--color-primary-50);
  transition: fill 0.2s ease-in;
}

.clear-search__button:hover .clear-search__icon {
  fill: var(--color-primary-30);
}

.search__field {
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  border-radius: var(--space-2);
  background-color: var(--color-neutral-80);
}

.search__icon {
  width: 24px;
  height: 24px;
  fill: var(--color-white);
}

.search__input {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--color-white);
}

.search__input:focus {
  outline: none;
}
</style>
