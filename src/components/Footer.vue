<template>
  <v-footer dark height="auto" color="black" class="pg-bottom-60">
    <v-container class="pa-0">
      <div class="pg-lr-60">
        <v-row :class="{ 'd-flex flex-column': $vuetify.breakpoint.smAndDown }">
          <v-col xs="12" sm="12" md="4" lg="4" xl="4" class="pg-top-60">
            <v-card dark flat color="black">
              <div>
                <div class="d-flex">
                  <img
                    src="../assets/ucclogo.png"
                    style="top:-12px; position:relative"
                    alt="logo"
                  />
                  <span style="font-size:18px;padding-left:10px"
                    >Urban Care Community</span
                  >
                </div>
                <a
                  v-for="profile in profiles"
                  :key="profile"
                  :href="profile.link"
                  target="_blank"
                >
                  <v-btn :key="profile.icon" class="mx-2 white--text" icon>
                    <v-icon size="24px">{{ profile.icon }}</v-icon>
                  </v-btn>
                </a>
                <br />
                <br />
                <p style="font-size: 16px;">
                  <b>Newsletter</b>
                </p>
                <form class="form-inline">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="inputPassword2"
                      placeholder="Email Address"
                    />&nbsp;
                    <router-link
                      to="/contact"
                      :class="{ 'btn-small': $vuetify.breakpoint.smAndDown }"
                    >
                      <v-btn light color="white ">Sign Up</v-btn>
                    </router-link>
                  </div>
                </form>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value
                    id="defaultCheck1"
                  />
                  <label class="form-label pa-1" for="defaultCheck1">
                    I agree to Urban Care Community’s Privacy and Terms &
                    Conditions
                  </label>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="2" lg="2" xl="2" class="pg-top-60">
            <v-card dark flat color="black">
              <p>
                <b>GET STARTED</b>
              </p>
              <a href="#">Find Care Jobs</a>
              <br />
              <a href="#">Find Care Workers</a>
              <br />
              <a href="#">Find Nurses</a>
              <br />
              <a href="#">FAQ</a>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="2" lg="2" xl="2" class="pg-top-60">
            <v-card dark flat color="black">
              <p>
                <b>SUPPORT</b>
              </p>
              <router-link to="/">Home</router-link>
              <br />
              <router-link to="/about">About Us</router-link>
              <br />
              <a href="#">Help Centre</a>
              <br />
              <a href="#">How it Works</a>
              <br />
              <a href="#">COVID-19 Response</a>
              <br />
              <a href="#">Contact Us</a>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="2" lg="2" xl="2" class="pg-top-60">
            <v-card dark flat color="black">
              <p>
                <b>COMPANY</b>
              </p>
              <router-link to="/care-providers">Care Providers</router-link>
              <br />
              <router-link to="/care-workers">Care Workers</router-link>
              <br />
              <router-link to="/nurses">Nurses</router-link>
              <br />
              <a href="#">Career</a>
              <br />
              <a href="#">Privacy</a>
              <br />
              <a href="#">Terms</a>
            </v-card>
          </v-col>
          <v-col xs="12" sm="12" md="2" lg="2" xl="2" class="pg-top-60">
            <v-card dark flat color="black">
              <p>
                <b>RESOURCES</b>
              </p>
              <a href="#">Technology Enabled Care</a>
              <br />
              <a href="#">LD Care Guide</a>
              <br />
              <a href="#">Live in Care Guide</a>
              <br />
              <a href="#">Funding Care Guide</a>
              <br />
              <a href="#">Dementia Guide</a>
              <br />
              <a href="#">Nursing Care Guide</a>
              <br />
              <a href="#">Dementia Guide</a>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="pg-top-30">
        <p :class="{ 'p-small': $vuetify.breakpoint.smAndDown }">
          Urban Care Community is registered in England and Wales Number
          10739712. The Care Quality Commission (CQC) defines companies like
          Urban Care Community as an introductory agency pursuant to the Health
          & Social Care Act 2008
        </p>
      </div>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    profiles: [
      { icon: "fab fa-facebook", link: "https://www.facebook.com/" },
      { icon: "fab fa-twitter", link: "https://www.twitter.com/" },
      {
        icon: "fab fa-instagram",
        link: "https://www.instagram.com/"
      },
      {
        icon: "fab fa-youtube",
        link: "https://www.youtube.com/"
      },
      {
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/"
      }
    ]
  })
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  border: 0px;
  color: white !important;
  font-size: 13px !important;
  font-weight: lighter;
  line-height: 24px;
  letter-spacing: 1.25px;
  a:hover {
    text-decoration: none;
    border: 0px;
    color: #d1d1d1 !important;
    font-size: 13px !important;
    font-weight: lighter;
    line-height: 24px;
    letter-spacing: 1.25px;
  }
}

input[type="text"] {
  width: 100%;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  font-size: 42px;
  background-color: white;
  padding: 12px 20px 12px 40px;
}
.form-control {
  padding: 5px;
  background-color: #fff;
}
.form-check-input {
  padding: 02px;
}
.form-inline {
  padding-bottom: 10px;
}
.form-label {
  font-weight: 100;
  font-size: 13px;
}
.no-outline:focus {
  outline: none;
}
p {
  font-size: 13px;
  line-height: 24spx;
  letter-spacing: 1.25px;
  font-weight: lighter;
}
.p-small {
  font-size: 13px;
  line-height: 24spx;
  letter-spacing: 1.25px;
  font-weight: lighter;
  padding: 0px 50px;
}
</style>
