import {useEffect, useState, useRef} from 'react'
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

    const elementRef=useRef<HTMLDivElement>(null)

    useEffect(() => {
        axios.get('/trending_movies')
        .then((response) => {
            setTrendingMovies(response.data.movies.results)
        })
    }, [])


    
    console.log("trendingmovies",trendingMovies)

    const sliderRight=(element: HTMLDivElement | null) => {
        if (!element) {
            return null 
        }
        element.scrollLeft += 800
    }

    const sliderLeft=(element: HTMLDivElement | null) => {
        if (!element) {
            return null 
        }
        element.scrollLeft -= 800
    }

    // const id = "35"
    // useEffect(() => {
    //         fetch(`/movieGenre/${id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("genre data",data);
    //         })
    //     }
    // ,[])


    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer" onClick={() => sliderLeft(elementRef.current)}/>
            <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0" onClick={() => sliderRight(elementRef.current)}/>
        
        <div className = 'flex overflow-x-auto w-full px-4 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
            {trendingMovies.map((movie) => (
            <img src ={IMAGE_BASE_URL+movie.poster_path} className = 'w-[310px] md:h-[450px] mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-50 ease-in transition-smooth  '/>
        ))}
        </div>
        </div>
    )
}

export default Slider