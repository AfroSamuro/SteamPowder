import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Adaptive from "../../components/adaptive/Adaptive";
import Categorie from '../../components/categorie/Categories';
import Platforms from '../../components/platforms/Platfroms';
import Carousel from '../../components/screenCarousel/screenCarousel';
import SteamAPI from "../../network/Steam.api"
import YoutubeAPI from '../../network/Youtube.api';

import './GamePage.css'

export default function GamePage() {

    const [gameData, setGameData] = useState(null);
    const [online, setOnline] = useState(null);
    const [videos, setVideos] = useState(null)
    const { game, id } = useParams();

    const getGameData = async () => {
        setGameData(await SteamAPI.getGameDetails(id))
    };

    const getOnline = async () => {
        setOnline(await SteamAPI.getCurrentOnline(id))
    };

    const getVideos = async () => {
        setVideos(await YoutubeAPI.getYoutubeVideos(game))
    }

    useEffect(() => {
        getGameData();
        getOnline();
        getVideos()
    }, []);

    if (!gameData) return 'Загрузка...';
    if (!online) return 'Загрузка...';
    if (!videos) return 'Загрузка...';
    if (!gameData[id].success) return null;

    const { player_count: count } = online.response
    const {
        name,
        short_description: description,
        header_image: image,
        screenshots,
        background,
        categories,
        metacritic,
        platforms,

    } = gameData[id].data

    console.log(gameData[id].data)
    // console.log(metacritic)

    // videos.map(data => console.log(data.items))



    return (
        <Adaptive className='game'  tagname={'section'} >
            <div className='game__total' style={{ backgroundImage: `url(${background})` }}>
                <div className='total-title'>
                    {name}
                </div>

                <div className='total__content'>
                    <div className='content-carusel'>
                        {/* <div className='screenshots'>
                            {screenshots.map(screen => <img id={screen.id} src={screen.path_thumbnail} alt='screen' className='screenshots__screen' />)}
                        </div> */}
                        <Carousel screens={screenshots} />
                    </div>

                    <div className='content-description'>
                        <div>
                            <img src={image} alt="logo" />
                        </div>
                        <p>{description}</p>
                        <p>{count}</p>
                        <p>{metacritic.score}</p>
                        <Categorie categories={categories} />
                        <Platforms platforms={platforms} />
                    </div>

                    <div className='content-video__reviews'>

                    </div>
                </div>
            </div>
        </Adaptive >
    )
}
