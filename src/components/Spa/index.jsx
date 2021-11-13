import cls from './Spa.module.css'
import { Link } from 'react-router-dom'

const Spa = () => {
    return (
        <section className={cls.mine}>
            <div className={cls.mine_child}>
                <img src="/img/spa-min.png" alt="span" />
                <Link to='/work/army' className={cls.firstBtn}>read</Link>
                <a target='_blank' href='https://army-2021.netlify.app' className={cls.secondBtn}>view</a>
            </div>
        </section>
    )
}

export default Spa