<template>
  <section class="home">
    <MainImage></MainImage>
    <Concept></Concept>
  </section>
</template>

<script>
import MainImage from "../components/MainImage.vue"
import Concept from "../components/Consept.vue";
export default {
  name: "Home",
  components: {
    Concept,
    MainImage,
  },
};
</script>