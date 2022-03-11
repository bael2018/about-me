import { useLocales } from '../../hooks/useLocales'
import { useLocalWork } from '../../hooks/useLocalWork'
import cls from '../../scss/components/works.module.scss'
import { AppTitle } from '../elements/AppTitle'
import { WorkItem } from '../elements/WorkItem'

const Works = () => {
    const worksData = useLocalWork()
    const locales = useLocales()

    return (
        <div id="3" className={cls.works}>
            <AppTitle 
                title={locales.myWorks} 
                text={locales.latestWorks}
            />
            <div className={cls.works_body}>
                {
                    worksData.map(item => <WorkItem key={item.id} dataItem={item}/>)
                }
            </div>
        </div>
    )
}

export { Works }