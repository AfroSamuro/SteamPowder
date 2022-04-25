import './Header.css'
import logo from '../../images/logo_transparent.png'
import Adaptive from '../adaptive/Adaptive'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import PopUp from './popUp/popUp';

export default function Header(props) {

    const { topGames } = props;
    // console.log(topGames)

    const [searchResult, setSearchResult] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);



    const searchGame = (e) => {
        setIsEmpty(!!e.target.value.trim())
        setSearchResult(e.target.value.trim() ? topGames.filter(item => item.game.name.toLowerCase().includes(e.target.value.toLowerCase())) : [])
    };


    return (
        <header className='head'>
            <Adaptive className='header'>

                <Link to={'/'} target='_self'>

                    <img src={logo} alt="logo" className="header__logo" />
                </Link>

                <div>
                    <label className='header__label'>
                        <input className="header__search" placeholder="Search" onChange={searchGame} />
                    </label>

                    <PopUp result={searchResult} isEmpty={isEmpty} />

                </div>


            </Adaptive>
        </header>
    )
}

