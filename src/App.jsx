import { Header } from "./components/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Blog } from "./pages/Blog/Blog"
import { Post } from "./pages/Post/Post"
import { Login } from "./pages/Login/Login"
import { Profile } from "./pages/Profile/Profile"
import { NotFound } from "./pages/NotFound/NotFound"
import { UserProvider } from "./context/UserContext"
import { ProvideBlog } from "./context/BlogContext.jsx"
function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProvideBlog>
            <Header/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/blog" element={<Blog />}/>
              <Route path="/blog/:post" element={<Post />}/>
              <Route path="/login" element={<Login />}/>
              <Route
                path="/p/:username"
                element={<Profile />}
                />
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </ProvideBlog>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}



export default App
