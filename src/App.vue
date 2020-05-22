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
//import AboutContainer from "./components/AboutContainer";
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
<style lang="scss">
* {
  text-transform: none !important;
  font-family: Roboto;
  margin: 0px;
  padding: 0px;
}
h1 {
  font-size: 52px;
  letter-spacing: 0.25px;
  line-height: 66px;
  padding-bottom: 10px;
}
h2 {
  font-size: 42px;
  letter-spacing: 0.25px;
  line-height: 52px;
  font-weight: 500;
}
.h2-small {
  font-size: 28px;
  letter-spacing: 0.25px;
  line-height: 36px;
  font-weight: 400;
}
h4 {
  font-size: 24px;
  letter-spacing: 0.25px;
  line-height: 29px;
  font-weight: 500;
  padding: 18px 0px;
}
p {
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1.25px;
  font-weight: 400;
  a {
    font-weight: 500;
    color: #000 !important;
  }
  a:hover {
    font-weight: 500;
    color: #005eb8 !important;
    text-decoration: underline;
  }
}

input[type="text"] {
  width: 100%;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background-color: white;
}
.big-font-link-bg {
  display: flex;
  align-items: center;
  padding: 20px 0px;
}
.no-outline {
  font-size: 42px;
  padding: 12px 20px 12px 40px;
}
.no-outline:focus {
  outline: none;
}
.no-outline-small {
  font-size: 28px;
  padding: 12px 0px 12px 0px;
}
.no-outline-small:focus {
  outline: none;
}
.p-1 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-align: left;
  font-weight: 400;
  color: #005eb8;
}

.p-2 {
  display: flex;
}
.p-2-small {
  display: block;
}
.pg-60 {
  padding: 60px;
}
.pg-tb-60 {
  padding: 60px 0px;
}
.pg-lr-60 {
  padding: 0px 60px;
}
.pg-blr-60 {
  padding: 0px 60px 60px 60px;
}
.pg-top-20 {
  padding: 20px 0px 0px 0px;
}
.pg-top-30 {
  padding: 30px 0px 0px 0px;
}
.pg-top-60 {
  padding: 60px 0px 0px 0px;
}
.pg-bottom-60 {
  padding: 0px 0px 60px 0px;
}
.pg-right-35 {
  padding: 0px 40px 0px 0px;
}
.pg-left-60 {
  padding: 0px 0px 0px 60px;
}
.container {
  vertical-align: middle;
  justify-content: center;
  align-self: center;
}

@media (max-width: 700px) {
  * {
    text-transform: none !important;
    font-family: Roboto;
    margin: 0px;
    padding: 0px;
  }
  h1 {
    font-size: 36px;
    letter-spacing: 0.25px;
    line-height: 44px;
    padding-bottom: 10px;
  }
  h2 {
    font-size: 28px;
    letter-spacing: 0.25px;
    line-height: 36px;
    font-weight: 500;
  }
  .h2-small {
    font-size: 28px;
    letter-spacing: 0.25px;
    line-height: 36px;
    font-weight: 400;
  }
  h4 {
    font-size: 18px;
    letter-spacing: 0.25px;
    line-height: 24px;
    font-weight: 500;
    padding: 18px 0px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1.25px;
    font-weight: 400;
    a {
      font-weight: 500;
      color: #000 !important;
    }
    a:hover {
      font-weight: 500;
      color: #005eb8 !important;
      text-decoration: underline;
    }
  }
  .no-outline {
    font-size: 20px;
    padding: 12px 0px 12px 0px;
  }
  .no-outline:focus {
    outline: none;
  }
  .big-font-link-bg {
    display: flex;
    align-items: center;
    padding: 20px 0px;
    h2 {
      font-size: 20px;
    }
  }
}
</style>
