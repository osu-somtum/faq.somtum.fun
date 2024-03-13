import "./style.css"
import createI18nModule from "./i18n"

const locales = {
  en: {
    header: {
      title: "Frequently asked questions",
      subtitle: "Commonly asked questions about sumtum osu! Bancho.",
    },
  },
  th: {
    header: {
      title: "คำถามที่พบบ่อย",
      subtitle: "คำถามที่พบบ่อยเกี่ยวกับ somtum osu! bancho",
    },
  },
}

createI18nModule(locales)
