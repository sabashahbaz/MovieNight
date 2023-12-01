import {useEffect, useState} from 'react'
import axios from 'axios'
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";

//defining interface named TrendingMovies to specify the structure of a single movie
//poster_path is a string
interface TrendingMovies {
    poster_path: string;
}


const Slider = () => {
    const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
    const [trendingMovies, setTrendingMovies] = useState<TrendingMovies[]>([])

    useEffect(() => {
        axios.get('/trending_movies')
        .then((response) => {
            setTrendingMovies(response.data.movies.results)
        })
    }, [])

    
    console.log("trendingmovies",trendingMovies)

    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer"/>
            <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"/>
        
        <div className = 'flex overflow-x-auto w-full px-4 py-4 scrollbar-hide'>
            {trendingMovies.map((movie) => (
            <img src ={IMAGE_BASE_URL+movie.poster_path} className = 'w-[310px] md:h-[450px] mr-5 rounded-md'/>
        ))}
        </div>
        </div>
    )
}

export default Slider