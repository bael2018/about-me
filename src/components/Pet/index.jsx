import cls from './Pet.module.css'
import { Link } from 'react-router-dom'

const initialState = [
    {
        img: '/img/news.png',
        href: 'https://my-news-2021.netlify.app/',
        route: 'news'
    },
    {
        img: '/img/marvel.png',
        href: 'https://marvel-2020.netlify.app/',
        route: 'marvel'
    },
    {
        img: '/img/market.png',
        href: 'https://clothe-market.netlify.app/',
        route: 'market'
    },
    {
        img: '/img/sintact.png',
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