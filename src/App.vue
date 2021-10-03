<template>
  <v-app>
    <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
    <Header></Header>
        <v-content>
          <Home></Home>
        </v-content>
    <Footer></Footer>
  </v-app>  
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'

export default {
  // name: 'App',

  components: {
    Header,
    Home,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
