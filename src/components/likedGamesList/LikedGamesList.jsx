import { useState } from "react";
import LikedGame from "./likedGame/LikedGame";
import './LikedGamesList.css'

export default function LikedGamesList(props) {

    const { games, watched } = props

    const [isHidden, setIsHidden] = useState(true);

    const showAll = () => {
        setIsHidden(!isHidden)
    };

    return (
        <div className="liked__games">
            <header className="liked__head">
                You liked:
            </header>
            <ul className="liked__list">
                {isHidden ?
                    games.length
                        ? games.slice(0, 3).map(game => <LikedGame game={game} watched={watched} />)
                        : <p>List is empty</p>
                    : games.map(game => <LikedGame game={game} watched={watched} />)
                }

                {games.length > 3
                    ? <p className="list__showMore" onClick={showAll}>{isHidden ? 'Show more...' : 'Hide...'}</p>
                    : false
                }
            </ul>
        </div>

    )
}