import { useMemo } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { moreInfo} from '../../API'
import cls from './About.module.css'

const About = () => {
    const [base , setBase] = useState([])
    const { id } = useParams()

    useMemo(() => {
        const arr = moreInfo.filter(item => item.route === id)
        setBase(arr)
    } , [])

    return (
        <section className={cls.about}>
            {
                base.map(({ title , content , utils , link , img , details }) => {
                    return <div key={link} className={cls.about_child}>
                        <h1 className={cls.about_child_title}>{title}</h1>
                        <div 
                            className={cls.about_child_image}
                            style={{
                                background: `url('${img}') fixed`
                            }}
                        ></div>
                        <div className={cls.about_child_content}>
                            <div className={cls.about_child_content_inside_wrapper}>
                                <p>{content}</p>
                                <a target='_blank' href={link}>VIEW</a>
                            </div>

                            <div className={cls.about_child_content_inside}>
                                <ul>
                                    <h3>Stack</h3>
                                    {
                                        utils.map(item => {
                                            return <li>{item}</li>
                                        })
                                    }
                                </ul>
                                <ul>
                                    <h3>Functional</h3>
                                    {
                                        details.map(item => {
                                            return <li>{item}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                })
            }
        </section>
    )
}

export default About