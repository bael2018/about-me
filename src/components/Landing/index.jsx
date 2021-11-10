import cls from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <section className={cls.mine}>
            <div className={cls.mine_child}>
                <img src="/img/land.png" alt="span" />
                <Link to='/span/info' className={cls.firstBtn}>read</Link>
                <a target='_blank' href='https://army-template.netlify.app' className={cls.secondBtn}>view</a>
            </div>

            <div className={cls.mine_child}>
                <img src="/img/beaty.png" alt="span" />
                <Link to='/span/info' className={cls.firstBtn}>read</Link>
                <a target='_blank' href='https://just-a-verstka.netlify.app/' className={cls.secondBtn}>view</a>
            </div>
        </section>
    )
}

export default Landing