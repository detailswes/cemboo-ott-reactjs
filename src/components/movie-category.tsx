import React, { useEffect} from "react";
import Slider from "react-slick";
import Modal from "./modal";
import useGetMovies from "../hooks/useGetMovies";
import MarvelVideo from "../assets/videos/marvel.mp4";

const LatestMovies = ({type = "" as string}) => {
    const [showModal, setShowModal] = React.useState(false);
    const { getMovieByCategory } = useGetMovies();

    useEffect(() => {
        const videoCards = Array.from(
            document.querySelectorAll<HTMLDivElement>(".video-card")
        );

        videoCards.forEach((item) => {
            const video = item.querySelector<HTMLVideoElement>("video");

            if (!video) return;

            item.addEventListener("mouseover", () => {
                video.muted = true; // Ensure video is muted for autoplay
                video.play().catch(err => {
                    console.error('Error playing video:', err);
                });
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
                    video.play().catch(err => {
                        console.error('Error playing video:', err);
                    });
                });

                item.removeEventListener("mouseleave", () => {
                    video.pause();
                });
            });
        };
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        navigator: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
        ],
    };
  
    return (
        <>
            <div className="mt-14 px-4 md:px-0">
                <h1 className="text-3xl font-semibold mb-4">
                    {`${type} movies`}
                </h1>
                <Slider className="latest-movies-slider slider-wrapper" {...settings}>
                {getMovieByCategory(type).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setShowModal(true)}
                        className="z-10 hover:scale-110 outline-none relative group transition-all h-full rounded-[5px] overflow-hidden video-card cursor-pointer"
                    >
                        <img
                            src={item?.thumbnail_horizontal}
                            className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500 ease-in-out"
                            alt={`Slide ${index}`}
                        />
                        <video
                            src={MarvelVideo}
                            loop
                            className="w-full h-full opacity-0 group-hover:opacity-100 object-cover absolute top-0 transition-opacity duration-500 ease-in-out"
                        />
                    </div>
                ))}
            </Slider>
            </div>
            <Modal
                showModal={showModal}
                setShowModal={() => setShowModal(false)}
                title="Video Title"
            >
                <div className="sm:w-full md:w-auto md:min-w-[800px]">
                    <iframe
                        src="https://www.youtube.com/embed/hRFY_Fesa9Q"
                        width="90%"
                        height="500px"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube video"
                    ></iframe>
                </div>
            </Modal>
        </>
    );
};

export default LatestMovies;
