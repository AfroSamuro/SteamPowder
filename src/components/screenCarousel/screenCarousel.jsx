import { CarouselProvider, Slider, Slide, Image, ImageWithZoom, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './screenCarousel.css'

export default function Carousel(props) {
    // {screenshots.map(screen => <img id={screen.id} src={screen.path_thumbnail} alt='screen' className='screenshots__screen' />)}

    console.log(props.screens)
    return (
        <div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={props.screens.length}
            >
                <Slider>
                    {props.screens.map(screen => <Slide index={screen.id}>{<img src={screen.path_thumbnail} alt='logo'></img>}</Slide>)}
                </Slider>
                <div className='carousel__buttons'>
                    <ButtonBack>{'◄'}</ButtonBack>
                    <ButtonNext>{'►'}</ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    )
}