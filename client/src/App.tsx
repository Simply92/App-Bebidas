import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Favorites from "./views/Favorites"
import Layout from "./layouts/Layout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/favoritos" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
