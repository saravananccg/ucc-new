<template>
  <div>
    <div>
      <v-container style="padding:0px;">
        <v-row no-gutters>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-img src="../assets/About_us_600.jpg" width="100%">
              <div class="about-banner">
                <h1>About Us</h1>
              </div>
            </v-img>
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat light color="#fff" class="pg-60">
              <v-row no-gutters>
                <v-col cols="12" xs="12" sm="12" md="10" lg="10" xl="10">
                  <h2>We ignite opportunity by setting the world in motion</h2>
                  <br />
                  <p>
                    Good things happen when people can move, whether across town
                    or toward their dreams. Opportunities appear, open up,
                    become reality. What started as a way to tap a button to get
                    a ride has led to billions of moments of human connection as
                    people around the world go all kinds of places in all kinds
                    of ways with the help of our technology.
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat light color="#fff" class="pg-lr-60">
              <v-row>
                <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                  <v-img src="../assets/about_us2.jpg" width="100%"></v-img>
                  <br />
                </v-col>

                <v-col
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  :class="{
                    'd-flex align-center pa-8': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <div>
                    <h2>Rides and beyond</h2>
                    <br />
                    <p>
                      In addition to giving riders a way to get from point A to
                      point B, we're working to bring the future closer with
                      self-driving technology and urban air transport, helping
                      people order food quickly and affordably, removing
                      barriers to healthcare, creating new freight-booking
                      solutions, and helping companies provide a seamless
                      employee travel experience.
                    </p>
                    <p>
                      <v-row
                        :class="{
                          'p-2-small': $vuetify.breakpoint.smAndDown,
                          'p-2': $vuetify.breakpoint.mdAndUp
                        }"
                      >
                        <v-col xs="12" sm="12" md="7" lg="7" xl="7">
                          <a href="#">How to use the Uber app</a>
                        </v-col>
                        <v-col xs="12" sm="12" md="5" lg="5" xl="5">
                          <a href="#">Our Offerings</a>
                        </v-col>
                      </v-row>
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat light color="#fff" class="pg-blr-60">
              <v-row>
                <v-col
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  :class="{
                    'd-flex align-center pa-2': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <div>
                    <h2>Your safety drives us</h2>
                    <br />
                    <p>
                      Whether you’re in the back seat or behind the wheel, your
                      safety is essential. We are committed to doing our part,
                      and technology is at the heart of our approach. We partner
                      with safety advocates and develop new technologies and
                      systems to help improve safety and help make it easier for
                      everyone to get around.
                    </p>
                    <p>
                      <a href="#">Learn more</a>
                    </p>
                  </div>
                </v-col>
                <v-col
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  :class="{
                    'd-flex align-center pa-8': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <v-img src="../assets/about-shield.svg" width="100%"></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat class="pg-lr-60">
              <h2>Keep up with the latest</h2>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat light color="#fff" class="pg-60">
              <v-row>
                <v-col xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img
                    src="../assets/care_provider_icon.png"
                    width="51"
                  ></v-img>
                  <h4>Newsroom</h4>
                  <p class="pg-right-35">
                    Get full access to our online portal for FREE to connect,
                    book and directly pay to your caregivers
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </v-col>
                <v-col xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img src="../assets/phb_icon.png" width="65"></v-img>
                  <h4>Blog</h4>
                  <p class="pg-right-35">
                    Find new places to explore and learn about Uber products,
                    updates, partnerships, and more.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </v-col>
                <v-col xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img src="../assets/nurse_icon.png" width="37"></v-img>
                  <h4>Investor relations</h4>
                  <p class="pg-right-35">
                    Download financial reports, see next-quarter plans, and read
                    about our corporate responsibility initiatives.
                  </p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div style="background-color:#f6f6f6;margin:0px;padding:0px">
      <v-container>
        <v-row no-gutters>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat light color="#f6f6f6" class="pg-60">
              <v-row>
                <v-col
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  class="d-flex align-center pa-0"
                >
                  <v-card flat light color="#f6f6f6">
                    <h2>You've got drive. We've got jobs.</h2>
                    <br />
                    <router-link to="/contact">
                      <v-btn light depressed large color="white"
                        >Search open roles</v-btn
                      >
                    </router-link>
                  </v-card>
                </v-col>

                <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                  <v-card flat light color="#f6f6f6">
                    <v-img src="../assets/about-globe.svg" width="100%"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
.about-banner {
  padding-top: 45%;
  padding-left: 60px;
  color: #fff;
}
</style>
