import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import SteamAPI from "../../../network/Steam.api";
import './TopListGame.css'

import 'react-loading-skeleton/dist/skeleton.css'
import TopGameSkeleton from "../../skeletons/TopGameSkeleton";

export default function TopListGame(props) {


    const [meta, setMeta] = useState(null);
    const [isHover, setIsHover] = useState(false);
    // const [isVideo, setIsVideo] = useState(true)

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

    // return <TopGameSkeleton />
    if (!meta) return <TopGameSkeleton />;
    if (!meta[appid].success) return null;
    // console.log(meta)

    const { isLiked } = props;

    const { header_image: imageUrl, short_description: description } = meta[appid].data;

    const check = () => {
        if (meta[appid].data.movies) {
            return meta[appid].data.movies[0].webm[480];
        } else {
            return false
        }
    };

    const onOver = () => {
        setIsHover(true);
    }

    const onOut = () => {
        setIsHover(false);
    }

    return (
        <li className="top__list__game" onMouseEnter={onOver} onMouseLeave={onOut}>
            <Link className={'game_preview'} to={`/${title}/${appid}`}
                target='_blank'
                onClick={() => watchedGame(appid)}
                key={appid}>
                {
                    isHover
                        ? check()
                            ? <video src={meta[appid].data.movies[0].webm[480]} className="game__video" muted loop autoPlay />
                            : <img src={imageUrl} alt="GameLogo" className="game__logo" />
                        : <img src={imageUrl} alt="GameLogo" className="game__logo" />
                }
            </Link>

            <div className="game__content">

                <div className="game__text">
                    <Link
                        className="game__title"
                        to={`/${title}/${appid}`}
                        target='_blank'
                        onClick={() => watchedGame(appid)}
                        key={appid}>
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