import { useState } from 'react'
import './App.css'
import ListItems from './list'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Gitflow playground -- JRS18</h1>
      
      <h2>Employee system</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         This count is {count + 4}
        </button>
        <p>Hello Git. 🙌 Creating a merge conflict😁</p>
        <ListItems />
      </div>
    </>

  )
}

export default App
