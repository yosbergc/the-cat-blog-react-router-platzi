import { NavLink } from "react-router-dom"
import { blogposts } from "../../mockups/blogposts"
import './blog.css'
function Blog() {
    return (
        <main>
            <h1>Blog</h1>
            <section className="blogs-container">
                {
                    blogposts.map(blog => {
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