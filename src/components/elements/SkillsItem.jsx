import cls from '../../scss/elements/skillsitem.module.scss'

const SkillsItem = ({ title , percent , icon }) => {
    return (
        <div className={cls.skill}>
            <span className={cls.skill_icon}>{icon}</span>
            <span className={cls.skill_procent}>{title}</span>
            <h4>{percent}</h4>
            <div style={{ height: percent }} ></div>
        </div>
    )
}

export { SkillsItem }