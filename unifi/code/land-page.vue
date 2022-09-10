<template>
  <div class="land-page">
    <hero />
    <!-- <bee-section></bee-section> -->
    <component
      :is="static_section_door_open['component']"
      v-bind="static_section_door_open['content']"
    ></component>
    <component
      :is="static_section_speakers_1['component']"
      v-bind="static_section_speakers_1['content']"
    ></component>
    <component
      :is="static_section_Discussion_1['component']"
      v-bind="static_section_Discussion_1['content']"
    ></component>
    <!--  -->
    <!--  -->
    <!--  -->
    <mh-section-divider :dividerType="'lightPeace'"></mh-section-divider>
    <!--  -->
    <!--  -->
    <!--  -->
    <component
    :is="static_section_coffee_break['component']"
    v-bind="static_section_coffee_break['content']"
    ></component>
    <component
      :is="static_section_speakers_2['component']"
      v-bind="static_section_speakers_2['content']"
    ></component>
    <component
      :is="static_section_Discussion_2['component']"
      v-bind="static_section_Discussion_2['content']"
    ></component>
    <!--  -->
    <!--  -->
    <!--  -->
    <mh-section-divider
      :dividerType="'whiteLCgreenRCImg'"
      :whiteText="static_section_speech_closing.text"
      :time="static_section_speech_closing.time"
      :dividerColor="'base-dark'"
    ></mh-section-divider>
    <div class="base-light" style="height:200px"></div>
    <component
      :is="static_section_dinner['component']"
      v-bind="static_section_dinner['content']"
    ></component>
    <div></div>
    <!--  -->
    <component
      :is="mh_honorary_guest_section['component']"
      v-bind="mh_honorary_guest_section['content']"
    ></component>
    
    <div style="height: 200px" class="base-light"></div>
    <mh-section-divider :dividerType="'darkGreenUp'"></mh-section-divider>
    <div>
      <v-sheet style="margin-bottom:-60px" max-width="1360" class="mx-auto base-dark">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="6"
              class="d-flex align-center order-2 order-lg-1"
            >
              <div>
                <div class="mb-4">
                  <v-img
                    :width="screenSize >= 600 ? 300 : 190"
                    :src="idkLogo"
                  ></v-img>
                </div>
                <div class="mb-4">
                  <v-img
                    :width="screenSize >= 600 ? 300 : 190"
                    :src="logo"
                  ></v-img>
                </div>
                <div class="white--text text-caption">
                  W Dubai - The Palm - Jumeirah Dubai UAE
                </div>
                <div class="white--text text-caption">
                  November 22, 2022 | Dubai, U.A.E
                </div>
              </div>
            </v-col>
            <v-col cols="12" offset-md="1" md="5" class="order-1 order-lg-2">
              <div class="move-footer-form">
                <mh-footer-form></mh-footer-form>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </div>
  </div>
</template>

<script>
//
import {
  static_section_door_open,
  static_section_speakers_1,
  static_section_Discussion_1,
  static_section_coffee_break,
static_section_speakers_2,
static_section_Discussion_2,
static_section_speech_closing,
static_section_dinner,
mh_honorary_guest_section,
} from '@/db/website-data.js'

//

import hero from './components/hero/hero-section.vue'
import userCyrcle from './assets/user-cyrcle.svg'
import doorOpenIcon from './assets/door-open.svg'
import dinnerIcon from './assets/dinner-icon.svg'
import coffeeBreakIcon from './assets/coffee-break.svg'
import idkLogo from './assets/idk-logo.svg'
import logo from './assets/logo.svg'
export default {
  components: {
    hero,
  },
  data() {
    return {
      static_section_door_open,
      static_section_speakers_1,
      static_section_Discussion_1,
      // 
      static_section_coffee_break,
      static_section_speakers_2,
      static_section_Discussion_2,
      static_section_speech_closing,
      static_section_dinner,
      mh_honorary_guest_section,
      //
      doorOpenIcon,
      userCyrcle,
      dinnerIcon,
      coffeeBreakIcon,
      idkLogo,
      logo,
      arrayInfo: [
        {
          icon: 'mdi-account',
          text: ' sit amet consectetur -- adipisicing elit. Voluptas, praesentium, nemo exercite facilis eaque eligendi possimus? Amet necessitatibus quae suscipit nostrum porro, deleniti dolores!',
        },
        {
          icon: 'mdi-account',
          text: ' sit amet consectetur -- adipisicing elit. Voluptas, praesentium, nemo exercite facilis eaque eligendi possimus? Amet necessitatibus quae suscipit nostrum porro, deleniti dolores!',
        },
      ],
    }
  },
  computed: {
    screenSize() {
      return this.$store.getters['Global/screenSize']
    },
  },
}
</script>
<style lang="scss">
.land-page {
  .section-padding {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .second-section-padding {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

@media (min-width: 600px) {
  .move-footer-form {
    transform: translateY(-270px);
    position: relative;
    z-index: 3;
  }
  .land-page {
    .section-padding {
      padding-top: 100px;
    }
  }
}
@media (min-width: 960px) {
  .move-footer-form {
    transform: translateY(-79px);
    position: relative;
    z-index: 3;
  }
}
@media (min-width: 1264px) {
  .land-page {
    .second-section-padding {
      padding-top: 114px;
      padding-bottom: 200px;
    }
    .section-padding {
      padding-top: 65px;
      padding-bottom: 0px;
    }
   
  }
}
@media (min-width: 1400px) {
  .land-page {
    .second-section-padding {
      padding-top: 128px;
    }
    .section-padding {
      padding-top: 132px;
    }
  }
}
@media (min-width: 1904px) {
  .land-page {
    .section-padding {
    }
  }
}
</style>
