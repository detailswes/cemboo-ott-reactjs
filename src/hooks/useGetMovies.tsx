import  { useState, useEffect } from 'react';
import { Movie } from '../types/movie';

const useGetMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('db.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Movie[] = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const getTrendings = (): Movie[] => {
    return movies
      .sort((a, b) => b.release_year - a.release_year)
      .slice(0, 10);
  };

  const getMovieByCategory = (category: string): Movie[] => {
    if (category === "Latest") {
        return getTrendings();
    }
    return movies.filter((movie) => movie.genre.includes(category));
  }

  return { getTrendings, movies, getMovieByCategory };
};

export default useGetMovies;
