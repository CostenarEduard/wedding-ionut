<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, reactive } from 'vue'

const { t } = useI18n() // use as global scope

const scrollTo = () => {
  const element =   document.getElementById('couple')

  window.scrollTo({
    top: element.offsetTop + 15,
    behavior: 'smooth'
  });
}

const state = reactive({
  title: false,
  subtitle: false
})

onMounted(() => {
  state.title = true
  setInterval(() => { state.subtitle = true }, 500);
})
</script>

<template>
  <section id="hero-section">
    <div class="container">
      <div class="text-center">
        <Transition name="slide-fade">
          <h1 v-if="state.title">Eduard & Jessica</h1>
        </Transition>
        <div class="min-height">
          <Transition name="slide-fade">
            <h5 v-if="state.subtitle">19 {{ t('heroSection.month').toUpperCase() }}, 2022 - {{ t('heroSection.city') }}</h5>
          </Transition>
        </div>
      </div>
      <div class="heart-container">
        <div @click="scrollTo()" class="heart-icon bounce-5"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  #hero-section {
    .container {
      background: url(@/assets/images/ZOE_0597_1600x1067.jpg) no-repeat scroll center;
      background-size: cover;
      height: 100vh;
      .heart-icon {
        background-image: url('@/assets/svg/heart-icon.svg');
        height: 40px;
        width: 40px;
        position: absolute;
        bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        left: 48%;
        filter: invert(86%) sepia(100%) saturate(0%) hue-rotate(130deg) brightness(104%) contrast(102%);
        animation-duration: 2s;
        animation-iteration-count: infinite;
        cursor: pointer;
      }
      .bounce-5 {
        animation-name: bounce-5;
        animation-timing-function: ease;
      }
      .text-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: white;
        text-align: center;
        margin: auto;
        .min-height {
          min-height: 48px;
        }
        h1 {
          font-size: 80px;
          font-family: 'BeauRivage-Regular', cursive;
          text-shadow: 0 0 15px var(--color-text-black);
        }
        h5 {
          font-family: serif;
          font-size: 30px;
          font-style: italic;
          text-shadow: 0 0 15px var(--color-text-black);
        }
      }
    }
  }

  /*
  Enter and leave animations can use different
  durations and timing functions.
  */
  .slide-fade-enter-active {
    transition: all .8s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }

  @media (max-width: 1100px) {
    #hero-section .container {
      .text-center {
        h1 {
          font-size: 60px;
        }
        h5 {
          font-size: 25px;
        }
      }
      .heart-icon {
        height: 30px;
        width: 30px;
      }
    }
  }

  @media (max-width: 500px) {
    #hero-section .container {
      .text-center {
        h1 {
          font-size: 40px;
        }
        h5 {
          font-size: 15px;
        }
      }
      .heart-icon {
        height: 20px;
        width: 20px;
      }
    }
  }

  @keyframes bounce-5 {
    0%   { transform: scale(1,1)    translateY(0); }
    10%  { transform: scale(1.1,.9) translateY(0); }
    30%  { transform: scale(.9,1.1) translateY(-100px); }
    50%  { transform: scale(1,1)    translateY(0); }
    57%  { transform: scale(1,1)    translateY(-7px); }
    64%  { transform: scale(1,1)    translateY(0); }
    100% { transform: scale(1,1)    translateY(0); }
  }
</style>