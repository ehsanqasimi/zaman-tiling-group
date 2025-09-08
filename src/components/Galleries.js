import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import tiling1 from "../assets/images/gallery/tiling/tiling1.jpg";
import tiling2 from "../assets/images/gallery/tiling/tiling2.jpg";
import tiling3 from "../assets/images/gallery/tiling/tiling3.jpg";

import bath1 from "../assets/images/gallery/bathroomReno/bath1.jpg";
import bath2 from "../assets/images/gallery/bathroomReno/bath2.jpg";
import bath3 from "../assets/images/gallery/bathroomReno/bath3.jpg"; 

import splash1 from "../assets/images/gallery/splashBack/splash1.jpg";
import splash2 from "../assets/images/gallery/splashBack/splash2.jpg";
import splash3 from "../assets/images/gallery/splashBack/splash3.jpg";

const galleryData = [
    {
        title: "Tiling Gallery",
        images: [
            tiling1,
            tiling2,
            tiling3,
        ],
    },
    {
        title: "Bathroom Renovation Gallery",
        images: [
            bath1,
            bath2,
            bath3,
        ],
    },
    {
        title: "Kitchen Splash Back Gallery",
        images: [
            splash1,
            splash2,
            splash3,
        ],
    },
];

function Galleries() {
    const [activeTab, setActiveTab] = useState(0);

    // Responsive height based on screen width
    const [swiperHeight, setSwiperHeight] = useState(500);

    useEffect(() => {
        const updateHeight = () => {
            if (window.innerWidth < 400) {
                setSwiperHeight(250);
            } else if (window.innerWidth < 600) {
                setSwiperHeight(300);
            } else if (window.innerWidth < 900) {
                setSwiperHeight(400);
            } else {
                setSwiperHeight(500);
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <section id="gallery" style={{
            width: '100%',
            margin: '0 auto',
            padding: '60px 10%',
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            backgroundColor: 'rgba(241, 239, 225, 0.95)',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        }}>
            {/* Tabs */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
            }}>
                {galleryData.map((gallery, idx) => (
                    <button
                        key={idx}
                        className={`tab ${activeTab === idx ? "active" : ""}`}
                        onClick={() => setActiveTab(idx)}
                        style={{
                            padding: '12px 30px',
                            backgroundColor: activeTab === idx ? '#f7b500' : 'rgba(226, 222, 201, 0.6)',
                            color: activeTab === idx ? '#111' : '#333',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                            outline: 'none',
                        }}
                    >
                        {gallery.title}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div style={{
                marginTop: '40px',
                width: '100%',
                // This ensures the swiper container doesn't get fixed width
            }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    centeredSlides={true}
                    grabCursor={true}
                    breakpoints={{
                        768: {
                            spaceBetween: 20,
                        },
                    }}
                    style={{
                        width: '100%', // Ensure it takes full width
                        height: `${swiperHeight}px`,
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                        // Fix: Force responsive width by setting max-width
                        maxWidth: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    {galleryData[activeTab].images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <img
                                src={img}
                                alt={`${galleryData[activeTab].title} - Slide ${idx + 1}`}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '20px',
                                    transition: 'transform 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.02)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Galleries;