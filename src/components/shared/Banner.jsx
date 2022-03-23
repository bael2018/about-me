import cls from '../../scss/components/banner.module.scss'
import { FaRegHandPaper } from 'react-icons/fa'
import { useLocales } from '../../hooks/useLocales'
import { useDispatch, useSelector } from 'react-redux'
import { appActions } from '../../store/action-creators/app-actions'

const Banner = () => {
    const { isBurger } = useSelector(state => state.app)
    const locales = useLocales()
    const dispatch = useDispatch()

    const burgerActive = () => {
        dispatch(appActions.setBurgerActive())
    }

    return (
        <div id='1' className={cls.banner}>
            <div className={cls.banner_burger}>
                <button 
                    className={`${isBurger && cls.banner_burger_active}`} 
                    onClick={burgerActive}
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
            <img src="/img/header.jpg" alt="header-banner" />
            <div className={cls.banner_content}>
                <h3>
                    <FaRegHandPaper/> {locales.there} ! {locales.me}  <span>Frontend</span> {locales.developer}
                </h3>
                <p>{locales.bannerText}</p>
                <p>{locales.bannerReadyText}</p>
                <div>
                    <a 
                        rel='noreferrer' 
                        target={'_blank'} 
                        href='https://drive.google.com/file/d/1wUWVJnw9BWL_dmxs7-f6Duy1MxE07YM0/view?usp=download' 
                        download={'app'}
                    >{locales.get.toUpperCase()} CV</a>
                    <a 
                        rel='noreferrer' 
                        target={'_blank'} 
                        href="https://github.com/bael2018"
                    >GITHUB</a>
                </div>
            </div>
        </div>
    )
}

export { Banner }