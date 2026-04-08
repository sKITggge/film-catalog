<script>
import MainHeader from "@/components/MainHeader.vue";
import MainSidebar from "@/components/MainSidebar.vue";

export default {
  components: {
    MainSidebar,
    MainHeader,
  },
};
</script>

<template>
  <div class="container">
    <MainSidebar />
    <MainHeader />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 6fr;
  align-items: start;
}
</style>
