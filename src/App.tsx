import { useState } from 'react'
import './App.css'
import ListItems from './list'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Gitflow playground</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Your count current is {count}
        </button>
        <ListItems />
      </div>
    </>

  )
}

export default App
