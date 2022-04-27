import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";



import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";

import "./screenCarousel.css";





export default function Carousel(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#9fa1ab",
                    "--swiper-pagination-color": "#9fa1ab",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
                autoplay={{
                    delay: 2500,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                  }}
            >
                {props.screens.map(screen =>
                    <SwiperSlide index={screen.id}>
                        {<img src={screen.path_thumbnail} alt='logo'></img>}
                    </SwiperSlide>)}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {props.screens.map(screen =>
                    <SwiperSlide index={screen.id}>
                        {<img src={screen.path_thumbnail} alt='logo'></img>}
                    </SwiperSlide>)}
            </Swiper>
        </>
    );
}


