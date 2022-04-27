import { useState } from "react";
import RecentGame from './recentGame/RecentGame'
import './RecentGamesList.css'

export default function RecentGamesList(props) {

    const { games } = props;

    const [isHidden, setIsHidden] = useState(true);

    const showAll = () => {
        setIsHidden(!isHidden)
    };
console.log(games)
    return (
        <div className='recent__games'>
            <header className="recent__head">
                You watched:
            </header>
            <ul className="recent__list">
                {isHidden ?
                    games.size ?
                        [...games.values()].slice(0, 3).map(game => <RecentGame {...game} />) :
                        <p>List is empty</p> :
                    [...games.values()].map(game => <RecentGame {...game} />)
                }
                {games.size > 3
                    ? <p className="list__showMore" onClick={showAll}>{isHidden ? 'Show more...' : 'Hide...'}</p>
                    : false
                }
            </ul>
        </div>

    )
}