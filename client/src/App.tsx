import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Layout from "./layouts/Layout"
const FavoritesPage = lazy(() => import('./views/Favorites'))

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/favoritos" element={<Suspense fallback="Cargando..."><FavoritesPage /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
