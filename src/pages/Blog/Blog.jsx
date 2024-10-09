import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { BlogContext } from "../../context/BlogContext"
import './blog.css'
function Blog() {
    const { blogs } = useContext(BlogContext)
    return (
        <main>
            <h1>Blog</h1>
            <section className="blogs-container">
                {
                    blogs.map(blog => {
                        return <NavLink to={blog.slug} key={blog.slug}>
                            <article className="blog-post-single">
                                <h1>{blog.title}</h1>
                                <p>{blog.author}</p>
                            </article>
                            </NavLink>
                    })
                }
            </section>
        </main>
    )
}
export { Blog }