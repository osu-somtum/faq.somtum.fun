import "./style.css"
import createI18nModule from "./i18n"

const locales = {
  en: {
    "header": {
      "title": "Frequently asked questions"
    }
  },
  th: {
    "header": {
      "title": "คำถามที่พบบ่อย"
    }
  }
};



createI18nModule(locales);
