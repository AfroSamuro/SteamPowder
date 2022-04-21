import './Header.css'
import logo from '../../images/logo_transparent.png'
import Adaptive from '../adaptive/Adaptive'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header className='head'>
            <Adaptive className='header'>
                <Link to={'/'} target='_self'>

                    <img src={logo} alt="logo" className="header__logo" />
                </Link>

                <label >
                    <input className="header__search" placeholder="Search" />
                </label>
            </Adaptive>
        </header>
    )
}

// Доброго времени суток. Меня зовут Владислав. Меня крайне заинтересовала ваша вакансия на позицию Джуниор Фронтэнд разраб.
// Пусть у меня нет комерческого опыта, но я готов применить свои навыки разработки вэб приложений, использующие стеки реакт и редакс,
// изучать и применять новые решения.