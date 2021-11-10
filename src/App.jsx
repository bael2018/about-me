import cls from './App.module.css'
import Greet from './components/Greet'
import Work from './pages/Work'

const App = () => {
    return (
        <section className={cls.root}>
            <Greet/>
            <Work/>
        </section>
    )
}

export default App