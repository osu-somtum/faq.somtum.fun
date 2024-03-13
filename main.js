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
      support_contact_description: "You can reach support on the Discord server <a href='https://somtum.fun/discord'>https://somtum.fun/discord</a>.",

      rename_title: "Can I change my username?",
      rename_description: "Yes, you can request a new username in a support ticket on the Discord server. You are limited to one change per month, and the new username should not be a duplicate.",
      
      donate_title: "Do you accept donations?",
      donate_description: "Absolutely, yes. However, we don't take money too seriously because we are working on this project for fun.",
    
    
      cache_issues_title: "Why doesn't my profile picture update after I submitted it?",
      cache_issues_description: "You might try clearing your browser cache or reloading the page.",
      
      
      profile_change_title: "How do I change my banner, profile background, or profile picture?",
      profile_change_description: "<div>You can change your banner and profile background at <a href='https://somtum.fun/settings/custom'>https://somtum.fun/settings/custom</a>.</div><div>If you want to update your avatar, go to <a href='https://somtum.fun/settings/avatar'>https://somtum.fun/settings/avatar</a>.",
      
      
      
      
    }
  },
  th: {
    header: {
      title: "คำถามที่พบบ่อย",
      subtitle: "คำถามที่พบบ่อยเกี่ยวกับ somtum osu! Bancho.",

      
    },
    content: {
      support_contact_title: "สามารถติดต่อฝ่ายสนับสนุนได้ที่ไหน?",
      support_contact_description: "คุณสามารถติดต่อฝ่ายสนับสนุนได้ที่ดิสคอร์ดเซิฟเวอร์ <a href='https://somtum.fun/discord'>https://somtum.fun/discord</a>.",

      rename_title: "ฉันสามารถเปลี่ยนชื่อผู้ใช้ของฉันได้หรือไม่?",
      rename_description: "คุณสามารถขอเปลี่ยนชื่อผู้ใช้ใหม่ในตั๋วสนับสนุนบนเซิร์ฟเวอร์ Discord ได้ คุณจำกัดการเปลี่ยนแปลงได้เพียงครั้งเดียวต่อเดือน และชื่อผู้ใช้ใหม่ควรไม่ซ้ำกัน",

      donate_title: "คุณรับโดเนทไหม?",
      donate_description: "แน่นอน อย่างไรก็ตาม เราไม่ได้ซีเรียสเรื่องเงินหรอก เราทำเพื่อความสนุก",
    
    
      cache_issues_title: "ทำไมเปลี่ยนรูป Profile เเล้วยังไม่เปลี่ยน?",
      cache_issues_description: "ลองล้างเเคชของคุณดู เเล้วรีหน้าเว็ปอีกครั้ง",
      
      
      profile_change_title: "เเล้วฉันจะเปลี่ยนรูป Banner, รูป Profile พื้นหลัง หรือ รูป Profile ได้ที่ไหน",
      profile_change_description: "<div>คุณสามารถเปลื่ยนได้ที่ <a href='https://somtum.fun/settings/custom'>https://somtum.fun/settings/custom</a>.</div><div>ถ้าคุณต้องการเปลี่ยนรูป Profile คุณสามารถไปที่ <a href='https://somtum.fun/settings/avatar'>https://somtum.fun/settings/avatar</a>.",
      
      
      
      
    }
  },
}

createI18nModule(locales)
