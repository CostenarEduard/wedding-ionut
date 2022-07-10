<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useFieldsStore } from "@/stores/fields";

const { t } = useI18n() // use as global scope
const store = useFieldsStore()

const showNav = computed(() => { return store.showNav })

const navButton = () => {
  store.toggleNav()
}
const scrollToId = (id) => {
  store.toggleNav()
  document.getElementById(id).scrollIntoView();
}
</script>

<template>
  <button
    @click="navButton"
    :class="{ active: showNav }"
    class="nav-toggle"
  >
    <i></i>
  </button>
  <aside class="aside-nav">
    <div class="top-section">
      <img src="@/assets/images/olive_branch_261x112.png" alt="olive branch">
      <h3>{{ t('navAside.header') }}</h3>
      <h6>{{ t('navAside.date') }}</h6>
    </div>
    <nav>
      <ul>
        <li
            @click="scrollToId('hero-section')"
            class="link"
        >
          {{ t('navAside.home') }}
        </li>
        <li
            @click="scrollToId('couple')"
            class="link"
        >
          {{ t('navAside.couple') }}
        </li>
        <li
            @click="scrollToId('story')"
            class="link"
        >
          {{ t('navAside.story') }}
        </li>
        <li
            @click="scrollToId('where-and-when')"
            class="link"
        >
          {{ t('navAside.whereAndWhen') }}
        </li>
        <li
            @click="scrollToId('organization')"
            class="link"
        >
          {{ t('navAside.organization') }}
        </li>
        <li
            @click="scrollToId('secondOrganization')"
            class="link"
        >
          {{ t('navAside.secondOrganization') }}
        </li>
        <li
            @click="scrollToId('confirmation-of-participation')"
            class="link"
        >
          {{ t('navAside.confirmationOfParticipation') }}
        </li>
      </ul>
    </nav>
    <div class="bottom-section">
      <div class="line"></div>
      <p class="nav-footer">{{ t('navAside.footer') }}<br/> {{ t('navAside.footerDateAndLocation') }}</p>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  .nav-toggle {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;
    cursor: pointer;
    opacity: 1;
    display: none;
    padding: 20px 18px;
    border: 0;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    background: var(--color-background-gold);
    margin: 15px 30px;
    border-radius: 50%;
    i {
      position: relative;
      display: -moz-inline-stack;
      display: inline-block;
      zoom: 1;
      width: 20px;
      height: 1px;
      color: #fff;
      font: bold 14px/.4 Helvetica;
      text-transform: uppercase;
      text-indent: -55px;
      background: #fff;
      -webkit-transition: all .2s ease-out;
      -o-transition: all .2s ease-out;
      transition: all .2s ease-out;
      top: -4px;
      &::before, &::after {
        content: '';
        width: 20px;
        height: 1px;
        background: #fff;
        position: absolute;
        left: 0;
        -webkit-transition: 0.2s;
        -o-transition: 0.2s;
        transition: 0.2s;
      }
      &::before {
        top: -7px;
      }
      &::after {
        bottom: -7px
      }
    }
    &:hover {
      i {
        &::before {
          top: -10px;
        }
        &::after {
          bottom: -10px;
        }
      }
    }
    &.active {
      i {
        background: transparent;
        &::before {
          top: 0;
          transform: rotateZ(45deg);
        }
        &::after {
          top: 0;
          transform: rotateZ(-45deg);
        }
      }
    }
  }
  .aside-nav {
    padding: 60px 20px;
    width: 22%;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    overflow-y: auto;
    z-index: 1001;
    background: #F6F1F0;
    transition: 0.5s;
    max-height: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;
    display: flex;
    flex-direction: column;
    .top-section {
      text-align: center;
      img {
        width: 90px;
        margin-bottom: 0;
        transition: 0.5s;
      }
      h3 {
        font-family: 'BeauRivage-Regular', cursive;
        font-size: 30px;
        color: var(--color-text-gold);
        transition: 0.5s;
        line-height: 1;
        margin-bottom: 12px;
      }
      h6 {
        font-family: sans-serif;
        font-weight: 400;
        text-transform: none;
        text-align: center;
        font-size: 10px;
        letter-spacing: 5px;
        color: #000;
        margin-bottom: 5px;
      }
    }
    .bottom-section {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      text-align: center;
      .line {
        border-top: 1px solid var(--color-background-gold);
        width: 100px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        margin: 5px auto;
      }
      .nav-footer {
        font-size: 12px;
        color: var(--color-text-strong-grey);
        letter-spacing: 0.5px;
      }
    }
    nav {
      ul {
        padding: 0;
        margin-top: 40px;
        list-style-type: none;
        li {
          text-align: center;
          cursor: pointer;
          font-family: serif;
          font-size: 18px;
          color: var(--color-text-light-black);
          margin-bottom: 15px;
          transition: all 0.3s ease-in-out;
          text-decoration: underline;
          text-underline-position: under;
          text-decoration-color: #bd945a00;
          &:hover {
            text-decoration: underline;
            text-underline-position: under;
            text-decoration-color: var(--color-background-gold);
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .aside-nav {
      max-width: 355px;
      width: 100%;
    }
  }

  @media (min-width: 1100px) {
    .aside-nav {
      width: 30%;
      .top-section {
        img {
          width: 120px;
        }
        h3 {
          font-size: 40px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .nav-toggle {
      display: block;
    }
    .aside-nav {
      width: 270px;
      left: -270px;
    }
  }
</style>