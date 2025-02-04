import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import "../assets/styles/CardSlider.css";
import ale_cul from '../assets/images/ale_cul.jpg';


const CardSlider = () => {
    const cards = [
        { id: 1, title: "", content: "Ale Museum", image: "/assets/images/ale_cul.jpg" },
        { id: 2, title: "Mountain Adventure", content: "Explore the mountains", src: "/images/mountain.jpg" },
        // { id: 3, title: "City Lights", content: "Experience nightlife", <image src "/images/.jpg"></image> },
        { id: 3, title: "City Lights", content: "Experience nightlife", image: "/images/.jpg" },
        { id: 4, title: "Serene Forest", content: "Nature at its best", image: "/images/forest.jpg" },
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
        >
            {cards.map((card) => (
                <SwiperSlide key={card.id} className="swiper-slide">
                    <div className="card">
                        <img src={card.image} alt={card.title} className="card-image" />
                        <div className="overlay">
                            <h2>{card.title}</h2>
                            <p>{card.content}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardSlider;
