<script setup>
import { useI18n } from 'vue-i18n'
import { watch, computed, ref } from 'vue'
import { useFieldsStore } from '@/stores/fields'

const { t } = useI18n() // use as global scope
const store = useFieldsStore()
const scrollDistance = computed(() => { return store.scrollFromTopDistance })
const show = ref(false)

watch(scrollDistance, () => {
  if (scrollDistance.value > 250) {
    show.value = true
  }
})
</script>

<template>
  <div id="couple" class="couple-section">
    <div class="container">
      <div class="row">
        <div class="cards-container">
          <Transition name="left-slide-fade">
            <div
                v-if="show"
                class="card"
            >
              <div class="card-image groom-img"></div>
              <div class="card-header">
                <div class="card-header-title">
                  <h3>{{ t('coupleSection.groomName') }}</h3>
                </div>
                <div class="card-header-subtitle">
                  <h4>{{ t('coupleSection.groomSubtitle') }}</h4>
                </div>
              </div>
            </div>
          </Transition>
          <Transition name="right-slide-fade">
            <div
                v-if="show"
                class="card"
            >
              <div class="card-image bride-img"></div>
              <div class="card-header">
                <div class="card-header-title">
                  <h3>{{ t('coupleSection.brideName') }}</h3>
                </div>
                <div class="card-header-subtitle">
                  <h4>{{ t('coupleSection.brideSubtitle') }}</h4>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
      <div class="row center-content">
        <div class="full-width-card">
          <p>{{ t('coupleSection.firstText') }}</p>
          <p>{{ t('coupleSection.secondText') }}</p>
          <p>{{ t('coupleSection.thirdText') }}</p>
        </div>
      </div>
      <div class="row">
        <div class="text-container">
          <h3>{{ t('coupleSection.textBottom')}}</h3>
          <p>{{ t('coupleSection.dateAndLocation') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .couple-section {
    min-height: 500px;
    padding: 60px 0;
    background-color: var(--color-background-grey);
    .row {
      &.center-content {
        display: flex;
        justify-content: center;
      }
      .cards-container {
        display: flex;
        justify-content: space-around;
        min-height: 340px;
        .card {
          background-color: white;
          max-width: 500px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin: 20px;
          box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
          width: 100%;
          .card-image {
            max-width: 140px;
            max-height: 140px;
            border-radius: 50%;
            width: 140px;
            height: 140px;
            &.bride-img {
              background: url('@/assets/images/Jessica-300x300.jpg') center;
              background-size: cover;
            }
            &.groom-img {
              background: url('@/assets/images/Eduard-300x300.jpg') center;
              background-size: cover;
            }
          }
          .card-header {
            margin-top: 20px;
            .card-header-title {
              h3 {
                font-family: serif;
                font-size: 24px;
              }
            }
            .card-header-subtitle {
              margin-bottom: 6px;
              h4 {
                color: var(--color-text-gold);
                font-size: 24px;
                font-weight: 400;
                font-family: 'BeauRivage-Regular', cursive;
              }
            }
          }
          .content {
            p {
              font-family: 'Nunito Sans', sans-serif;
              font-size: 15px;
              font-weight: 400;
              line-height: 1.75em;
              color: #888;
              margin: 0 0 20px;
            }
          }
        }
      }
      .text-container {
        text-align: center;
        h3 {
          text-align: center;
          font-family: "BeauRivage-Regular", cursive;
          font-size: 60px;
          color: var(--color-text-gold);
          transition: 0.5s;
          line-height: 1;
          margin-bottom: 12px;
        }
        p {
          font-family: serif;
          font-size: 18px;
          font-style: italic;
        }
      }
      .full-width-card {
        background-color: white;
        padding: 30px;
        display: flex;
        margin: 20px 20px 50px;
        box-shadow: rgb(0 0 0 / 10%) 0 4px 12px;
        width: 100%;
        max-width: 1070px;
        flex-direction: column;
        p {
          margin: 0 0 20px;
          line-height: 1.8;
          color: var(--color-text-strong-grey);
          font-family: sans-serif;
          text-align: left;
          &:last-child {
            margin: 0 0 0;
          }
        }
      }
    }
  }

  /*
  Enter and leave animations can use different
  durations and timing functions.
  */
  .left-slide-fade-enter-active {
    transition: all 1s ease-out;
  }

  .left-slide-fade-leave-active {
    transition: all .8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .left-slide-fade-enter-from,
  .left-slide-fade-leave-to {
    transform: translateX(-80px);
    opacity: 0;
  }

  .right-slide-fade-enter-active {
    transition: all 1s ease-out;
  }

  .right-slide-fade-leave-active {
    transition: all .8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .right-slide-fade-enter-from,
  .right-slide-fade-leave-to {
    transform: translateX(80px);
    opacity: 0;
  }

  @media (max-width: 600px) {
    .couple-section .row .cards-container {
      flex-wrap: wrap;
      .card {
        margin-bottom: 0;
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
</style>