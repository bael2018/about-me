import cls from './Free.module.css'
import { Link } from 'react-router-dom'

const Free = () => {
    return (
        <section className={cls.mine}>
            <div className={cls.mine_child}>
                <img src="/img/teatre-min.png" alt="span" />
                <Link to='/work/theatre' className={cls.firstBtn}>read</Link>
                <a target='_blank' href='https://theatre-2021.netlify.app' className={cls.secondBtn}>view</a>
            </div>
        </section>
    )
}

export default Free