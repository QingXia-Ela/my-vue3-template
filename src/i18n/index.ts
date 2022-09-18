import { createI18n } from 'vue-i18n'

import zh_cn from './lang/zh_cn'
import en_us from './lang/en_us'

const I18N = createI18n({
  locale: localStorage.getItem('lang') || 'zh_cn',
  messages: {
    zh_cn,
    en_us
  }
})

export default I18N