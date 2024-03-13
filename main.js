import "./style.css"
import createI18nModule from "./i18n"

const locales = {
  en: {
    header: {
      title: "Frequently asked questions",
      subtitle: "Commonly asked questions about sumtum osu! Bancho.",
    },
    content: {
      support_contact_title: "Where can I reach support?",
      support_contact_description: "You can reach support on the Discord server <a href='https://somtum.fun/discord'>https://somtum.fun/discord</a>."
    }
  },
  th: {
    header: {
      title: "คำถามที่พบบ่อย",
      subtitle: "คำถามที่พบบ่อยเกี่ยวกับ somtum osu! Bancho.",
    },
    content: {
      support_contact_title: "สามารถติดต่อฝ่ายสนับสนุนได้ที่ไหน?",
      support_contact_description: "คุณสามารถติดต่อฝ่ายสนับสนุนได้ที่ดิสคอร์ดเซิฟเวอร์ <a href='https://somtum.fun/discord'>https://somtum.fun/discord</a>."
    }
  },
}

createI18nModule(locales)
