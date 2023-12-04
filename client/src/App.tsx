import axios from 'axios'
import Header from './components/Header'
import Slider from './components/Slider'
import GenreSlider from './components/GenreSlider'



function App() {

  axios.defaults.baseURL = 'http://localhost:5555'



  return (
      <div>
          <Header />
          <Slider />
          <GenreSlider />
      </div>
        
  )
}

export default App
