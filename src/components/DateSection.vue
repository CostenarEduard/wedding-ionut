<script setup>
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n() // use as global scope
</script>

<template>
  <div class="date-section">
    <div class="container">
      <div class="row">
        <h5>{{ t('dateSection.header') }}</h5>
      </div>
      <div class="row">
        <h3>{{ t('dateSection.date') }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .date-section {
    position: relative;
    .container {
      padding: 100px 0;
      background: url(/src/assets/images/ZOE_0780_1600x1067.jpg) no-repeat scroll center;
      background-size: cover;
      h5 {
        font-family: "BeauRivage-Regular", cursive;
        color: var(--color-text-white);
        font-size: 60px;
        text-align: center;
        text-shadow: 0 0 15px var(--color-text-black);
      }
      h3 {
        line-height: 1;
        font-size: 60px;
        font-weight: 500;
        text-align: center;
        color: var(--color-text-white);
        text-shadow: 0 0 15px var(--color-text-black);
      }
    }
  }

  @media (max-width: 768px) {
    .date-section .container {
      background: url(/src/assets/images/ZOE_0780_1600x1067.jpg) no-repeat center;
      background-position-x: 45%;
      background-position-y: -380px;
      h5 {
        font-size: 40px;
      }
      h3 {
        font-size: 32px;
      }
    }
  }
</style>