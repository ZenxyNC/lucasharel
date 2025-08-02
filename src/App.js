import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing";

export default function App() {

  return (
    <>
      <Router basename="/lucasharel">
        <Routes>
          <Route path="*" element={<Landing />} />
        </Routes>
      </Router>
    </>
  )
}