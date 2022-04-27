import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Adaptive from "../../../components/adaptive/Adaptive";


export default function GamePageSkeleton() {

    return (
        <Adaptive className='gamePage' tagname={'section'} >
            <SkeletonTheme baseColor="#232e3d" highlightColor="#1c2636">
                <div className='game__total' /*style={{ backgroundImage: `url(${background})` }}*/>
                    <div className='total__title'>
                        <Skeleton width={'70%'} height={32} />
                    </div>

                    <div className='total__content'>
                        <div className='content__media'>
                            <div className='content__carusel' style={{height: 550, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                                <Skeleton height={436} />
                                <Skeleton height={104} />
                            </div>
                            <div className='content__videos'>
                                <Skeleton height={156} width={776}/>
                            </div>
                        </div>


                        <div className='content__description'>
                            <div className='description__img'>
                                <Skeleton className='img__logo' />
                                {/* <img src={image} alt="logo" className='img__logo' /> */}
                            </div>
                            <div className='description__snippet'>
                                <Skeleton height={106} />
                                {/* <p>{description}</p> */}
                            </div>
                            <div className='description__countRating'>

                                <div className='countRating__rating'>
                                    <Skeleton height={50} width={128} />
                                    {/* <img className='rating__logo' src="https://d23gn3985hkc32.cloudfront.net/wp-content/uploads/2020/12/597919-metacritic-review-bombing.jpg" alt="metaLogo" />
                                <p className='rating__number'>{metacritic ? metacritic.score : "?"}</p> */}
                                </div>
                                <div className='countRating__count'>
                                    <Skeleton height={50} width={84} />
                                    {/* <p className='count__text'>Online:</p>
                                <p className='count__number'>{count}</p> */}
                                </div>
                            </div>
                            <div className="description__categories">
                                <Skeleton height={340} />
                            </div>
                            <div className="description__platforms">
                                <Skeleton height={76} />
                            </div>
                            {/* <Categorie categories={categories} />
                        <Platforms platforms={platforms} /> */}
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
        </Adaptive >
    )
}