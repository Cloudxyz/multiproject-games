import { Route, Routes } from "react-router-dom"
import { MemoTest, WordsPerMinute, Pokemon } from "./screens"

function App() {
  return (
    <Routes>
      <Route path="/memotest" element={<MemoTest />} />
      <Route path="/wpm" element={<WordsPerMinute />} />
      <Route path="/pokemon" element={<Pokemon /> } />
    </Routes>
  )
}

export default App
