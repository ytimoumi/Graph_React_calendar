import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from './locales/fr/translation.json'
import en from './locales/en/translation.json'
import Cache from 'i18next-localstorage-cache';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).use(Cache).init({
    fallbackLng:'fr',
    debug:true,
    whitelist: [
        'en', 'fr',
    ],
cache:{
    enabled: false,
    prefix: 'i18next_res_',
    expirationTime: Infinity,
    versions: {}
},
    ddetector: {
          order: ['querystring', 'cookie', 'localstorage'],
          lookupQuerystring: 'lng',
          lookupCookie: 'i18next',
          lookupLocalStorage: 'i18nextLng',
          cache: ['localStorage', 'cookie'],
          checkWhitelist: true
        },
    resources: {
        fr: {
            common: fr
        },
        en: {
            common: en
        }
    },

    ns: ["common"],
    defaultNS: "common",
    interpolation:{
        escapeValue:false
    },
})
export default i18n;
