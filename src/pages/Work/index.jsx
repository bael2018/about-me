import { NavLink , Route , Switch , Redirect} from 'react-router-dom'
import About from '../../components/About'
import Free from '../../components/Free'
import Landing from '../../components/Landing'
import Pet from '../../components/Pet'
import Spa from '../../components/Spa'
import { workRoutes } from '../../Routes'
import cls from './Work.module.css'

const Work = () => {
    return (
        <section id='work' className={cls.work}>
            <div className={cls.work_title}>
                <h3><span>My</span> projects !</h3>
                <p>Here you can find my recent works !</p>
            </div>
            <div className={cls.work_content}>
                <div className={cls.work_content_header}>
                    {
                        workRoutes.map(({title , route}) => {
                            return  <NavLink key={title} 
                            activeClassName={cls.active} 
                            exact to={route}>
                            {title}
                            </NavLink>
                        })
                    }
                </div>

                <div className={cls.work_content_body}>
                    <Switch>
                        <Route path='/work/:id' exact component={About}/>
                        <Route path='/' exact component={Spa}/>
                        <Route path='/landing' exact component={Landing}/>
                        <Route path='/freelance' exact component={Free}/>
                        <Route path='/pet' exact component={Pet}/>
                        <Redirect to='/'/>
                    </Switch>
                </div>
            </div>
        </section>
    )
}

export default Work