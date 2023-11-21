import axios from 'axios'
import Header from './components/Header'
import Slider from './components/Slider'



function App() {

  axios.defaults.baseURL = 'http://localhost:5555'

  return (
      <div>
          <Header />
          <Slider />
      </div>
        
  )
}

export default App
