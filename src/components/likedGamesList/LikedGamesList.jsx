import LikedGame from "./likedGame/LikedGame";
import './LikedGamesList.css'

export default function LikedGamesList(props) {

    const {games, watched} = props

    return (
        <div className="liked__games">
            <header className="liked__head">
                You liked:
            </header>
            <ul className="liked__list">
                {
                    games.length 
                        ? games.map(game => <LikedGame game={game} watched={watched}/>)
                        : <p>List is empty</p>
                }
            </ul>
        </div>

    )
}