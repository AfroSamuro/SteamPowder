import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import SteamAPI from "../../../network/Steam.api";
import './TopListGame.css'

export default function TopListGame(props) {

    const [meta, setMeta] = useState(null);
    const [isHover, setIsHover] = useState(false);

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
    console.log(meta[appid].data)

    const { isLiked } = props;

    const { header_image: imageUrl, short_description: description } = meta[appid].data;
    const { 480: video } = meta[appid].data.movies[0].webm;
   

    const gameImage = () => {
        return <img src={imageUrl} alt="GameLogo" className="game__logo" />
    };
    const gameVideo = () => {
        return <video src={video} className="game__video" muted loop />
    };

    const onOver = () => {
        setIsHover(true);
    }

    const onOut = () => {
        setIsHover(false);
    }

    // const media = useRef({gameImage});

    // const showTrailer = () => {

    // };

    return (
        <li className="top__list__game" onMouseEnter={onOver} onMouseLeave={onOut}>
            <Link className={'game_preview'} to={`/${title}/${appid}`}
                target='_blank'
                onClick={() => watchedGame(appid)}
                key={appid}>
                {
                    isHover 
                    ? <video src={video} className="game__video" muted loop autoPlay/>
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