import { useSelector , useDispatch } from 'react-redux'
import { rootAction } from '../../redux/actions'
import cls from './Greet.module.css'
import { AiFillGithub } from 'react-icons/ai' 

const Greet = () => {
    const lang = useSelector(state => state.langReducer.lang)
    const { langAction } = rootAction
    const dispatch = useDispatch()

    return (
        <section className={cls.greet}>
            <div className={cls.greet_language}>
                <span 
                    onClick={() => dispatch(langAction())}
                >
                    { lang ? 'РУС' : 'EN' }
                </span>
            </div>

            <div className={cls.greet_content}>
                <h4>Hi there !</h4>
                <h3>I Am Bayel</h3>
                <div className={cls.greet_content_title}>
                    I Am 
                    <h2>
                        <span>Front-End</span>
                        <span>Web</span>
                    </h2>
                </div>
                <h1>Developer</h1>

                <div className={cls.greet_content_footer}>
                    <a href='#work'>
                        <span>Works</span>
                    </a>
                    <a className={cls.gitLink} rel="noreferrer" target='_blank' href='https://github.com/bael2018'>
                        <AiFillGithub/>
                    </a>
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default Greet