import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Adaptive from "../../components/adaptive/Adaptive";
import Categorie from '../../components/categorie/Categories';
import Platforms from '../../components/platforms/Platfroms';
import Carousel from '../../components/screenCarousel/screenCarousel';
import "swiper/css/bundle";
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
        // getVideos()
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
    // console.log(videos.items)


    return (
        <Adaptive className='gamePage' tagname={'section'} >
            <div className='game__total' /*style={{ backgroundImage: `url(${background})` }}*/>
                <div className='total__title'>
                    {name}
                </div>

                <div className='total__content'>
                    <div className='content__media'>
                        <div className='content__carusel'>
                            {/* <div className='screenshots'>
                            {screenshots.map(screen => <img id={screen.id} src={screen.path_thumbnail} alt='screen' className='screenshots__screen' />)}
                        </div> */}
                            {/* <Carousel screens={screenshots} /> */}
                        </div>
                        <div className='content__videos'>
                            {videos.items.map(video => <a
                                className='videos__content'
                                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                target='_blank'>
                                <img className='videos__img' src={video.snippet.thumbnails.medium.url} alt='content_logo' />
                                <div className='videos__desc'>
                                    <p className='desc__title'>{video.snippet.title}</p>
                                    <p className='desc__channel'>{video.snippet.channelTitle}</p>
                                </div>
                            </a>
                            )}
                        </div>
                    </div>


                    <div className='content__description'>
                        <div className='description__img'>
                            <img src={image} alt="logo" className='img__logo' />
                        </div>
                        <div className='description__snippet'>
                            <p>{description}</p>
                        </div>
                        <div className='description__countRating'>

                            <div className='countRating__rating'>
                                <img className='rating__logo' src="https://d23gn3985hkc32.cloudfront.net/wp-content/uploads/2020/12/597919-metacritic-review-bombing.jpg" alt="metaLogo" />
                                <p className='rating__number'>{metacritic.score}</p>
                            </div>
                            <div className='countRating__count'>
                                <p className='count__text'>Online:</p>
                                <p className='count__number'>{count}</p>
                            </div>
                        </div>
                        <Categorie categories={categories} />
                        <Platforms platforms={platforms} />
                    </div>
                </div>
            </div>
        </Adaptive >
    )
}

