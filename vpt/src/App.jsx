import { useState } from "react"
import HeroPage from "./components/HeroPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeroPage />
    </div>
  )
}

export default App
