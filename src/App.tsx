import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Gitflow playground</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         This count is {count + 4}
        </button>
      </div>
    </>
  )
}

export default App
