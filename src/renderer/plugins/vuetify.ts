import { createVuetify } from 'vuetify'
import { ko, en, zhHans, zhHant, de, es, ja, fr, ru, pt, nl } from 'vuetify/locale'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.min.css'

export default createVuetify({
  locale: {
    messages: { ko, en, zhHans, zhHant, de, es, ja, fr, ru, pt, nl },
    locale: 'en',
    fallback: 'en'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#0969da',
          secondary: '#f6f8fa',
          background: '#ffffff',
          surface: '#f6f8fa',
          error: '#cf222e',
          info: '#0550ae',
          success: '#2da44e',
          warning: '#bf8700'
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#1f6feb',
          secondary: '#0d1117',
          background: '#0d1117',
          surface: '#161b22',
          error: '#f85149',
          info: '#58a6ff',
          success: '#238636',
          warning: '#d29922'
        }
      }
    }
  }
})
