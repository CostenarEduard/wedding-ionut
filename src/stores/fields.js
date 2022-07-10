import { defineStore } from 'pinia'

export const useFieldsStore = defineStore({
  id: 'fields',
  state: () => ({
    fields: {},
    showNav: false,
    scrollFromTopDistance: 0
  }),
  actions: {
    toggleNav() {
      this.showNav = !this.showNav

      if (this.showNav) {
        document.body.classList.add('active');
      } else {
        document.body.classList.remove('active');
      }
    },
    saveScrollFromTopDistance(distance) {
      this.scrollFromTopDistance = distance
    }
  }
})
