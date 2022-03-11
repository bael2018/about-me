import { SiJavascript, SiReact, SiRedux, SiFirebase } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiSass , DiCss3} from 'react-icons/di'
import { useLocales } from "./useLocales"
import { FiFigma } from 'react-icons/fi'
import { BsFillBootstrapFill } from 'react-icons/bs'

export const useLocalWork = () => {
    const locales = useLocales()  

    return [
        {
            id: 1,
            mainImage: '/img/scba-front-min.png',
            git: 'https://github.com/bael2018/scba-front-2022',
            view: 'https://scba-2022.netlify.app',
            title: locales.scbaTitle,
            content: locales.scbaText,
            usedTechs: [
                {
                    id: 1,
                    icon: <SiReact/>,
                    title: 'React'
                },
                {
                    id: 2,
                    icon: <SiRedux/>,
                    title: 'Redux'
                },
                {
                    id: 3,
                    icon: <SiRedux/>,
                    title: 'RTK-Query'
                },
                {
                    id: 4,
                    icon: <AiFillHtml5/>,
                    title: 'HTML5'
                },
                {
                    id: 5,
                    icon: <DiSass/>,
                    title: 'SASS'
                },
                {
                    id: 6,
                    icon: <SiFirebase/>,
                    title: 'Firebase'
                }
            ],
            functionality: [
                {
                    id: 1,
                    text: locales.routing
                },
                {
                    id: 2,
                    text: locales.filtering
                },
                {
                    id: 3,
                    text: locales.searching
                },
                {
                    id: 4,
                    text: locales.cartWish
                },
                {
                    id: 5,
                    text: locales.userAuth
                }
            ]
        },
        {
            id: 2,
            mainImage: '/img/news-min.png',
            git: 'https://github.com/bael2018/my-news-2021',
            view: 'https://my-news-2021.netlify.app',
            title: locales.nowTitle,
            content: locales.nowText,
            usedTechs: [
                {
                    id: 1,
                    icon: <SiReact/>,
                    title: 'React'
                },
                {
                    id: 2,
                    icon: <SiRedux/>,
                    title: 'Redux'
                },
                {
                    id: 3,
                    icon: <AiFillHtml5/>,
                    title: 'HTML5'
                },
                {
                    id: 5,
                    icon: <DiCss3/>,
                    title: 'CSS3'
                },
                {
                    id: 6,
                    icon: <SiFirebase/>,
                    title: 'Firebase'
                }
            ],
            functionality: [
                {
                    id: 1,
                    text: locales.routing
                },
                {
                    id: 2,
                    text: locales.filtering
                },
                {
                    id: 3,
                    text: locales.searching
                },
                {
                    id: 4,
                    text: locales.cartWish
                },
                {
                    id: 5,
                    text: locales.commenting
                },
                {
                    id: 6,
                    text: locales.userAuth
                }
            ]
        },
        {
            id: 3,
            mainImage: '/img/spa-min.png',
            git: 'https://github.com/bael2018/army-app',
            view: 'https://army-2021.netlify.app',
            title: locales.armyTitle,
            content: locales.armyText,
            usedTechs: [
                {
                    id: 1,
                    icon: <SiReact/>,
                    title: 'React'
                },
                {
                    id: 2,
                    icon: <SiRedux/>,
                    title: 'Redux'
                },
                {
                    id: 3,
                    icon: <AiFillHtml5/>,
                    title: 'HTML5'
                },
                {
                    id: 4,
                    icon: <DiCss3/>,
                    title: 'CSS3'
                },
                {
                    id: 5,
                    icon: <FiFigma/>,
                    title: 'Figma'
                },
            ],
            functionality: [
                {
                    id: 1,
                    text: locales.routing
                },
            ]
        },
        {
            id: 4,
            mainImage: '/img/land-min.png',
            git: 'https://github.com/bael2018/axies-2021',
            view: 'https://axies-2021.netlify.app/',
            title: locales.axieTitle,
             content: locales.axieText,
            usedTechs: [
                {
                    id: 1,
                    icon: <SiReact/>,
                    title: 'React'
                },
                {
                    id: 2,
                    icon: <AiFillHtml5/>,
                    title: 'HTML5'
                },
                {
                    id: 3,
                    icon: <DiSass/>,
                    title: 'SCSS'
                },
                {
                    id: 4,
                    icon: <FiFigma/>,
                    title: 'Figma'
                },
            ],
            functionality: [
                {
                    id: 1,
                    text: locales.routing
                },
            ]
        },
        {
            id: 5,
            mainImage: '/img/beaty-min.png',
            git: 'https://github.com/bael2018/Just-A-Project',
            view: 'https://just-a-verstka.netlify.app',
            title: locales.pinkTitle,
            content: locales.pinkText,
            usedTechs: [
                {
                    id: 1,
                    icon: <SiJavascript/>,
                    title: 'Javascript'
                },
                {
                    id: 2,
                    icon: <AiFillHtml5/>,
                    title: 'HTML5'
                },
                {
                    id: 3,
                    icon: <DiCss3/>,
                    title: 'CSS3'
                },
                {
                    id: 4,
                    icon: <FiFigma/>,
                    title: 'Figma'
                },
            ],
        },
        {
            id: 6,
            mainImage: '/img/teatre-min.png',
            git: 'https://github.com/bael2018/Teatr',
            view: 'https://theatre-2021.netlify.app',
            title: locales.theatreTitle,
            content: locales.theatreText,
            usedTechs: [
                {
                    id: 1,
                    icon: <SiJavascript/>,
                    title: 'Javascript'
                },
                {
                    id: 2,
                    icon: <AiFillHtml5/>,
                    title: 'HTML5'
                },
                {
                    id: 3,
                    icon: <DiCss3/>,
                    title: 'CSS3'
                },
                {
                    id: 4,
                    icon: <FiFigma/>,
                    title: 'Figma'
                },
            ],
        },
        {
            id: 7,
            mainImage: '/img/sintact-min.png',
            git: 'https://github.com/bael2018/Build',
            view: 'https://building-company.netlify.app/',
            title: locales.sintacTitle,
            content: locales.sintacText,
            usedTechs: [
                {
                    id: 1,
                    icon: <AiFillHtml5/>,
                    title: 'HTML5'
                },
                {
                    id: 2,
                    icon: <DiCss3/>,
                    title: 'CSS3'
                },
                {
                    id: 3,
                    icon: <FiFigma/>,
                    title: 'Figma'
                },
            ],
        },
        {
            id: 8,
            mainImage: '/img/academy-min.png',
            git: 'https://github.com/bael2018/It-academy2021',
            view: 'https://it-academy-2021.netlify.app',
            title: locales.academyTitle,
            content: locales.academyText,
            usedTechs: [
                {
                    id: 1,
                    icon: <AiFillHtml5/>,
                    title: 'HTML5'
                },
                {
                    id: 2,
                    icon: <DiCss3/>,
                    title: 'CSS3'
                },
                {
                    id: 3,
                    icon: <FiFigma/>,
                    title: 'Figma'
                },
                {
                    id: 4,
                    icon: <BsFillBootstrapFill/>,
                    title: 'Bootstrap'
                }
            ],
        }
    ]
}