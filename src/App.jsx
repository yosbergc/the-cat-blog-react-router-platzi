import { Header } from "./components/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Blog } from "./pages/Blog/Blog"
import { Post } from "./pages/Post/Post"
import { Login } from "./pages/Login/Login"
import { Logout } from "./pages/Logout/Logout"
import { Profile } from "./pages/Profile/Profile"
import { Register } from "./pages/Register/Register"
import { NotFound } from "./pages/NotFound/NotFound"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/:post" element={<Post />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
