<template>
  <div>
    <div>
      <v-container style="padding:0px">
        <v-layout>
          <v-img src="../assets/About_us_600.jpg" width="100%">
            <div style="padding-top:45%;padding-left:60px;color:#fff">
              <h1>About Us</h1>
            </div>
          </v-img>
        </v-layout>
        <v-layout row text-xs-center wrap style="padding:60px 60px 0px 60px;">
          <v-flex xs12 sm12 md10 lg10 xl10>
            <v-card flat light color="white">
              <h2>We ignite opportunity by setting the world in motion</h2>
              <br />
              <p>
                Good things happen when people can move, whether across town or
                toward their dreams. Opportunities appear, open up, become
                reality. What started as a way to tap a button to get a ride has
                led to billions of moments of human connection as people around
                the world go all kinds of places in all kinds of ways with the
                help of our technology.
              </p>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row text-xs-center wrap style="padding:60px 60px 0px 60px;">
          <v-flex xs12 sm12 md6 lg6 xl6>
            <v-card light flat>
              <v-img src="../assets/about_us2.jpg" width="100%"></v-img>
              <br />
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md1 lg1 xl1></v-flex>
          <v-flex xs12 sm12 md5 lg5 xl5 row wrap align-center>
            <v-card flat>
              <h2>Rides and beyond</h2>
              <br />
              <p>
                In addition to giving riders a way to get from point A to point
                B, we're working to bring the future closer with self-driving
                technology and urban air transport, helping people order food
                quickly and affordably, removing barriers to healthcare,
                creating new freight-booking solutions, and helping companies
                provide a seamless employee travel experience.
              </p>

              <p
                :class="{
                  'p-2-small': $vuetify.breakpoint.smAndDown,
                  'p-2': $vuetify.breakpoint.mdAndUp
                }"
              >
                <v-flex xs12 sm12 md6 lg6 xl6 style="padding-bottom:18px">
                  <a href="#">How to use the Uber app</a>
                </v-flex>
                <v-flex xs12 sm12 md1 lg1 xl1></v-flex>
                <v-flex xs12 sm12 md5 lg5 xl5
                  ><a href="#">Our Offerings</a>
                </v-flex>
              </p>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row text-xs-center wrap style="padding:60px 60px 0px 60px;">
          <v-flex xs12 sm12 md6 lg6 xl6 row wrap align-center>
            <v-card flat>
              <h2>Your safety drives us</h2>
              <br />
              <p>
                Whether you’re in the back seat or behind the wheel, your safety
                is essential. We are committed to doing our part, and technology
                is at the heart of our approach. We partner with safety
                advocates and develop new technologies and systems to help
                improve safety and help make it easier for everyone to get
                around.
              </p>
              <p>
                <a href="#">Learn more</a>
              </p>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md1 lg1 xl1></v-flex>
          <v-flex xs12 sm12 md5 lg5 xl5>
            <v-card flat>
              <v-img src="../assets/about-shield.svg" width="100%"></v-img>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row text-xs-center wrap style="padding:60px 60px 60px 60px;">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <v-card flat style="padding-bottom:24px">
              <h2>Keep up with the latest</h2>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md4 lg4 xl4 style="padding:20px 0px 0px 0px">
            <v-card light flat style="padding:0px 20px 0px 0px">
              <v-img src="../assets/care_provider_icon.png" width="51"></v-img>
              <h4>Newsroom</h4>
              <p>
                Get announcements about partnerships, app updates, and more near
                you and around the world.
              </p>
              <p>
                <a href="#">Learn more</a>
              </p>
            </v-card>
          </v-flex>

          <v-flex xs12 sm12 md4 lg4 xl4 style="padding:20px 0px 0px 0px">
            <v-card light flat style="padding:0px 20px 0px 0px">
              <v-img src="../assets/phb_icon.png" width="65"></v-img>
              <h4>Blog</h4>
              <p>
                Find new places to explore and learn about Uber products,
                partnerships, and more.
              </p>
              <p>
                <a href="#">Learn more</a>
              </p>
            </v-card>
          </v-flex>

          <v-flex xs12 sm12 md4 lg4 xl4 style="padding:20px 0px 0px 0px">
            <v-card light flat>
              <v-img src="../assets/nurse_icon.png" width="37"></v-img>
              <h4>Investor relations</h4>
              <p>
                Download financial reports, see next-quarter plans, and read
                about our corporate responsibility initiatives.
              </p>
              <p>
                <a href="#">Learn more</a>
              </p>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div style="background-color:#f6f6f6">
      <v-container>
        <v-layout row text-xs-center wrap style="padding:30px 60px 30px 60px;">
          <v-flex xs12 sm12 md6 lg6 xl6 row wrap align-center>
            <v-card flat color="#f6f6f6">
              <h2>You've got drive. We've got jobs.</h2>
              <br />
              <router-link to="/contact">
                <v-btn light depressed large color="white"
                  >Search open roles</v-btn
                >
              </router-link>
            </v-card>
          </v-flex>
          <v-flex xs12 sm12 md1 lg1 xl1></v-flex>
          <v-flex xs12 sm12 md5 lg5 xl5>
            <v-card flat>
              <v-img src="../assets/about-globe.svg" width="100%"></v-img>
            </v-card>
          </v-flex>
        </v-layout>
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
  font-size: 18px;
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
</style>
s
