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
};
</script>

<template>
  <header>
    <nav class="header-links">
      <ul>
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Movie</a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
        <li class="header-links-dropdown">
          <a href="#">Genres</a>
          <IconArrowDown></IconArrowDown>
        </li>
      </ul>
    </nav>
    <div class="header-side-links">
      <div class="header-search">
        <IconMagnifyingGlass></IconMagnifyingGlass>
        <input type="text" placeholder="Search the series, movies ..." />
        <IconOptions></IconOptions>
      </div>
      <button class="header-notifications">
        <IconNotifications></IconNotifications>
      </button>
      <a class="header-profile-link" href="#">
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
  z-index: 50;
}

.header-links ul {
  display: flex;
  gap: var(--space-4);
  list-style: none;
  padding: 0;
}

.header-links svg {
  width: 18px;
  height: 18px;
}

.header-links a {
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease-in;
}

.header-links li {
  padding-bottom: var(--space-1);
  border-bottom: 1px solid var(--color-neutral-90);

  transition: border-color 0.2s ease-in;
}

.header-links li:hover {
  border-bottom: 1px solid var(--color-primary-50);
  color: var(--color-primary-50);
}

.header-links-dropdown {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.header-links-dropdown svg {
  stroke: var(--color-white);
  transition: fill 0.2s ease-in, transform 0.2s ease-in-out;
}

.header-links-dropdown:hover svg {
  stroke: var(--color-primary-50);
  transform: rotate(180deg);
}

.header-side-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.header-search {
  display: flex;
  align-items: center;
  gap: var(--space-1);

  padding: var(--space-2) var(--space-3);
  border-radius: 14px;

  background: #111111;
}

.header-search svg {
  width: 22px;
  height: 22px;
  fill: var(--color-white);
}

.header-search input {
  color: inherit;
  background: none;
  border: none;
  min-width: 29ch;
}

.header-search input:focus {
  outline: none;
}

.header-notifications {
  border: none;
  background: none;
  cursor: pointer;
}

.header-notifications svg {
  width: 28px;
  height: 28px;
  fill: var(--color-white);
  transition: fill 0.2s ease-in;
}

.header-notifications:hover svg {
  fill: var(--color-primary-50);
}

.header-profile-link {
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
