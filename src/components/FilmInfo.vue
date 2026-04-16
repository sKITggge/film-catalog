<script>
import { formatDate, formatTime } from "@/utils";
import IconStar from "@/components/icons/IconStar.vue";

export default {
  components: { IconStar },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  filters: {
    formatDate,
    formatTime,
    formatNetworks(values) {
      return values.join(", ");
    },
  },
};
</script>

<template>
  <aside class="extra-info">
    <h3 class="extra-info__title">Information</h3>
    <ul class="extra-info__grid">
      <li class="extra-info__item">
        <span class="extra-info__item-title">
          <IconStar class="extra-info__icon" />
          Country
        </span>
        <span>{{ info.country }}</span>
      </li>
      <li class="extra-info__item">
        <span class="extra-info__item-title">
          <IconStar class="extra-info__icon" />
          Release Date
        </span>
        <span>{{ info.releaseDate | formatDate }}</span>
      </li>
      <li class="extra-info__item">
        <span class="extra-info__item-title">
          <IconStar class="extra-info__icon" />
          Language
        </span>
        <span>{{ info.language }}</span>
      </li>
      <li class="extra-info__item">
        <span class="extra-info__item-title">
          <IconStar class="extra-info__icon" />
          Network
        </span>
        <span>{{ info.networks | formatNetworks }}</span>
      </li>
      <li class="extra-info__item">
        <span class="extra-info__item-title">
          <IconStar class="extra-info__icon" />
          Director
        </span>
        <span>{{ info.director }}</span>
      </li>
      <li class="extra-info__item">
        <span class="extra-info__item-title">
          <IconStar class="extra-info__icon" />
          Runtime
        </span>
        <span>{{ info.runtime | formatTime }}</span>
      </li>
      <li class="extra-info__item">
        <span class="extra-info__item-title">
          <IconStar class="extra-info__icon" />
          Closed Caption
        </span>
        <span>{{ info.closedCaption }}</span>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.extra-info {
  width: 100%;
}

.extra-info__title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: var(--space-5);
}

.extra-info__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  column-gap: var(--space-10);

  list-style: none;
  padding-left: 0;
}

.extra-info__item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--color-neutral-60);
}

.extra-info__item:nth-child(-n + 2) {
  border-top: 1px solid var(--color-neutral-60);
}
.extra-info__item-title {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.extra-info__icon {
  width: var(--space-4);
  height: var(--space-4);
  fill: var(--color-primary-50);
}
</style>
