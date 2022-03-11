import cls from '../../scss/elements/apptitle.module.scss'

const AppTitle = ({ title , text }) => {
    return (
        <div className={cls.app_title}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>  
    )
}

export { AppTitle }