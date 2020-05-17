<template>
  <v-container style="padding:0px">
    <v-row no-gutters>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card flat dark color="#005eb8" style="padding:60px 60px 60px 60px">
          <h1>Urban Care Community</h1>
          <v-row no-gutters>
            <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
              <p>
                UCC is an online marketplace to connect and hire, care workers
                and nurses anytime, anywhere.
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card flat dark color="#f6f6f6" style="padding:60px 60px 60px 60px">
          <h1>Urban Care Community</h1>
          <v-row no-gutters>
            <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
              <p>
                UCC is an online marketplace to connect and hire, care workers
                and nurses anytime, anywhere.
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-layout
      row
      text-xs-center
      wrap
      style="padding:60px 20px 60px 10px;background-color:#005eb8"
    >
      <v-flex xs12 sm12 md8 lg8 xl8>
        <v-card flat dark color="#005eb8" style="padding:0px 60px 0px 60px">
          <h1>Urban Care Community</h1>
          <v-flex xs12 sm12 md8 lg8 xl8>
            <p>
              UCC is an online marketplace to connect and hire, care workers and
              nurses anytime, anywhere.
            </p>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout
      row
      text-xs-center
      wrap
      style="padding:60px 20px 60px 60px; background-color:#f6f6f6"
    >
      <v-flex xs12 sm12 md6 lg6 xl6>
        <v-card flat color="#f6f6f6" style="padding:0px 0px">
          <div>
            <p class="p-1">Get in the largest network</p>
            <h2>Hire most Trusted Care Workers & Nurses</h2>
            <br />
            <router-link to="/contact">
              <v-btn dark depressed large color="#005eb8"
                >Sign Up for Care</v-btn
              > </router-link
            >&nbsp;&nbsp;
            <router-link to="/contact">
              <v-btn dark depressed large color="Black">Sign Up for Jobs</v-btn>
            </router-link>
            <br />
            <div style="padding-top:20px">
              <v-img src="../assets/rating@2x.png" width="60%"></v-img>
            </div>
          </div>
        </v-card>
      </v-flex>
      <div :class="{ 'banner-img-small-bg': $vuetify.breakpoint.smAndDown }">
        <v-img
          src="../assets/banner_image.png"
          class="banner-img"
          :class="{
            'banner-img-small': $vuetify.breakpoint.smAndDown,
            'banner-img': $vuetify.breakpoint.mdAndUp
          }"
        ></v-img>
      </div>
    </v-layout>

    <v-layout row text-xs-center wrap style="padding:60px 20px 0px 60px;">
      <v-flex xs12 sm12 md7 lg7 xl7>
        <v-card light flat>
          <v-img src="../assets/Safety_ilo@2x.png" width="90%"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md5 lg5 xl5 style="padding:0px 20px 0px 0px;">
        <v-card flat>
          <h2>Our commitment to your safety</h2>
          <br />
          <p>
            UCC only enlists caregivers who are insured and vetted by our
            internal system and Trust ID to ensure a streamlined background
            check mechanism.
          </p>
          <p>
            <a href="#">Learn more about our community guidelines</a>
          </p>
          <p>
            <a href="#">See all our safety measures</a>
          </p>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row text-xs-center wrap style="padding:0px 60px 0px 60px;">
      <v-flex xs12 sm12 md4 lg4 xl4 style="padding:20px 0px 0px 0px">
        <v-card light flat style="padding:0px 20px 0px 0px">
          <v-img src="../assets/care_provider_icon.png" width="51"></v-img>
          <h4>Care Providers</h4>
          <p>
            Get full access to our online portal for FREE to connect, book and
            directly pay to your caregivers
          </p>
          <p>
            <a href="#">Learn more</a>
          </p>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md4 lg4 xl4 style="padding:20px 0px 0px 0px">
        <v-card light flat style="padding:0px 20px 0px 0px">
          <v-img src="../assets/phb_icon.png" width="65"></v-img>
          <h4>Personal Health Budgets</h4>
          <p>
            Find your next PA effortlessly. With us you don’t have the trouble
            of long hiring procedures
          </p>
          <p>
            <a href="#">Learn more</a>
          </p>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md4 lg4 xl4 style="padding:20px 0px 0px 0px">
        <v-card light flat style="padding:0px 20px 0px 0px">
          <v-img src="../assets/nurse_icon.png" width="37"></v-img>
          <h4>Care Workers & Nurses</h4>
          <p>
            Earn respectfully with the local jobs available near you, paid
            directly to your account without deductions
          </p>
          <p>
            <a href="#">Learn more</a>
          </p>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row text-xs-center wrap style="padding:20px 20px 60px 60px;">
      <v-flex xs12 sm12 md6 lg6 xl6 style="padding:0px 20px 0px 0px">
        <v-card light flat>
          <input
            type="text"
            name="email"
            class="no-outline"
            :class="{ 'no-outline-small': $vuetify.breakpoint.smAndDown }"
            placeholder="Enter your email address"
          />
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6 lg6 xl6 style="padding:20px 20px 0px 0px">
        <v-card light flat>
          <div style="display:flex;align-items: center">
            <h2
              :class="{
                'h2-small font-weight-medium': $vuetify.breakpoint.smAndDown
              }"
            >
              Get Started for free
            </h2>
            <i style="font-size:46px;padding-left: 10px;" class="fa"
              >&#xf061;</i
            >
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Home"
};
</script>
<style lang="scss">
* {
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
  line-height: 52px;
  font-weight: 400;
}
h4 {
  font-size: 24px;
  letter-spacing: 0.25px;
  line-height: 29px;
  font-weight: normal;
  padding: 18px 0px;
}
p {
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1.25px;

  font-weight: 300;
}
p a {
  font-weight: 400;
  color: #000 !important;
}
p a:hover {
  font-weight: 400;
  color: #005eb8 !important;
  text-decoration: underline;
}
input[type="text"] {
  width: 100%;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  background-color: white;
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
.banner-img {
  top: 2%;
  right: 13%;
  width: 42%;
  position: absolute;
}
.banner-img-small {
  width: 100%;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  position: relative;
}
.banner-img-small-bg {
  width: 100%;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  position: relative;
  padding: 60px 20px;
}
</style>
