import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Gitflow playground -- cqro</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Your count current is {count}
        </button>
      </div>
    </>
  )
}

export default App
