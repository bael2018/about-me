import cls from './Pet.module.css'
import { Link } from 'react-router-dom'

const initialState = [
    {
        img: '/img/news-min.png',
        href: 'https://my-news-2021.netlify.app/',
        route: 'news'
    },
    {
        img: '/img/marvel-min.png',
        href: 'https://marvel-2020.netlify.app/',
        route: 'marvel'
    },
    {
        img: '/img/market-min.png',
        href: 'https://clothe-market.netlify.app/',
        route: 'market'
    },
    {
        img: '/img/sintact-min.png',
        href: 'https://building-company.netlify.app/',
        route: 'sintac'
    }
]

const Pet = () => {
    return (
        <section className={cls.mine}>
            {
                initialState.map(({ img , href , route }) => {
                    return <div key={href} className={cls.mine_child}>
                    <img src={img} alt="span" />
                    <Link to={`/work/${route}`} className={cls.firstBtn}>read</Link>
                    <a rel="noreferrer" target='_blank' href={href} className={cls.secondBtn}>view</a>
                </div>
                })
            }
        </section>
    )
}

export default Pet