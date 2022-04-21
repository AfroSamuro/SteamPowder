import { Link } from 'react-router-dom'
import './LikedGame.css'

export default function LikedGame(props) {
    const { name, appid } = props.game.game
    const title = name.split(' ').join('+')

    const watchedGame = (appid) => {
        const { watched } = props;
        watched(appid)
    }

    return (
        <li className="liked__game" key={appid}>
            <Link to={`/${title}/${appid}`} target='_blank' onClick={() => watchedGame(appid)} key={appid}>
                {name}
            </Link>
        </li>
    )
}