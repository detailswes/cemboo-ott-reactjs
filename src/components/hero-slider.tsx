import Slider, { Settings } from "react-slick";
import useGetMovies from "../hooks/useGetMovies";
import formatDuration from "../utils/formatDuration";
import formatGenres from "../utils/formatGenre";
import { Movie } from '../types/movie';
import {
    PlusIcon
} from "@heroicons/react/24/outline";

export default function HeroSlider() {
    const { movies } = useGetMovies();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        navigator: false,
    };

    return (
        <Slider {...settings} className="slider-wrapper">
            {movies.map((movie: Movie) => (
                <div className="relative h-[45vh] md:h-[70vh]" key={movie.id}>
                    <img
                         src={movie?.thumbnail_vertical}
                        alt={movie?.title}
                        className="cover w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#000] to-transparent flex flex-col justify-end items-start ps-4 pb-4 md:ps-20 md:pb-20">
                        {/* <img
                            className="w-full max-w-32 mb-6"
                            src="https://image.tmdb.org/t/p/original/4KqzvqfiXk7gPH6g1zwyPA48NKn.png"
                            alt="furious"
                        /> */}
                        <h1 className="text-4xl font-semibold">
                            {movie?.title}
                        </h1>
                        <p className="mt-3 font-semibold">
                            {movie?.release_year}
                        </p>
                        <p className="mt-2 text-xs">
                            {formatDuration(movie?.duration_minutes)}
                        </p>
                        <p className="text-sm font-normal mt-4 max-w-96">
                            {movie?.synopsis}
                        </p>
                        <p className="mt-4">
                            {formatGenres(movie?.genre)}
                        </p>
                        <div className="flex mt-4 gap-4">
                            <button className="min-w-56 bg-[#ffffff21] text-white hover:scale-110 text-sm transition-transform h-10 rounded-md">
                                Watch
                            </button>
                            <button className="min-w-12 flex justify-center items-center bg-[#ffffff21] text-white hover:scale-110 text-sm transition-transform h-10 rounded-md">
                                <PlusIcon className="w-5 h-5"></PlusIcon>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
