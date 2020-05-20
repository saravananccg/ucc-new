<template>
  <div>
    <div>
      <v-container style="padding:0px;">
        <v-row no-gutters>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat light color="#fff" class="pg-blr-60">
              <v-row no-gutters>
                <v-col
                  xs="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  :class="{
                    'd-flex align-center pr-12': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <div :class="{ 'pt-12': $vuetify.breakpoint.smAndDown }">
                    <h1>Everywhere your business needs to go</h1>
                    <br />
                    <p>
                      Get an all-in-one solution that simplifies how your
                      organization gets around.
                    </p>

                    <p class="pg-top-20">
                      <router-link
                        to="/contact"
                        :class="{ 'btn-small': $vuetify.breakpoint.smAndDown }"
                      >
                        <v-btn dark depressed large color="Black"
                          >Get Started</v-btn
                        >
                      </router-link>
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
                    'pl-3': $vuetify.breakpoint.mdAndUp,
                    'pt-12': $vuetify.breakpoint.smAndDown
                  }"
                >
                  <v-img
                    src="../assets/care-worker-banner.png"
                    width="100%"
                  ></v-img>
                  <br />
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
                    'd-flex pr-12': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <v-img
                    src="../assets/vouchersimageexport.png"
                    width="100%"
                  ></v-img>
                </v-col>
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
                    <h2>Impress your clients and customers</h2>
                    <br />
                    <p>
                      Use Uber Vouchers to customize how you provide rides at
                      any scale. Take care of your customers' needs on your
                      terms.
                    </p>
                    <p>
                      <a href="#">Learn more</a>
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
                    'd-flex pr-12': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <v-img
                    src="../assets/UberIM_004014-large.jpg"
                    width="100%"
                  ></v-img>
                </v-col>
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
                    <h2>Good for your bottom line</h2>
                    <br />
                    <p>
                      Say goodbye to inefficient, time-consuming expensing—with
                      savings of $58 per expense report.* Innovatively scale
                      business ground transportation as needs become more
                      complex.
                      <u
                        >*"How Much Do Expense Reports Really Cost A Company?</u
                      >
                      Global Business Travel Association. November 11, 2015"
                    </p>
                    <p>
                      <a href="#">Learn more</a>
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
                    'd-flex pr-12': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <v-img src="../assets/UberIM_000757.jpg" width="100%"></v-img>
                </v-col>
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
                    <h2>Impress your clients and customers</h2>
                    <br />
                    <p>
                      Use Uber Vouchers to customize how you provide rides at
                      any scale. Take care of your customers' needs on your
                      terms.
                    </p>
                    <p>
                      <a href="#">Learn more</a>
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat light color="#fff" class="pg-lr-60">
              <v-row no-gutters>
                <v-col
                  xs="12"
                  sm="12"
                  md="5"
                  lg="5"
                  xl="5"
                  :class="{
                    'd-flex align-center pr-12': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <div>
                    <h2>
                      “A game changer. It allows our hotel to align to the needs
                      of today's traveler.”
                    </h2>
                    <br />
                    <p>Dean Yamashita, Hotel Angeleno, Los Angeles</p>

                    <p>
                      <a href="#">Read more</a>
                    </p>
                  </div>
                </v-col>
                <v-col
                  xs="12"
                  sm="12"
                  md="7"
                  lg="7"
                  xl="7"
                  :class="{
                    'pl-3': $vuetify.breakpoint.mdAndUp
                  }"
                >
                  <v-img src="../assets/angeleno.jpg" width="100%"></v-img>
                  <br />
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
  name: "Care Workers",

  data: () => ({
    //
  })
};
</script>
<style lang="scss" scoped></style>
