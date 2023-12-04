import {useEffect, useRef} from 'react'
import axios from 'axios'
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";
import comedy from '../assets/images/comedy.png'
import horror from '../assets/images/horror.png'
import romantic from '../assets/images/romantic.png'
import action from '../assets/images/action.png'
import family from '../assets/images/family.png'
import documentary from '../assets/images/documentary.png'

const GenreSlider = () => {
    const elementRef=useRef<HTMLDivElement>(null)

    const genreList = [
        {
            id: 1,
            image: comedy
        },
        {
            id: 2,
            image: horror
        },
        {
            id: 3,
            image: romantic
        },
        {
            id: 4,
            image: action
        },
        {
            id: 5,
            image: family
        },
        {
            id: 6,
            image: documentary
        }
    ]

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

    const id = "35"
    console.log(id)
    useEffect(() => {
        axios.get(`/movieGenre/${id}`)
        .then((response) => {
            console.log("movies",response.data.movie_genre.results)
        })
    }, [])

    return (
        <div>
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[100px] cursor-pointer" onClick={() => sliderLeft(elementRef.current)}/>
            <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[100px] cursor-pointer right-0" onClick={() => sliderRight(elementRef.current)}/>

            <div className='flex gap-2 overflow-x scrollbar-hide scroll-smooth px-4'>
            {genreList.map((genre)=>(
                <div className='rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                    <img src={genre.image} alt="genre-image" className=' md:w-[350px] md:h-[17genreL0px] mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-50 ease-in transition-smooth  '/>
                </div>
            ))}
        </div>

        </div>
    )
}

export default GenreSlider

//flex gap-2 md:gap-5 p-2 px-5 md:px-16