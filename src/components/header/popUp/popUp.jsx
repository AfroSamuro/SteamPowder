import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import './popUp.css'

function PopUp(props, ref) {

    const { result, isEmpty } = props

    return (
        <ul className="popUp__box" style={isEmpty ? { display: 'flex' } : { display: 'none' }} ref={ref}>
            {isEmpty && result.length === 0 ?
                <p className="popUp__noMatches">
                    Совпадений не найдено
                </p> :
                result.map(item =>
                    <li>
                        <Link
                            to={`/${item.game.name.split(' ').join('+')}/${item.game.appid}`}
                            target='_blank'
                            className="popUp__game">
                            {item.game.name}
                        </Link>
                    </li>

                )
            }
        </ul>
    )
}

export default forwardRef(PopUp)