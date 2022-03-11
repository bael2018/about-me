import cls from '../../scss/components/about.module.scss'
import { AppTitle } from '../elements/AppTitle'
import { useLocales } from '../../hooks/useLocales'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const About = () => {
    const locales = useLocales()

    return (
        <div id='2' className={cls.about}>
            <AppTitle title={locales.aboutMe} text={locales.aboutText}/>

            <div className={cls.about_wrapper}>
                <div className={cls.about_wrapper_picture}>
                    <img src="img/bayel.jpeg" alt="userImage" />
                </div>
                <div className={cls.about_wrapper_content}>
                    <p>{locales.aboutMeMessage}</p>
                    <h4>{locales.goal2022}</h4>
                    <span><AiOutlineCheckCircle/> {locales.goal}</span>
                </div>
            </div>  
        </div>
    )
}

export { About }