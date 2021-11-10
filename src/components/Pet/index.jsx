import cls from './Pet.module.css'
import { Link } from 'react-router-dom'

const Pet = () => {
    return (
        <section className={cls.mine}>
            <div className={cls.mine_child}>
                <img src="/img/news.png" alt="span" />
                <Link to='/span/info' className={cls.firstBtn}>read</Link>
                <a rel="noreferrer" target='_blank' href='https://my-news-2021.netlify.app/' className={cls.secondBtn}>view</a>
            </div>

            <div className={cls.mine_child}>
                <img src="/img/marvel.png" alt="span" />
                <Link to='/span/info' className={cls.firstBtn}>read</Link>
                <a rel="noreferrer" target='_blank' href='https://marvel-2020.netlify.app/' className={cls.secondBtn}>view</a>
            </div>

            <div className={cls.mine_child}>
                <img src="/img/market.png" alt="span" />
                <Link to='/span/info' className={cls.firstBtn}>read</Link>
                <a rel="noreferrer" target='_blank' href='https://clothe-market.netlify.app' className={cls.secondBtn}>view</a>
            </div>

            <div className={cls.mine_child}>
                <img src="/img/sintact.png" alt="span" />
                <Link to='/span/info' className={cls.firstBtn}>read</Link>
                <a rel="noreferrer" target='_blank' href='https://building-company.netlify.app/' className={cls.secondBtn}>view</a>
            </div>
        </section>
    )
}

export default Pet