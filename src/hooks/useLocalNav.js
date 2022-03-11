import { useLocales } from "./useLocales"

export const useLocalNav = () => {
    const locales = useLocales()  

    return [
        {
            id: 1,
            title: locales.home,
        },
        {
            id: 2,
            title: locales.about,
        },
        {
            id: 3,
            title: locales.works,
        },
        {
            id: 4,
            title: locales.skills,
        },
        {
            id: 5,
            title: locales.contacts,
        }
    ]
}