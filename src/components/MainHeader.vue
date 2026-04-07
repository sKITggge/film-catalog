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
      links: ["All", "Movie", "Series"],
    };
  },
};
</script>

<template>
  <header>
    <nav class="header__links">
      <ul>
        <li v-for="item in links" :key="item">
          <a href="#">{{ item }}</a>
        </li>
        <li class="header__links-dropdown">
          <a href="#">Genres</a>
          <IconArrowDown />
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
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5) var(--space-3) var(--space-4);
  margin-bottom: var(--space-3);
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

.header__links a {
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease-in;
}

.header__links li {
  padding-bottom: var(--space-1);
  border-bottom: 1px solid var(--color-neutral-90);

  transition: border-color 0.2s ease-in;
}

.header__links li:hover {
  border-bottom: 1px solid var(--color-primary-50);
  color: var(--color-primary-50);
}

.header__links-dropdown {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.header__links-dropdown svg {
  stroke: var(--color-white);
  transition: fill 0.2s ease-in, transform 0.2s ease-in-out;
}

.header__links-dropdown:hover svg {
  stroke: var(--color-primary-50);
  transform: rotate(180deg);
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
