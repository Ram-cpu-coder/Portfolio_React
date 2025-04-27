import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const savedLng = localStorage.getItem("i18nextLng")
i18n.use(Backend).use(initReactI18next).use(LanguageDetector).init({
    fallBackLng: "en",
    lng: savedLng,
    // debug: true,
}, {
    backend: {
        loadPath: "/locales/{{lng}}/translation.json"
    }
})

export default i18n;