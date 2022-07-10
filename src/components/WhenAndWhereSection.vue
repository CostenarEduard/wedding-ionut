<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // use as global scope
</script>

<template>
  <section id="where-and-when" class="organization-section">
    <div class="container">
      <div class="row">
        <div class="header-bottom">{{ t('whenAndWhereSection.bottomHeader') }}</div>
        <div class="menu-container">
          <div class="card">
            <div class="img-container">
              <img src="@/assets/images/Ceremony-560x300.jpg" alt="Ceremony">
            </div>
            <div class="text-container">
              <h4>{{ t('whenAndWhereSection.firstCard.title') }}</h4>
              <p class="text"><span class="pin"></span>{{ t('whenAndWhereSection.firstCard.where') }}</p>
              <p class="text"><span class="clock"></span>{{ t('whenAndWhereSection.firstCard.when') }}</p>
            </div>
          </div>
          <div class="card">
            <div class="img-container">
              <img src="@/assets/images/Wedding-560x300.jpg" alt="Ceremony">
            </div>
            <div class="text-container">
              <h4>{{ t('whenAndWhereSection.secondCard.title') }}</h4>
              <p class="text"><span class="pin"></span>{{ t('whenAndWhereSection.secondCard.where') }}</p>
              <p class="text"><span class="clock"></span>{{ t('whenAndWhereSection.secondCard.when') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .organization-section {
    padding: 60px 0;
    background-color: var(--color-background-grey);
    .container .row {
      .header-bottom {
        font-family: serif;
        color: var(--color-text-light-black);
        font-size: 25px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      .menu-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        .card {
          width: 100%;
          background-color: var(--color-background-white);
          box-shadow: rgb(0 0 0 / 10%) 0 4px 12px;
          display: flex;
          flex-direction: column;
          .img-container {
            max-height: 200px;
            height: 100%;
            max-width: 560px;
            overflow: hidden;
            flex: 1;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
              transition: transform .2s;
              &:hover {
                transform: scale(1.1);
              }
            }
          }
          .text-container {
            padding: 10px 20px 20px 20px;
            cursor: default;
            h4 {
              font-family: serif;
              color: var(--color-text-light-black);
              font-size: 18px;
              letter-spacing: 1px;
              text-transform: uppercase;
              text-align: center;
              margin-bottom: 10px;
            }
            .text {
              line-height: 1.8;
              color: var(--color-text-strong-grey);
              font-family: sans-serif;
              &:last-child {
                margin-top: 10px;
              }
              .pin  {
                margin: 0 5px 0 0;
                width: 15px;
                height: 15px;
                display: inline-block;
                background-image: url('@/assets/svg/map-pin.svg');
                background-repeat: no-repeat;
                background-size: cover;
                filter: invert(59%) sepia(67%) saturate(275%) hue-rotate(356deg) brightness(90%) contrast(94%);
              }
              .clock  {
                margin: 0 5px 0 1px;
                width: 15px;
                height: 15px;
                display: inline-block;
                background-image: url('@/assets/svg/clock.svg');
                background-repeat: no-repeat;
                background-size: cover;
                filter: invert(59%) sepia(67%) saturate(275%) hue-rotate(356deg) brightness(90%) contrast(94%);
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 550px) {
    .organization-section .container .row {
      margin: 0 20px;
      .menu-container {
        grid-template-columns: 1fr;
        text-align: center;
        grid-gap: 20px;
      }
    }
  }
</style>