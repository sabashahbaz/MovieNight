import {useEffect, useState} from 'react'
import axios from 'axios'
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";

const Slider = () => {
    const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        axios.get('/trending_movies')
        .then((response) => {
            setTrendingMovies(response.data.movies.results)
        })
    }, [])

    
    console.log("trendingmovies",trendingMovies)

    return (
        <div>
            <HiChevronLeft className="text-red text-[30px] absolute mx-8 mt-[150px] cursor-pointer"/>
            <HiChevronRight className="text-red text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"/>
        
        <div className = 'flex overflow-x-auto w-full px-16 py-4 scrollbar-hide'>
            {trendingMovies.map((item) => (
            <img src ={IMAGE_BASE_URL+item.poster_path} className = 'min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md'/>
        ))}
        </div>
        </div>
    )
}

export default Slider