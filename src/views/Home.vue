<template>
  <v-container style="padding:0px">
    <v-row no-gutters>
      <v-col xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card flat dark color="#005eb8" class="pg-60">
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
      <v-col xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card flat light color="#f6f6f6" class="pg-60">
          <v-row no-gutters>
            <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
              <p class="p-1">Get in the largest network</p>
              <h2>Hire most Trusted Care Workers & Nurses</h2>
              <br />
              <router-link to="/contact">
                <v-btn dark depressed large color="#005eb8"
                  >Sign Up for Care</v-btn
                > </router-link
              >&nbsp;&nbsp;
              <router-link
                to="/contact"
                :class="{ 'btn-small': $vuetify.breakpoint.smAndDown }"
              >
                <v-btn dark depressed large color="Black"
                  >Sign Up for Jobs</v-btn
                >
              </router-link>
              <div class="pg-top-20">
                <v-img src="../assets/rating@2x.png" width="100%"></v-img>
              </div>
            </v-col>
          </v-row>
        </v-card>
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
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card flat light color="#fff" class="pg-60">
          <v-row no-gutters>
            <v-col xs="12" sm="12" md="6" lg="6" xl="6">
              <v-img src="../assets/Safety_ilo@2x.png" width="100%"></v-img>
            </v-col>
            <v-col xs="12" sm="12" md="1" lg="1" xl="1"></v-col>
            <v-col xs="12" sm="12" md="5" lg="5" xl="5">
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
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="12" xl="12">
        <v-card flat light color="#fff" class="pg-lr-60">
          <v-row>
            <v-col xs="12" sm="12" md="4" lg="4" xl="4">
              <v-img src="../assets/care_provider_icon.png" width="51"></v-img>
              <h4>Care Providers</h4>
              <p class="pg-right-35">
                Get full access to our online portal for FREE to connect, book
                and directly pay to your caregivers
              </p>
              <p>
                <a href="#">Learn more</a>
              </p>
            </v-col>
            <v-col xs="12" sm="12" md="4" lg="4" xl="4">
              <v-img src="../assets/phb_icon.png" width="65"></v-img>
              <h4>Personal Health Budgets</h4>
              <p class="pg-right-35">
                Find your next PA effortlessly. With us you don’t have the
                trouble of long hiring procedures
              </p>
              <p>
                <a href="#">Learn more</a>
              </p>
            </v-col>
            <v-col xs="12" sm="12" md="4" lg="4" xl="4">
              <v-img src="../assets/nurse_icon.png" width="37"></v-img>
              <h4>Care Workers & Nurses</h4>
              <p class="pg-right-35">
                Earn respectfully with the local jobs available near you, paid
                directly to your account without deductions
              </p>
              <p>
                <a href="#">Learn more</a>
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
        xs="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
        :class="{ 'pa-12': $vuetify.breakpoint.mdAndUp }"
      >
        <v-card
          flat
          light
          :class="{
            'pa-12': $vuetify.breakpoint.smAndDown,
            'd-flex': $vuetify.breakpoint.mdAndUp
          }"
        >
          <div>
            <input
              type="text"
              name="email"
              class="no-outline"
              :class="{ 'no-outline-small': $vuetify.breakpoint.smAndDown }"
              placeholder="Enter your email address"
            />
          </div>
          <div class="big-font-link-bg">
            <h2
              :class="{
                'h2-small font-weight-medium': $vuetify.breakpoint.smAndDown
              }"
            >
              Get Started for free
            </h2>
            <v-icon dark left color="#000" size="52px"
              >mdi-arrow-right-thick</v-icon
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Home"
};
</script>
<style lang="scss">
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
  left: 50%;
  margin: 50% auto -50% auto;
  transform: translate(-50%, -50%);
}
.banner-img-small-bg {
  width: 100%;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  position: relative;
  padding: 60px 20px;
}
.btn-small {
  display: flex;
  padding-top: 10px;
}
</style>
