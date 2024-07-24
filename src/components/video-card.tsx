import React, { useEffect } from "react";
import DisneyImage from "../assets/images/disney.png";
import GeographicImage from "../assets/images/geographic.png";
import MarvelImage from "../assets/images/marvel.png";
import PixarImage from "../assets/images/pixar.png";
import StarWarsImage from "../assets/images/star-wars.png";
import DisneyVideo from "../assets/videos/disney.mp4";
import GeographicVideo from "../assets/videos/geographic.mp4";
import MarvelVideo from "../assets/videos/marvel.mp4";
import PixarVideo from "../assets/videos/pixar.mp4";
import StarWarsVideo from "../assets/videos/star-war.mp4";

const VideoCard: React.FC = () => {
    useEffect(() => {
        const videoCards = Array.from(
            document.querySelectorAll<HTMLDivElement>(".video-card")
        );

        videoCards.forEach((item) => {
            const video = item.querySelector<HTMLVideoElement>("video");

            if (!video) return;

            item.addEventListener("mouseover", () => {
                video.play();
            });

            item.addEventListener("mouseleave", () => {
                video.pause();
            });
        });

        return () => {
            videoCards.forEach((item) => {
                const video = item.querySelector<HTMLVideoElement>("video");
                if (!video) return;

                item.removeEventListener("mouseover", () => {
                    video.play();
                });

                item.removeEventListener("mouseleave", () => {
                    video.pause();
                });
            });
        };
    }, []);

    return (
        <div className="relative mt-14 w-[92%] mx-auto h-[10vw] flex justify-between">
            <div className="relative group min-w-[calc(100%/5-10px)] transition-all w-[calc(100%/5-10px)] h-full rounded-[5px] overflow-hidden video-card cursor-pointer">
                <img
                    src={DisneyImage}
                    className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                    alt="Disney"
                />
                <video
                    src={DisneyVideo}
                    loop
                    className="w-full h-full opacity-0 group-hover:opacity-100 object-cover absolute top-0 transition-opacity duration-500 ease-in-out"
                />
            </div>

            <div className="relative group min-w-[calc(100%/5-10px)] transition-all w-[calc(100%/5-10px)] h-full rounded-[5px] overflow-hidden video-card cursor-pointer">
                <img
                    src={PixarImage}
                    className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                    alt="Pixar"
                />
                <video
                    src={PixarVideo}
                    loop
                    className="w-full h-full opacity-0 group-hover:opacity-100 object-cover absolute top-0 transition-opacity duration-500 ease-in-out"
                />
            </div>

            <div className="relative group min-w-[calc(100%/5-10px)] transition-all w-[calc(100%/5-10px)] h-full rounded-[5px] overflow-hidden video-card cursor-pointer">
                <img
                    src={GeographicImage}
                    className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                    alt="Geographic"
                />
                <video
                    src={GeographicVideo}
                    loop
                    className="w-full h-full opacity-0 group-hover:opacity-100 object-cover absolute top-0 transition-opacity duration-500 ease-in-out"
                />
            </div>

            <div className="relative group min-w-[calc(100%/5-10px)] transition-all w-[calc(100%/5-10px)] h-full rounded-[5px] overflow-hidden video-card cursor-pointer">
                <img
                    src={MarvelImage}
                    className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                    alt="Marvel"
                />
                <video
                    src={MarvelVideo}
                    loop
                    className="w-full h-full opacity-0 group-hover:opacity-100 object-cover absolute top-0 transition-opacity duration-500 ease-in-out"
                />
            </div>

            <div className="relative group min-w-[calc(100%/5-10px)] transition-all w-[calc(100%/5-10px)] h-full rounded-[5px] overflow-hidden video-card cursor-pointer">
                <img
                    src={StarWarsImage}
                    className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                    alt="Star Wars"
                />
                <video
                    src={StarWarsVideo}
                    loop
                    className="w-full h-full opacity-0 group-hover:opacity-100 object-cover absolute top-0 transition-opacity duration-500 ease-in-out"
                />
            </div>
        </div>
    );
};

export default VideoCard;
