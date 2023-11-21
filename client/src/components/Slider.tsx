import {useEffect} from 'react'
import axios from 'axios'

const Slider = () => {

    useEffect(() => {
        axios.get('/trending_movies')
        .then(response => console.log(response))

    }, [])

    return (
        <div>Slider</div>
    )
}

export default Slider