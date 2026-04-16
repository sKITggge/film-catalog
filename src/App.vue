<script>
import MainSidebar from "@/components/MainSidebar.vue";
import MainHeader from "@/components/MainHeader.vue";

export default {
  components: {
    MainHeader,
    MainSidebar,
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <MainSidebar />
      <div>
        <MainHeader />
        <main class="wrapper">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 var(--space-4);
}

.container {
  display: grid;
  grid-template-columns: 1fr 6fr;
  align-items: start;
}
</style>
