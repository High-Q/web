<template>
  <section class="home">
    <v-container fluid fill-height class="home_content">
      <v-row>
      </v-row>
      <v-row>
        <v-col class="home_content-text">
          <p class="text-h5 font-weight-bold">
            江東区
            <br>
            バレーボールサークル
          </p>
          <p class="text-h4 font-weight-bold">High Q</p>
        </v-col>
      </v-row>
      <v-row> 
        <v-col class="home_content-text">       
          <p class="body-1 font-weight-bold">
            江東区を中心に活動を予定している
            <br>
            バレーボールサークルです！
            <br>
            立ち上げに伴って、
            <br>
            メンバーを募集しています。
            <br>
            20代〜30代男女、
            <br>
            がちがちの初心者の方から経験者の方まで
            <br>
            幅広くメンバー募集中です。
          </p>
        </v-col>
      </v-row>
    </v-container>
        <v-container fluid fill-height>
          <v-row justify="center" class="pa-md-16">
            <p class="text-h4"> High-Q's concept</p>
          </v-row>
          <v-row
            no-gutters
            justify="center"
          >
            <v-col align="center" class="pa-8" cols="12" md="4">
              <v-icon size="80">far fa-handshake</v-icon>
              <p class="text-h6 font-weight-bold">not ガチ勢 but エンジョイ勢</p>
              <p>
                ラリーが続かなくてもOK！
                <br>
                レシーブやスパイクができるまでのびのびやりましょう。
                <br>
                主幹事も頑張ってレクチャーします。
              </p>
            </v-col>
            <v-col align="center" class="pa-8" cols="12" md="4">
              <v-icon size="80">fas fa-circle-notch</v-icon>
              <p class="text-h6 font-weight-bold">・・・！！！！上ッ！</p>
              <p>
                ・・・突然の視力検査ッ
                <br>
                <br>
              </p>
            </v-col>
            <v-col align="center" class="pa-8" cols="12" md="4">
              <v-icon size="80">mdi-glass-cocktail</v-icon>
              <p class="text-h6 font-weight-bold">しっぽり</p>
              <p>
                スポーツの後のお酒は最高です。
                <br>
                しっぽり上品に親睦を深めましょう！
                <br>
                馬鹿騒ぎする人は速やかに帰りましょう。
              </p>
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
    font-size: 1rem;
    font-weight: bold;
  }

  &-text {
    color: white;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    }
}
</style>
