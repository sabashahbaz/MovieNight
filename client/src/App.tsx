import {useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import Slider from './components/Slider'
import GenreSlider from './components/GenreSlider'



function App() {

  axios.defaults.baseURL = 'http://localhost:5555'

  const id = "35"
  console.log(id)

  useEffect(() => {
    axios.get(`/movieGenre/${id}`)
    .then((response) => {
        console.log("movies",response.data.movie_genre.results)
    })
}, [])

  // useEffect(() => {
  //   console.log("JEJEJEJJEJEJEJE");
  //   fetch(`/movieGenre/${id}`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log("genre data", data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching genre data:", error);
  //     });
  
  //   console.log("MEOWOOOWOWOWOWWWW");
  // }, []);

  return (
      <div>
          <Header />
          <Slider />
          <GenreSlider />
      </div>
        
  )
}

export default App
