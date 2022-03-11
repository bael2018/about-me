import { appActions } from '../../store/action-creators/app-actions'
import cls from '../../scss/components/navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useLocalNav } from '../../hooks/useLocalNav'
import { useEffect, useState } from 'react'
import { MdLanguage } from 'react-icons/md'

const Navbar = () => {
    const { isLocal , activeLink , isBurger } = useSelector(state => state.app)
    const [theme , setTheme] = useState(false)
    const dispatch = useDispatch()
    const local = useLocalNav()
    const [link , setLinks] = useState(local)

    window.onscroll = () => {
        if(window.scrollY > 10){
            setTheme(true)
        }else{
            setTheme(false)
        }
    }

    const activeLinkHandler = id => {
        dispatch(appActions.setActiveLink(id))
    }

    const activeBurger = () => {
        if(global.innerWidth <= 800){
            dispatch(appActions.setBurgerActive())
        }
    }

    useEffect(() => {
        setLinks(local)
    } , [isLocal])

    return (
        <div 
            onClick={activeBurger} 
            className={`${cls.navbar} ${theme && cls.navbar_active} ${isBurger && cls.navbar_burger}`}
        >
            <div 
                onClick={() => dispatch(appActions.setAppLocales())} 
                className={cls.navbar_locales}
            >
                { isLocal ? 'рус' : 'eng'}
                <MdLanguage/>
            </div>
            <div className={isLocal ? cls.ruWrapper : cls.engWrapper}>
                {
                    link.map(({ id , title }) => (
                        <span className={`${id === activeLink && cls.navbar_link}`} key={id}>
                            <a 
                                onClick={activeLinkHandler.bind(null , id)} 
                                href={`#${id}`}
                            >
                                {title}
                            </a>
                            <a 
                                onClick={activeLinkHandler.bind(null , id)} 
                                href={`#${id}`}
                            >
                                {title}
                            </a>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export { Navbar }