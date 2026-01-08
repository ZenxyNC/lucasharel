import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./components/main/main"

function App() {

  return (
    <Router basename="/lucasharel/">
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App
