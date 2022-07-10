<script setup>
  import { reactive } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n() // use as global scope
  const state = reactive({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const countdown = () => {
    const countDownDate = new Date("Aug 19, 2022 18:00:00").getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(interval);
        days = 0
        hours = 0
        minutes = 0
        seconds = 0
      }

      state.days = days
      state.hours = hours
      state.minutes = minutes
      state.seconds = seconds
    }, 1000)
  }

  countdown()
</script>

<template>
  <div class="countdown-section">
    <div class="container">
      <div class="row">
        <h5>{{ t('countdownSection.counterHeader') }}</h5>
      </div>
      <div class="row">
          <div class="counter-container">
            <ul>
              <li>
                <h3>{{ state.days }}</h3>
                <p>{{ t('countdownSection.days') }}</p>
              </li>
              <li>
                <h3>{{ state.hours }}</h3>
                <p>{{ t('countdownSection.hours') }}</p>
              </li>
              <li>
                <h3>{{ state.minutes }}</h3>
                <p>{{ t('countdownSection.minutes') }}</p>
              </li>
              <li>
                <h3>{{ state.seconds }}</h3>
                <p>{{ t('countdownSection.seconds') }}</p>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .countdown-section {
    position: relative;
    .container {
      padding: 100px 0;
      background: url(/src/assets/images/ZOE_0883_1600x1067.jpg) no-repeat scroll center;
      background-size: cover;
      h5 {
        font-family: "BeauRivage-Regular", cursive;
        color: var(--color-text-white);
        font-size: 60px;
        text-align: center;
        text-shadow: 0 0 15px var(--color-text-black);
      }
      .counter-container {
        display: flex;
        justify-content: center;
        color: var(--color-text-white);
        ul {
          display: flex;
          list-style: none;
          padding: 0;
          li {
            min-width: 120px;
            text-align: center;
            padding: 15px;
            h3 {
              line-height: 1;
              font-size: 60px;
              font-weight: 500;
              text-shadow: 0 0 15px var(--color-text-black);
            }
            p {
              text-transform: uppercase;
              letter-spacing: 2px;
              font-size: 16px;
              text-shadow: 0 0 15px var(--color-text-black);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .countdown-section .container {
      background: url(/src/assets/images/ZOE_0883_1600x1067.jpg) no-repeat scroll center;
      background-position-x: 48%;
      h5 {
        font-size: 40px;
      }
      .counter-container ul li {
        min-width: 100px;
        padding: 15px 0;
        h3 {
          font-size: 32px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 450px) {
    .countdown-section .container .counter-container ul li {
      min-width: 80px;
      h3 {
        font-size: 30px;
      }
      p {
        font-size: 12px;
      }

    }
  }
</style>