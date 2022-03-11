import { skillsData } from '../../constants'
import { useLocales } from '../../hooks/useLocales'
import cls from '../../scss/components/skills.module.scss'
import { AppTitle } from '../elements/AppTitle'
import { SkillsItem } from '../elements/SkillsItem'

const Skills = () => {
    const locales = useLocales()

    return (
        <div id="4" className={cls.skills}>
            <AppTitle title={locales.mySkills} text={locales.skillsText}/>
            <div className={cls.skills_wrapper}>
                {
                    skillsData.map(item => <SkillsItem key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}

export { Skills }