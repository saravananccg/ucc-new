<template>
  <div>
    <div>
      <v-container>
        <v-row no-gutters>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat light color="#fff" class="pg-60">
              <v-row no-gutters>
                <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                  <h1>Driving safety forwards</h1>
                  <br />
                  <p>
                    Your safety is our priority. We never stop working to reduce
                    incidents and set new standards, so you can stay connected
                    and protected every time you ride with us. Because safety
                    never stops.
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div :class="{ 'nurses-bg-img': $vuetify.breakpoint.mdAndUp }">
      <v-img
        :class="{ 'nurses-bg-img-small': $vuetify.breakpoint.mdAndUp }"
        src="../assets/nurses-banner.jpg"
      ></v-img>
    </div>
    <div>
      <v-container>
        <v-row no-gutters>
          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat light color="#fff" class="pg-60">
              <v-row>
                <v-col cols="auto" xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img
                    src="../assets/care_provider_icon.png"
                    width="51"
                  ></v-img>
                  <h4>Emergency assistance</h4>
                  <p>
                    Get help fast. Call local emergency services right from the
                    app, wherever you are.
                  </p>
                </v-col>
                <v-col cols="auto" xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img src="../assets/phb_icon.png" width="65"></v-img>
                  <h4>24/7 Customer Support</h4>
                  <p>
                    Whether you have a quick question or an incident to report,
                    it’s easy to get the help you need. Access 24/7 support
                    directly through the app, whenever you need it.
                  </p>
                </v-col>
                <v-col cols="auto" xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img src="../assets/nurse_icon.png" width="37"></v-img>
                  <h4>Share My Trip</h4>
                  <p>
                    Let the people you love know where you are. Choose your
                    Trusted Contacts in the app and set reminders to share your
                    trip details with them.
                  </p>
                </v-col>
                <v-col cols="auto" xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img
                    src="../assets/care_provider_icon.png"
                    width="51"
                  ></v-img>
                  <h4>Safety Centre</h4>
                  <p>
                    Visit the in-app Safety Centre to learn what we're doing to
                    help keep you safe. Just tap the shield icon the next time
                    you take a trip.
                  </p>
                </v-col>
                <v-col cols="auto" xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img src="../assets/phb_icon.png" width="65"></v-img>
                  <h4>2-way Ratings</h4>
                  <p>
                    Your feedback matters. The two-way rating system maintains
                    an enjoyable Uber experience and helps keep riders and
                    drivers safe. A consistently low-rating can lead to
                    suspension or deactivation.
                  </p>
                </v-col>
                <v-col cols="auto" xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img src="../assets/nurse_icon.png" width="37"></v-img>
                  <h4>GPS Tracking</h4>
                  <p>
                    All Uber rides are tracked by GPS from start to finish, so
                    you can follow your ride and see exactly where you’re going.
                  </p>
                </v-col>
                <v-col cols="auto" xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img
                    src="../assets/care_provider_icon.png"
                    width="51"
                  ></v-img>
                  <h4>Phone Number Anonymization</h4>
                  <p>
                    Calls and messages made using the Uber app do not reveal
                    personal phone numbers. Your details are automatically
                    protected.
                  </p>
                </v-col>
                <v-col cols="auto" xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img src="../assets/phb_icon.png" width="65"></v-img>
                  <h4>Driver Profile</h4>
                  <p>
                    Get to know your driver before you step into their car. You
                    can see their rating, how many trips they've completed, how
                    long they’ve been driving, compliments from previous riders,
                    and more.
                  </p>
                </v-col>
                <v-col cols="auto" xs="12" sm="12" md="4" lg="4" xl="4">
                  <v-img src="../assets/nurse_icon.png" width="37"></v-img>
                  <h4>Ride Check</h4>
                  <p>
                    Using sensors and GPS data, RideCheck can help detect if a
                    trip has an unexpected long stop. If so, we'll check on you
                    and offer tools to get help.¹
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col xs="12" sm="12" md="12" lg="12" xl="12">
            <v-card flat light color="#fff" class="pg-lr-60">
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
                    src="../assets/D_Driver_Earning1x.png"
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
                    <h2>Drivers must clear several screenings</h2>
                    <br />
                    <p>
                      All potential driver-partners must complete a criminal
                      background screening process before they can accept ride
                      requests through the Uber app
                    </p>
                    <p>
                      <a href="#">Learn more</a>
                    </p>
                  </div>
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
                'd-flex justify-center': $vuetify.breakpoint.mdAndUp
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
<style lang="scss" scoped>
.nurses-bg-img {
  background-image: url("../assets/nurses-banner.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 597px;
  max-height: 597px;
}
.nurses-bg-img-small {
  display: none;
}
.nurses-bg-small {
  display: none;
}
</style>
