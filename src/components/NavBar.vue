<template>
  <div style="background-color:#000; height:65px !important">
    <v-container style="padding:0px">
      <v-toolbar dark flat fixed color="black">
        <router-link to="/">
          <div style="display:flex;align-items:center;padding-right:10px">
            <img src="../assets/ucclogo.png" />
            <v-toolbar-title style="color:#fff">UCC</v-toolbar-title>
          </div>
        </router-link>
        <v-toolbar-items
          class="hidden-sm-and-down"
          style="background-color:#000; align-items:center;"
        >
          <router-link to="/about">
            <v-btn outline color="black">About Us</v-btn>
          </router-link>
          <router-link to="/care-providers">
            <v-btn outline color="black">Care Providers</v-btn>
          </router-link>
          <router-link to="/care-workers">
            <v-btn outline color="black">Care Workers</v-btn>
          </router-link>
          <router-link to="/nurses">
            <v-btn outline color="black">Nurses</v-btn>
          </router-link>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items
          class="hidden-sm-and-down"
          style="background-color:#000; align-items:center;"
        >
          <router-link to="/">
            <v-btn color="black">Help</v-btn>
          </router-link>
          <router-link to="/">
            <v-btn outline color="black">
              <v-icon left>mdi-account</v-icon>
              <span>Login</span>
            </v-btn>
          </router-link>
          <router-link to="/">
            <v-btn rounded light color="white ">Sign Up</v-btn>
          </router-link>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      menu: [
        { title: "Home", link: "/" },
        { title: "About Us", link: "/about" },
        { title: "Care Providers", link: "/care-providers" }
      ]
    };
  }
};
</script>
<style lang="scss">
* {
  text-transform: none !important;
  font-family: Roboto;
  padding: 0px;
  margin: 0px;
}
a {
  text-decoration: none;
  border: 0px;
  color: white;
}
</style>
