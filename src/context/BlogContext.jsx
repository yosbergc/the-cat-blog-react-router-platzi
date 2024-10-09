import { createContext } from "react";
import { useBlog } from "../hooks/useBlog";
const BlogContext = createContext()

function ProvideBlog({ children }) {
    const { blogs, deleteComment, deletePost } = useBlog()
    return <BlogContext.Provider value={{
        blogs,
        deleteComment,
        deletePost
    }}>
        {children}
    </BlogContext.Provider>
}
export { BlogContext, ProvideBlog }