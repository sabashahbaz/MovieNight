import Home from './components/Home'
import {Section} from './components/Section'
import Counter from './components/Counter'
import Header from './components/Header'


import {useState} from 'react'

function App() {
  const [count,setCount] = useState<number>(1)

  return (
      <div className="text-3xl font-bold underline">
          <Header />
          {/* <Home title={"hello"}/> */}
          {/* <Section>my subheading</Section>
          <Counter setCount={setCount}>Count is{count}</Counter> */}
      </div>
        
  )
}

export default App
