<script>
import filmImage from "@/assets/filmImage.png";
import DetailedFilmCard from "@/components/DetailedFilmCard.vue";

export default {
  components: { DetailedFilmCard },
  data() {
    return {
      film: {
        filmId: 1,
        title: "Hotel Transylvania",
        genres: ["Animation", "Comedy"],
        image: filmImage,
        altText: "Hotel Transylvania",
        description:
          "The Targaryen dynasty is at the absolute apex of its power, " +
          "with more than 10 dragons under their yoke. Most empires crumble from such heights. " +
          "In the case of the Targaryens, their slow fall begins when King Viserys breaks with a " +
          "century of tradition by naming his daughter Rhaenyra heir to the Iron Throne ...",
        rating: 7,
        releaseYear: "2022",
        endYear: "",
        isFavourite: false,
      },
    };
  },
};
</script>

<template>
  <div>
    <DetailedFilmCard :film="film" />
  </div>
</template>

<style scoped></style>
