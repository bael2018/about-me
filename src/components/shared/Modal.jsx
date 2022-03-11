import { appActions } from '../../store/action-creators/app-actions'
import cls from '../../scss/components/modal.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillCaretDown } from 'react-icons/ai'
import { useLocales } from '../../hooks/useLocales'

const Modal = () => {
    const { isModal , aboutWork } = useSelector(state => state.app)
    const dispatch = useDispatch()
    const locales = useLocales()

    const isActiveModal = e => {
        dispatch(appActions.setActiveModal())
    }

    const { title , content , usedTechs, functionality } = aboutWork

    return (
        <div 
            className={`${cls.modal} ${isModal && cls.modal_active}`}
            onClick={isActiveModal}
        >
            <div className={cls.modal_wrapper}>
                <h3>{title}</h3>
                <p>{content}</p>
                <div className={cls.modal_wrapper_inner}>
                    <h4>{locales.usedTechs} <AiFillCaretDown/></h4>
                    <ul>
                        {
                            usedTechs?.map(({ id , title, icon }) => (
                                <li key={id} className={cls.techs}>
                                    {icon}
                                    {title}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {
                    functionality && (
                        <div className={cls.modal_wrapper_inner}>
                            <h4>{locales.functionality} <AiFillCaretDown/></h4>
                            <ul>
                                {
                                    functionality?.map(({ id, text }) => (
                                        <li key={id} className={cls.func}>
                                            {text}.
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export {  Modal }