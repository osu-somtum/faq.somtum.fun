/*
Taken from https://github.com/reza-nazari/i18n-vanilla/
Licence: MIT
*/

export default function createI18nModule(locales, defaultLanguage = "en") {
  const availableLocales = Object.keys(locales)
  let language = (
    window.navigator.userLanguage || window.navigator.language
  ).substr(0, 2)

  const langFromUrl = window.location.hash.substr(1)
  if (langFromUrl && availableLocales.includes(langFromUrl)) {
    language = langFromUrl
  }

  let pageLanguage = defaultLanguage
  if (availableLocales.includes(language)) {
    pageLanguage = language
  }

  const elements = document.querySelectorAll("[data-i18n]")
  const json = locales[pageLanguage]

  elements.forEach((element, index) => {
    const key = element.getAttribute("data-i18n")
    let text = key.split(".").reduce((obj, i) => (obj ? obj[i] : null), json)

    const variables = text.match(/{(.*?)}/g)
    if (variables) {
      variables.forEach((variable) => {
        Object.entries(element.dataset).filter(([key, value]) => {
          if (`{${key}}` === variable) {
            try {
              text = text.replace(
                `${variable}`,
                new Function(`return (${value})`)(),
              )
            } catch (error) {
              text = text.replace(`${variable}`, value)
            }
          }
        })
      })
    }

    element.innerHTML = text
  })

  const htmlElement = document.querySelector("html")
  htmlElement.setAttribute("lang", pageLanguage)
}
