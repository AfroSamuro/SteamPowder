import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import SteamAPI from "../../../network/Steam.api";
import './TopListGame.css'

export default function TopListGame(props) {

    const [meta, setMeta] = useState(null);

    const { player_count } = props.rate.response
    const { name, appid } = props.game;

    const title = name.split(' ').join('+')

    const getMetadata = async () => setMeta(await SteamAPI.getGameDetails(appid));

    useEffect(() => {
        getMetadata()
    }, []);

    const like = (appid) => {
        const { like } = props;

        like(appid);
    };

    const unlike = (appid) => {
        const { unlike } = props;

        unlike(appid)
    };

    const watchedGame = (appid) => {
        const { watched } = props;
        watched(appid)
    }

    // console.log(props.like)


    if (!meta) return 'Загрузка...';
    if (!meta[appid].success) return null;
    // console.log(meta)

    const { isLiked } = props;

    const { header_image: imageUrl, short_description: description } = meta[appid].data;

    return (
        <li className="top__list__game">
            <Link to={`/game/${appid}`}
                target='_blank'
                onClick={() => watchedGame(appid)}
                key={appid}>
                <img src={imageUrl} alt="GameLogo" className="game__logo" />
            </Link>
            <div className="game__content">
                <div className="game__text">
                    <Link
                        className="game__title"
                        to={`/${title}/${appid}`}
                        target='_blank'
                        onClick={() => watchedGame(appid)}
                        key={appid}
                    >
                        {name}
                    </Link>
                    <p className="game__count">{player_count}</p>
                </div>
                <button
                    className={`game__likeButton ${isLiked ? 'red' : 'green'}`}
                    onClick={isLiked ? () => unlike(appid) : () => like(appid)}>
                    {isLiked ? 'Unlike' : 'Like'}
                </button>
            </div>
        </li>
    )
}