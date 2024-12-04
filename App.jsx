import { BrowserRouter, Routes,Route } from "react-router-dom"
import Login from "./pages/Auth/log in"
import Register from "./pages/Auth/register"
import Products from "./pages/Products/Indexs"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/products" element={<Products />} />          
        </Routes>
      </BrowserRouter>
    </>
  )
}
