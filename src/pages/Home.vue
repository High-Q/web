<template>
  <section class="home">
    <MainImage></MainImage>
    <Concept></Concept>
    <Activities></Activities>
    <event></event>
  </section>
</template>

<script>
import MainImage from "../components/MainImage.vue"
import Concept from "../components/Consept.vue";
import Activities from "../components/Activities.vue"
import Event from '../components/Event.vue';

export default {
  name: "Home",
  components: {
    Concept,
    MainImage,
    Activities,
    Event,
  },
};
</script>