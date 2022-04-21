import RecentGame from './recentGame/RecentGame'
import './RecentGamesList.css'

export default function RecentGamesList(props) {

    const { games } = props;

    return (
        <div className='recent__games'>
            <header className="recent__head">
                You watched:
            </header>
            <ul className="recent__list">
                {
                    games.size
                        ? [...games.values()].map(game => <RecentGame {...game} />)
                        : <p>List is empty</p>
                }
            </ul>
        </div>

    )
}