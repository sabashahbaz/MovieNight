import {useEffect, useState} from 'react'
import axios from 'axios'

const Slider = () => {

    const [trendingMovies, setTrendingMovies] = useState("")

    useEffect(() => {
        axios.get('/trending_movies')
        .then((response) => {
            setTrendingMovies(response.data)
        })
    }, [])

    console.log("trendingmovies",trendingMovies)

    return (
        <div>Slider</div>
    )
}

export default Slider