<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <p class="text-center text-h4">Activities</p>
    </v-row>
    <v-row justify="center">
      <p class="body-1">
        月に1回程度東京都内にて
        <br />
        コートを借りて練習します！
        <br />
        人数に合わせて活動回数も
        <br />
        増やしていく予定です。
        <br />
        参加希望者や気になった方は
        <br />
        公式TwitterにてDMで問い合わせください！
      </p>
      
    </v-row>
    <Tweet id="783943172057694208"></Tweet>

  </v-container>
</template>
<script>
import Tweet from 'vue-tweet-embed'
export default {
  name: "Activities",
   component: {
       Tweet,
   },
   data() {
    return {
      twitterId: "c8w5y",
    }
   }
};
</script>
