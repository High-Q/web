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
    <v-row justify="center">
      <v-card class="mx-auto" max-height="200">
        <v-container
          id="scroll-target"
          style="max-height: 200px"
          class="overflow-y-auto"
        >
          <v-row
            v-scroll:#scroll-target="onScroll"
            align="top"
            justify="center"
          >
            <a
              class="twitter-timeline"
              href="https://twitter.com/c8w5y?ref_src=twsrc%5Etfw"
              >Tweets by c8w5y</a
            >
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Activities",
  component: {},
  mounted() {
    setTimeout(() => {
      let tweetScript = document.createElement("script");
      tweetScript.setAttribute(
        "src",
        "https://platform.twitter.com/widgets.js"
      );
      tweetScript.setAttribute("async", "true");
      document.head.appendChild(tweetScript);
    }, 100);
  },
};
</script>
