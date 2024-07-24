import React from "react";
import MovieCategory from "../../components/movie-category";
import HeroSlider from "../../components/hero-slider";
import NavBar from "../../components/vertical-navbar";

const movieCategories: string[] = [
    'Latest',
    'Adventure',
    'Sci-Fi',
];

const Home: React.FC = () => {
   
    return (
        <div className="relative min-h-screen bg-black text-white pb-20">
            <NavBar />
            <div className="md:ml-20 w-[calc(100% - 80px)]">
                <HeroSlider />
                {
                    movieCategories.map((item, index) => (
                        <MovieCategory key={index} type={item}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;
