<script>
import IconDiscover from "@/components/icons/IconDiscover.vue";
import IconWatchlist from "@/components/icons/IconWatchlist.vue";
import IconArtists from "@/components/icons/IconArtists.vue";

export default {
  components: { IconArtists, IconWatchlist, IconDiscover },
  data() {
    return {
      links: [
        { label: "Discover", href: "/", icon: IconDiscover },
        { label: "Watchlist", href: "#", icon: IconWatchlist },
        { label: "Artists", href: "/actors", icon: IconArtists },
      ],
    };
  },
};
</script>

<template>
  <aside class="sidebar">
    <router-link to="/">
      <img
        class="sidebar__logo"
        src="../assets/logo.svg"
        alt="logo"
      />
    </router-link>

    <h2 class="sidebar__title">Menu</h2>

    <nav>
      <ul class="sidebar__links">
        <li class="sidebar__links_item" v-for="link in links" :key="link.label">
          <router-link
            :to="link.href"
            active-class="sidebar__link-active"
            exact
          >
            <component class="sidebar__links_icon" :is="link.icon" />
            <span>{{ link.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  height: 100vh;
  border-right: 1px solid;
  border-left: 1px solid;
  border-image: linear-gradient(
      to bottom,
      transparent 10%,
      #d9d9d9 20%,
      #d9d9d9 25%,
      transparent 100%
    )
    1;
}

.sidebar__logo {
  margin: var(--space-4) var(--space-7);
}

.sidebar__title {
  padding-left: var(--space-5);
  font-size: 14px;
  color: var(--color-neutral-60);
}

.sidebar__links {
  list-style: none;
  padding-left: 0;
}

.sidebar__links_icon {
  width: var(--space-4);
  height: var(--space-4);
  fill: var(--color-neutral-30);
  transition: fill 0.2s ease-in;
}

.sidebar__links_item {
  position: relative;
  font-size: 18px;
  font-weight: 500;
  color: var(--color-neutral-30);
  padding: var(--space-1) var(--space-4);
  margin: var(--space-3) 0;
  transition: color 0.2s ease-in;
}

.sidebar__links_item:hover {
  color: var(--color-primary-60);
}

.sidebar__links_item a.sidebar__link-active {
  color: var(--color-primary-60);
}

.sidebar__links_item:hover .sidebar__links_icon,
.sidebar__link-active .sidebar__links_icon {
  fill: var(--color-primary-60);
}

.sidebar__links_item::before,
.sidebar__link-active::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  background-color: var(--color-neutral-90);
  transition: background-color 0.2s ease-in;
}

.sidebar__links_item:hover::before,
.sidebar__link-active::before {
  background-color: var(--color-primary-60);
}

.sidebar__links_item a {
  display: flex;
  gap: var(--space-2);
  align-items: center;

  text-decoration: none;
  color: inherit;
}
</style>
