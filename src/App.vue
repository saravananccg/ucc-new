<template>
  <v-app id="inspire">
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <div style="background-color:#000;">
      <Footer />
    </div>
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
  data: () => ({
    //
  })
};
</script>
<style>
* {
  text-transform: none !important;
  font-family: Roboto;
  margin: 0px;
  padding: 0px;
}
</style>
