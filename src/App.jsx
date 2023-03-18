import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { MemoTest, WordsPerMinute, Pokemon } from "./screens"

function App() {
  return (
    <>
      <Routes>
        <Route path="/memotest" element={<MemoTest />} />
        <Route path="/wpm" element={<WordsPerMinute />} />
        <Route path="/pokemon" element={<Pokemon /> } />
        <Route path="/" element={<NavBar />} />
      </Routes>
    </>
  )
}

export default App
