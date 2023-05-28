export const languages = {
    en: 'english',
    cn: 'chinese',
};

const defaultLanguage = 'en';

const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.brand': 'Press Release',
        'nav.contact': 'Contact',
        'social.wechat': 'WeChat',
        'social.ig': 'Instagram',
        'social.fb': 'Facebook',
        'social.red': 'XiaoHongShu',
        'social.tb': 'TaoBao',
    },
    cn: {
        'nav.home': 'Maverick',
        'nav.about': '关于',
        'nav.brand': '品牌资源',
        'nav.contact': '联系方式',
        'social.wechat': '微信',
        'social.ig': 'Instagram',
        'social.fb': 'Facebook',
        'social.red': '小红书',
        'social.tb': '淘宝',
    },
};

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as keyof typeof languages;
    return defaultLanguage;
};

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLanguage]) {
        return ui[lang][key] || ui[defaultLanguage][key];
    }
}