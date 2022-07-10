<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // use as global scope
</script>

<template>
  <section id="secondOrganization" class="organization-section">
    <div class="container">
      <div class="row">
        <div class="header-bottom">{{ t('secondOrganizationSection.bottomHeader') }}</div>
        <div class="menu-container">
          <div class="box">
            <h3 class="number">01</h3>
            <h4 class="title">{{ t('secondOrganizationSection.menu.firstMenu.title') }}</h4>
            <ul>
              <li>{{ t('secondOrganizationSection.menu.firstMenu.list.firstIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.firstMenu.list.secondIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.firstMenu.list.thirdIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.firstMenu.list.forthIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.firstMenu.list.fifthIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.firstMenu.list.sixthIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.firstMenu.list.seventhIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.firstMenu.list.eightIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.firstMenu.list.ninthIngredient') }}</li>
            </ul>
          </div>
          <div class="box">
            <h3 class="number">02</h3>
            <h4 class="title">{{ t('secondOrganizationSection.menu.secondMenu.title') }}</h4>
            <ul>
              <li>{{ t('secondOrganizationSection.menu.secondMenu.list.firstIngredient') }}</li>
            </ul>
          </div>
          <div class="box">
            <h3 class="number">03</h3>
            <h4 class="title">{{ t('secondOrganizationSection.menu.thirdMenu.title') }}</h4>
            <ul>
              <li>{{ t('secondOrganizationSection.menu.thirdMenu.list.firstIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.thirdMenu.list.secondIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.thirdMenu.list.thirdIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.thirdMenu.list.forthIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.thirdMenu.list.fifthIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.thirdMenu.list.sixthIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.thirdMenu.list.seventhIngredient') }}</li>
            </ul>
          </div>
          <div class="box">
            <h3 class="number">04</h3>
            <h4 class="title">{{ t('secondOrganizationSection.menu.forthMenu.title') }}</h4>
            <ul>
              <li>{{ t('secondOrganizationSection.menu.forthMenu.list.firstIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.forthMenu.list.secondIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.forthMenu.list.thirdIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.forthMenu.list.forthIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.forthMenu.list.fifthIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.forthMenu.list.sixthIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.forthMenu.list.seventhIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.forthMenu.list.eightIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.forthMenu.list.ninthIngredient') }}</li>
            </ul>
          </div>
          <div class="box">
            <h3 class="number">05</h3>
            <h4 class="title">{{ t('secondOrganizationSection.menu.fifthMenu.title') }}</h4>
            <ul>
              <li>{{ t('secondOrganizationSection.menu.fifthMenu.list.firstIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.fifthMenu.list.secondIngredient') }}</li>
              <li>{{ t('secondOrganizationSection.menu.fifthMenu.list.thirdIngredient') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .organization-section {
    padding: 60px 0;
    background-color: var(--color-background-white);
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
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        border: 1px solid var(--color-background-grey-with-red);
        background-color: var(--color-background-grey-with-red);
        grid-gap: 1px;
        .box {
          background-color: var(--color-background-grey);
          padding: 20px;
          cursor: default;
          box-shadow: rgb(0 0 0 / 10%) 0 4px 12px;
          transition: all ease-in-out .3s;
          &:hover {
            background-color: var(--color-background-white);
          }
          .number {
            font-family: "BeauRivage-Regular", cursive;
            font-size: 40px;
            line-height: 1;
            color: var(--color-text-gold);
          }
          .title {
            text-transform: uppercase;
            font-family: serif;
            color: var(--color-text-light-black);
            line-height: 1;
            padding: 20px 0;
            font-size: 18px;
          }
          ul {
            padding: 0 0 0 14px;
            li {
              color: var(--color-text-strong-grey);
              font-family: sans-serif;
              text-align: left;
              padding-bottom: 5px;
              list-style-type: circle;
              &:last-child {
                padding-bottom: 0;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1400px) {
    .organization-section .container .row {
      margin: 0 20px;
      .menu-container {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
  }
</style>