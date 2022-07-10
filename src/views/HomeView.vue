<script setup>
import { useFieldsStore } from '@/stores/fields'
import HeroSection from '@/components/HeroSection.vue'
import NavAside from '@/components/NavAside.vue'
import CoupleSection from '@/components/CoupleSection.vue'
import CountdownSection from '@/components/CountdownSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import OurStorySection from '@/components/OurStorySection.vue'
import OrganizationSection from '@/components/OrganizationSection.vue'
import DateSection from '@/components/DateSection.vue'
import WhenAndWhereSection from '@/components/WhenAndWhereSection.vue'
import SecondOrganizationSection from '@/components/SecondOrganizationSection.vue'
import FormSection from '@/components/FormSection.vue'

const store = useFieldsStore()

const closeMobileNavIfClick = () => {
  if (store.showNav) {
    store.toggleNav()
  }
}

const scrollDistanceFromTop = () => {
  store.saveScrollFromTopDistance(document.documentElement.scrollTop)
}

window.addEventListener('scroll', scrollDistanceFromTop);
</script>

<template>
  <div class="content-container">
    <NavAside />
    <div @click="closeMobileNavIfClick">
      <HeroSection/>
      <CoupleSection/>
      <CountdownSection/>
      <OurStorySection/>
      <DateSection/>
      <WhenAndWhereSection/>
      <OrganizationSection/>
      <SecondOrganizationSection/>
      <FormSection/>
      <FooterSection/>
    </div>
  </div>
</template>

<style scoped>
  .content-container {
    position: relative;
    overflow: hidden;
  }
</style>