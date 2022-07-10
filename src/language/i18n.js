import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js'

// User defined lang
import en from '@/language/locales/en.json'
import ro from '@/language/locales/ro.json'
import hu from '@/language/locales/hu.json'


export const SUPPORT_LOCALES = ['ro', 'en', 'hu']

export const getLocale = () => {
    const urlParams = new URLSearchParams(window.location.search)

    if (urlParams.get('lang') && SUPPORT_LOCALES.includes(urlParams.get('lang'))) {
        return urlParams.get('lang')
    }

    // Default language is ro
    return 'ro'
}

export const i18n = createI18n({
    legacy: false,
    locale: getLocale(),
    fallbackLocale: 'ro', // set fallback locale
    messages: { ro, en, hu }
})

