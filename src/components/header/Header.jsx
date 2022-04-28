import './Header.css'
import logo from '../../images/logo_transparent.png'
import Adaptive from '../adaptive/Adaptive'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react';
import PopUp from './popUp/popUp';
import useModal from '../../hooks/useModal';

export default function Header(props) {

    const { topGames } = props;
    // console.log(topGames)

    const [searchResult, setSearchResult] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [shown, setShown] = useState(false)

    const searchGame = (e) => {
        setIsEmpty(!!e.target.value.trim())
        setSearchResult(e.target.value.trim() ? topGames.filter(item => item.game.name.toLowerCase().includes(e.target.value.toLowerCase())) : [])
    };

    const test = (e) => {
        document.addEventListener('click', console.log('lool'))
    } ;

    const popup = useRef(null)
    const input = useRef(null);

    const {open, close, isOpen} = useModal(popup, { ignoreRefs: [input]});

    const onFocusInput = () => {
        open()
    }

    // const onBlurInput = () => {
    //     close()
    // }

    return (
        <header className='head' onClick={test}>
            <Adaptive className='header'>

                <Link to={'/'} target='_self'>

                    <img src={logo} alt="logo" className="header__logo" />
                </Link>

                <div className='search__container'>
                    {/* <label className='header__label'> */}
                        <input 
                            className="header__search" 
                            placeholder="Search" 
                            onChange={searchGame} 
                            onFocus={onFocusInput} 
                            ref={input}
                        />
                    {/* </label> */}

                    <PopUp result={searchResult} isEmpty={isOpen && isEmpty} shown={shown} ref={popup}/>

                </div>

            </Adaptive>
        </header>
    )
}

