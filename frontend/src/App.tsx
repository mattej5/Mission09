import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import TeamList from './components/TeamList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Heading />
        <TeamList />
      </div>
      <h1>Hello, world!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hello, World!
        </p>
      </div>
    </>
  )
}

export default App