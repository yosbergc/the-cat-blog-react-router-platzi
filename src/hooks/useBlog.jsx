import { useState } from "react"
import { blogposts } from "../mockups/blogposts"
function useBlog() {
    const [blogs, setBlogs] = useState(blogposts)

    function deletePost(postSlug) {
        const newBlogs = [...blogs]
        const postToDeleteIndex = newBlogs.findIndex(post => post.slug === postSlug)
        newBlogs.splice(postToDeleteIndex, 1)
        setBlogs(newBlogs)
    }

    function deleteComment(commentText, postSlug) {
       const newBlogs = blogs.map(post => {
        if (post.slug === postSlug) {
            const newComments = post.comments.filter(comment => comment.commentContent !== commentText)
            return {
                ...post,
                comments: newComments
            }
        } else {
            return post
        }
       })
       setBlogs(newBlogs)
    }

    return { blogs, deletePost, deleteComment }
}
export { useBlog }