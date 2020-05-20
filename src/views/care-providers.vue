<template>
  <div>
    <div>
      <v-container style="padding:0px;">
        <v-row no-gutters>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat light color="#fff" class="pg-blr-60">
              <v-row no-gutters>
                <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                  <v-img
                    src="../assets/care-provider-banner.jpg"
                    width="100%"
                  ></v-img>
                  <br />
                </v-col>
                <v-col
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  :class="{
                    'd-flex align-center pl-12': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <div>
                    <h1>Partner Protection Insurance with AXA XL in the UK</h1>
                    <br />
                    <p>
                      Eligible Driver and Delivery Partners are protected by
                      Partner Protection in London, Manchester, Birmingham and
                      other cities in the United Kingdom, from the financial
                      cost of life-changing events with insurance from AXA XL.
                      Now events like injury, sickness or having a baby don’t
                      have to come with all of the additional financial stress.
                    </p>
                    <p>
                      If you would like to make a claim for an On‑Trip Accident
                      or for an Off‑Trip life event, please use the AXA XL
                      online claims form (click the link below).
                    </p>
                    <p class="pg-top-20">
                      <router-link
                        to="/contact"
                        :class="{ 'btn-small': $vuetify.breakpoint.smAndDown }"
                      >
                        <v-btn dark depressed large color="Black"
                          >Search open roles</v-btn
                        >
                      </router-link>
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
                    'd-flex align-center': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <div>
                    <h2>There’s auto insurance to help protect you</h2>
                    <br />
                    <p>
                      We work with leading auto insurance providers to help
                      protect riders and drivers on the Uber app. Uber maintains
                      commercial auto insurance in case of a covered accident,
                      including at least $1 million in liability insurance on
                      behalf of our driver-partners once a ride is accepted.
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
                    'd-flex pl-12': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <v-img src="../assets/partners.jpg" width="100%"></v-img>
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
                  :class="{ 'pr-11': $vuetify.breakpoint.mdAndUp }"
                >
                  <div>
                    <v-img src="../assets/driver-safety.jpg"></v-img>
                    <h4>Driver safety</h4>

                    <p>
                      Count on 24/7 support to help with any questions or safety
                      concerns. Share your trip with loved ones. Our focus is on
                      your safety, so you can go where the opportunity is.
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
                  :class="{ 'pl-11': $vuetify.breakpoint.mdAndUp }"
                >
                  <div>
                    <v-img src="../assets/rider-safety.jpg"></v-img>
                    <h4>Rider safety</h4>

                    <p>
                      Millions of rides are requested every day. Every rider has
                      access to safety features built into the app. And every
                      ride has a support team if you need them.
                    </p>
                    <p>
                      <a href="#">Learn more</a>
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div style="background-color:#005eb8;">
      <v-container>
        <v-row no-gutters>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat dark color="#005eb8" class="pg-60">
              <v-row>
                <v-col
                  xs="12"
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12"
                  class="d-flex align-center pa-0"
                >
                  <v-card flat dark color="#005eb8">
                    <p class="font-weight-medium">
                      “Every day, our technology puts millions of people
                      together in cars in cities around the world. Helping keep
                      people safe is a huge responsibility and one we do not
                      take lightly.”
                    </p>
                    <p>Dara Khosrowshahi, Uber CEO</p>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container style="padding:0px;">
        <v-row no-gutters>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Care Providers",

  data: () => ({
    //
  })
};
</script>
<style lang="scss"></style>
