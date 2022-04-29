import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Adaptive from "../../components/adaptive/Adaptive";
import Categorie from '../../components/categorie/Categories';
import Platforms from '../../components/platforms/Platfroms';
import Carousel from '../../components/screenCarousel/screenCarousel';
import SteamAPI from "../../network/Steam.api"
import YoutubeAPI from '../../network/Youtube.api';
import 'react-loading-skeleton/dist/skeleton.css'

import './GamePage.css'
import GamePageSkeleton from '../../components/skeletons/gamePageSkeletons/GamePageSkeleton';
// import VkAPI from '../../network/Vk.api';

export default function GamePage() {

    const [gameData, setGameData] = useState(null);
    const [online, setOnline] = useState(null);
    const [videos, setVideos] = useState([]);
    const [groups, setGroups] = useState([])
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
    const getGroups = async () => {
        setGroups(await SteamAPI.getVkGroups(game))
    }

    useEffect(() => {
        getGameData();
        getOnline();
        // getVideos()
        getGroups()
    }, []);


    // return <GamePageSkeleton />

    if (!gameData || !online || !groups.response) return <GamePageSkeleton />;
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

    } = gameData[id].data;
    const { items: vkGroups } = groups.response

    // console.log(gameData[id].data)
    // console.log(metacritic)

    // videos.map(data => console.log(data.items))
    // console.log(videos.items)
    // console.log(vkGroups)


    return (
        <Adaptive className='gamePage' tagname={'section'} >
            <div className='game__total' /*style={{ backgroundImage: `url(${background})` }}*/>
                <div className='total__title'>
                    <p className='title__name'>{name}</p>
                </div>

                <div className='total__content'>
                    <div className='content__media'>
                        <div className='content__carousel'>
                            <div className='carousel__swiper'>
                                <Carousel screens={screenshots} />
                            </div>
                        </div>
                        <div className='content__youtube'>
                            <div className='content__youtubeHeader'>
                                <p>REVIEWS:</p>
                            </div>
                            <div className='content__videos'>
                                {videos.items ? videos.items.map(video => <a
                                    className='videos__content'
                                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                    target='_blank'>
                                    <img className='videos__img' src={video.snippet.thumbnails.medium.url} alt='content_logo' />
                                    <div className='videos__desc'>
                                        <p className='desc__title'>{video.snippet.title}</p>
                                        <p className='desc__channel'>{video.snippet.channelTitle}</p>
                                    </div>
                                </a>
                                ) : false}
                            </div>
                        </div>
                        <div className='content__socialMedia'>
                            <div className='content__social'>
                                <p>COMMUNITY:</p>
                            </div>
                            <div className='content__vkGroups'>
                                {vkGroups.map(group => <a
                                    className='vkGroups__group'
                                    href={`https://vk.com/${group.screen_name}`}
                                    target='_blank'>
                                    <img className='group__img' src={group.photo_100} alt='vk__group' />
                                    <div className='group__desc'>
                                        <p className='desc__title'>{group.name}</p>
                                        <p className='desc__platform'>VK</p>
                                    </div>
                                </a>
                                )}
                            </div>
                        </div>

                    </div>


                    <div className='content__description'>
                        <div className='description__img'>
                            {<img src={image} alt="logo" className='img__logo' />}
                        </div>

                        <div className='description__underImg'>
                            <div className='description__snippet'>
                                <p>{description}</p>
                            </div>

                            <div className='description__countRating'>

                                <div className='countRating__rating'>
                                    <img className='rating__logo' src="https://d23gn3985hkc32.cloudfront.net/wp-content/uploads/2020/12/597919-metacritic-review-bombing.jpg" alt="metaLogo" />
                                    <p className='rating__number'>{metacritic ? metacritic.score : "?"}</p>
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
            </div>
        </Adaptive >
    )
}

