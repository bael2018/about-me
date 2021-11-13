import cls from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <section className={cls.mine}>
            <div className={cls.mine_child}>
                <img src="/img/land-min.png" alt="span" />
                <Link to='/work/army-landing' className={cls.firstBtn}>read</Link>
                <a target='_blank' href='https://army-template.netlify.app' className={cls.secondBtn}>view</a>
            </div>

            <div className={cls.mine_child}>
                <img src="/img/beaty-min.png" alt="span" />
                <Link to='/work/pinko' className={cls.firstBtn}>read</Link>
                <a target='_blank' href='https://just-a-verstka.netlify.app/' className={cls.secondBtn}>view</a>
            </div>
        </section>
    )
}

export default Landing