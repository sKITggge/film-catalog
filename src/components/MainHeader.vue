<script>
import IconOptions from "@/components/icons/IconOptions.vue";
import IconMagnifyingGlass from "@/components/icons/IconMagnifyingGlass.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconNotifications from "@/components/icons/IconNotifications.vue";

export default {
  components: {
    IconNotifications,
    IconOptions,
    IconMagnifyingGlass,
    IconArrowDown,
  },
  data() {
    return {
      links: [
        { label: "All", href: "/" },
        { label: "Movie", href: "#" },
        { label: "Series", href: "#" },
      ],
      genres: [
        "Comedy",
        "Drama",
        "Historical",
        "Action",
        "Lover",
        "Animation",
        "Imaginary",
        "Criminal",
      ],
      showGenres: false,
    };
  },
  methods: {
    toggleShowGenres: function () {
      this.showGenres = !this.showGenres;
    },
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="header__links">
        <ul>
          <li
            v-for="item in links"
            :key="item.label"
          >
            <router-link
              class="header__links-item"
              active-class="header__links-active"
              :to="item.href"
              exact
            >
              {{ item.label }}
            </router-link>
          </li>
          <li>
            <button
              @click="toggleShowGenres"
              class="header__genres-dropdown header__links-item"
            >
              <span>Genres</span>
              <IconArrowDown />
            </button>
          </li>
        </ul>
      </nav>

      <div class="header__side-links">
        <div class="header__search">
          <IconMagnifyingGlass />
          <input type="text" placeholder="Search the series, movies ..." />
          <IconOptions />
        </div>

        <button class="header__notifications">
          <IconNotifications />
        </button>

        <a class="header__profile-link" href="#">
          <span>U</span>
        </a>
      </div>
    </div>

    <ul
      class="header__genres"
      v-if="showGenres"
    >
      <li
        v-for="genre in genres"
        :key="genre"
      >
        <router-link
          class="header__genres-item"
          :class="{ 'header__genres-item--active': $route.query.genre === genre }"
          :to="{ path: '/', query: { genre: genre } }"
        >
          {{ genre }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  padding: var(--space-5) var(--space-3) var(--space-4);
  margin-bottom: var(--space-3);
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__links ul {
  display: flex;
  gap: var(--space-4);
  list-style: none;
  padding: 0;
}

.header__links svg {
  width: 18px;
  height: 18px;
}

.header__links-item {
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  line-height: 1.4;

  padding-bottom: var(--space-1);
  border-bottom: 1px solid var(--color-neutral-90);
  transition: border-color 0.2s ease-in, color 0.2s ease-in;
}

.header__links-item:hover {
  border-bottom: 1px solid var(--color-primary-50);
  color: var(--color-primary-50);
}

.header__links-active {
  border-bottom: 1px solid var(--color-primary-50);
  color: var(--color-primary-50);
}

.header__genres-dropdown {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  border: none;
  border-bottom: 1px solid var(--color-neutral-90);
  background-color: transparent;
}

.header__genres-dropdown svg {
  stroke: var(--color-white);
  transition: fill 0.2s ease-in, transform 0.2s ease-in-out;
}

.header__genres-dropdown:hover svg {
  stroke: var(--color-primary-50);
  transform: rotate(180deg);
}

.header__genres {
  display: flex;
  list-style: none;
  gap: var(--space-3);
  margin-top: var(--space-2);
  padding: 0;
}

.header__genres-item {
  color: var(--color-neutral-30);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 4px 6px;
  cursor: pointer;
  transition: color 0.2s ease-in;
}

.header__genres-item:hover {
  color: var(--color-primary-40);
}

.header__genres-item--active {
  border-radius: var(--space-1);
  background-color: var(--color-primary-50);
  color: var(--color-neutral-90);
  transition: background-color 0.2s ease-in;
}

.header__genres-item--active:hover {
  color: var(--color-neutral-90);
  background-color: var(--color-primary-30);
}

.header__side-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.header__search {
  display: flex;
  align-items: center;
  gap: var(--space-1);

  padding: var(--space-2) var(--space-3);
  border-radius: 14px;

  background: #111111;
}

.header__search svg {
  width: 22px;
  height: 22px;
  fill: var(--color-white);
}

.header__search input {
  color: inherit;
  background: none;
  border: none;
  min-width: 29ch;
}

.header__search input:focus {
  outline: none;
}

.header__notifications {
  border: none;
  background: none;
  cursor: pointer;
}

.header__notifications svg {
  width: 28px;
  height: 28px;
  fill: var(--color-white);
  transition: fill 0.2s ease-in;
}

.header__notifications:hover svg {
  fill: var(--color-primary-50);
}

.header__profile-link {
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #111111;
  border: 1px solid var(--color-primary-50);
  border-radius: 50%;

  text-decoration: none;
  color: inherit;
  font-weight: 700;
  font-size: 24px;
}
</style>
