<template>
  <section class="home">
    <v-container fluid fill-height class="home_content">
      <v-row>
      </v-row>
      <v-row>
        <v-col class="home_content-text">
          <p>江東区バレーボールサークル</p>
          <p>High Q</p>
        </v-col>
      </v-row>
      <v-row> 
        <v-col class="home_content-text">       
          <p class='activity_content'>江東区を中心に活動を予定しているバレーボールサークルです！</p>
          <p class='activity_content'>立ち上げに伴って、メンバーを募集しています。</p>
          <p class='activity_content'>20代〜30代男女、がちがちの初心者の方から経験者の方まで幅広くメンバー募集中です。</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'Home'
  }
  </script>

<style  lang="scss" scoped>
.home_content {
  background: url("../assets/chandan-chaurasia-tAcoHIvCtwM-unsplash.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 75vh;
 
.activity_content {
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
 }

&-text {
  color: white;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  }
}
</style>
