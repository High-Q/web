<template>
  <v-container fluid fill-height>
    <v-row justify="center" class="pa-md-16">
      <SubTitle title="Event"></SubTitle>
    </v-row>
    <v-row justify="center">
      <p class="text-h6 font-weight-bold">第7回バレーボールイベント</p>
    </v-row>
    <v-row justify="center">
      <p class="body-1">
        Comming Soon 
        <br>
        日時： 2021年X月X日(X) XX:XX〜XX:XX 
        <br>
        場所： XXX
        <br>
        持ち物： 運動できる服、シューズ、タオル、飲み物 
        <br>
        参加費： XXX 円
      </p>
    </v-row>
  </v-container>
</template>
<script>
import SubTitle from "./SubTitle.vue";
export default {
  name: "Event",
  components: {
    SubTitle,
  },
};
</script>
