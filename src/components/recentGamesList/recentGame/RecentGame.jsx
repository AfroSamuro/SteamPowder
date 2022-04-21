import { Link } from 'react-router-dom'
import './RecentGame.css'

export default function RecentGame(props) {

    const { name, appid } = props.game
    const title = name.split(' ').join('+')

    return (
        <li className="recent__game" key={appid}>
            <Link to={`/${title}/${appid}`} target='_blank'>
                {name}
            </Link>
        </li>
    )
}