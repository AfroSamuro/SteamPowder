import TopListGame from "./topListGame/TopListGame";
import './TopGamesList.css'


export default function TopGamesList(props) {

    const { games, like, unlike, isLiked, watched } = props;
    
    return (
        <>
            <header className="topGames__head">
                <p className="head__title">Most Played Games</p>
                <p className="head__count">Players Now</p>
            </header>
            <ul className="topGames__list">
                {games.slice(0, 10).map(data =>
                    <TopListGame
                        {...data}
                        like={like}
                        unlike={unlike}
                        isLiked={isLiked.find(liked => liked.game.appid === data.game.appid)}
                        watched={watched}
                        key={data.game.appid}
                    />)}
            </ul>
        </>
    )
}