<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // use as global scope
</script>

<template>
  <div id="story" class="our-story">
    <div class="container">
      <div class="row">
        <div class="box">
          <img src="@/assets/images/ZOE_0615_1000x1250.jpg" alt="ZOE_0697_1600x2400">
        </div>
        <div class="box">
          <div class="header-bottom">{{ t('story.bottomHeader') }}</div>
          <p>{{ t('story.firstText') }}</p>
          <p>{{ t('story.secondText') }}</p>
          <p>{{ t('story.thirdText') }}</p>
          <p>{{ t('story.forthText') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .our-story {
    padding: 60px 0;
    background-color: var(--color-background-white);
    .container {
      .row {
        display: flex;
        .box {
          &:first-child {
            width: 40%;
            height: 100%;
            &:before {
              content: '';
              position: absolute;
              top: 30px;
              right: 0;
              left: 45px;
              bottom: 0;
              border: 10px solid #BD945A;
              box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
            }
            img {
              padding: 0 30px 25px 0;
              width: 100%;
              object-fit: cover;
              position: relative;
            }
          }
          &:last-child {
            width: 60%;
            padding-left: 20px;
            .header-bottom {
              font-family: serif;
              color: var(--color-text-light-black);
              font-size: 25px;
              letter-spacing: 1px;
              text-transform: uppercase;
              margin-bottom: 20px;
            }
            p {
              margin: 0 0 20px;
              line-height: 1.8;
              color: var(--color-text-strong-grey);
              font-family: sans-serif;
            }
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .our-story .container .row {
      flex-direction: column;
      .box {
        &:first-child {
          width: 92%;
          margin: 0 20px 20px;
        }
        &:last-child {
          width: 100%;
          padding-top: 10px;
          padding-right: 20px;
        }
      }
    }
  }
</style>