import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { About } from './components/shared/About'
import { Banner } from './components/shared/Banner'
import { Contacts } from './components/shared/Contacts'
import { Modal } from './components/shared/Modal'
import { Navbar } from './components/shared/Navbar'
import { Skills } from './components/shared/Skills'
import { Works } from './components/shared/Works'
import './scss/style.scss'

const App = () => {
    const { isModal , isBurger } = useSelector(state => state.app)

    useEffect(() => {
        if(isModal || isBurger){
            window.document.body.style.overflow = 'hidden'
        }else{
            window.document.body.style.overflowY = 'scroll'
            window.document.body.style.overflowX = 'hidden'
        }
    } , [isModal , isBurger]) 

    return (
        <section className='root'>
            <Navbar/>
            <Banner/>
            <div className='root_container'>
                <About/>
                <Works/>
                <Skills/>
            </div>
            <Contacts/>
            <Modal/>
        </section>
    )
}

export default App