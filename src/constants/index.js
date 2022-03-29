import { SiJavascript, SiReact, SiRedux, SiTypescript } from 'react-icons/si'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiSass } from 'react-icons/di'
import { IoLogoCss3 } from 'react-icons/io'

export const skillsData = [
    {
        id: 1,
        title: 'REACT',
        icon: <SiReact/>,
        percent: '70%',
    },
    {
        id: 2,
        title: 'REDUX',
        icon: <SiRedux/>,
        percent: '75%'
    },
    {
        id: 3,
        title: 'JAVASCRIPT',
        icon: <SiJavascript/>,
        percent: '70%'
    },
    {
        id: 4,
        title: 'TYPESCRIPT',
        icon: <SiTypescript/>,
        percent: '45%'
    },
    {
        id: 5,
        title: 'HTML5',
        icon: <AiFillHtml5/>,
        percent: '80%'
    },
    {
        id: 6,
        title: 'CSS3',
        icon: <IoLogoCss3/>,
        percent: '80%'
    },
    {
        id: 7,
        title: 'SASS',
        icon: <DiSass/>,
        percent: '70%'
    },
    {
        id: 8,
        title: 'GIT',
        icon: <AiFillGithub/>,
        percent: '70%'
    },
]