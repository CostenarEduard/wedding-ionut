<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // use as global scope
</script>

<template>
  <section class="footer-section">
    <div class="container">
      <div class="row">
        <img src="@/assets/images/olive_branch_261x112.png" alt="olive branch">
        <h3>{{ t('footerSection.grooms') }}</h3>
        <p>{{ t('footerSection.whenAndWhere') }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section {
    padding: 90px 30px;
    background: var(--color-background-grey);
    .container .row {
      text-align: center;
      img {
        width: 90px;
        margin-bottom: 0;
        transition: 0.5s;
      }
      h3 {
        font-family: 'BeauRivage-Regular', cursive;
        font-size: 30px;
        color: var(--color-text-black);
        transition: 0.5s;
        line-height: 1;
        margin-bottom: 12px;
      }
      p {
        font-family: serif;
        font-size: 18px;
        font-style: italic;
        color: var(--color-text-strong-grey);
        margin: 0 0 20px;
      }
    }
  }
</style>