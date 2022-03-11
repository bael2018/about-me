import { appActions } from '../../store/action-creators/app-actions'
import cls from '../../scss/elements/workitem.module.scss'
import { GrGithub } from 'react-icons/gr'
import { useLocales } from '../../hooks/useLocales'
import { useDispatch } from 'react-redux'

const WorkItem = ({ dataItem }) => {
    const dispatch = useDispatch()
    const locales = useLocales()

    const modalHandler = () => {
        dispatch(appActions.setActiveModal())
        dispatch(appActions.setWorkInfo(dataItem))
    }

    return (
        <div className={cls.item}>
            <img src={dataItem.mainImage} alt="workImage" />
            <div>
                <button onClick={modalHandler}>{locales.discover.toUpperCase()}</button>
                <a 
                    rel='noreferrer' 
                    target={'_blank'} 
                    href={dataItem.view} 
                    className={cls.item_btn}
                >{locales.view.toUpperCase()}</a>
                <a 
                    rel='noreferrer' 
                    target={'_blank'} 
                    href={dataItem.git} 
                    className={cls.item_link}
                ><GrGithub/></a>
            </div>
        </div>
    )
}

export { WorkItem }