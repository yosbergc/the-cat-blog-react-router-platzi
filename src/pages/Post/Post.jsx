import { useParams } from "react-router-dom"
import { blogposts } from "../../mockups/blogposts"
import { useNavigate } from "react-router-dom"
import './post.css'
function Post() {
    const { post } = useParams()
    const navigate = useNavigate()
    const postSingle = blogposts.find(blog => blog.slug === post)
    
    function handleBack() {
        navigate('/blog')
    }
    return (
        <main>
            <article>
                <header className="article-header">
                    <h1>{postSingle?.title}</h1>
                    <button onClick={handleBack}>Volver al blog</button>
                </header>
                <p><strong>{postSingle.author}</strong></p>
                <br />
                <p>{postSingle?.content}</p>
            </article>
            <section className="blog-comments">
                <h2>Comentarios</h2>
                {
                    postSingle.comments.length > 0 ? <section className="comments-container">
                        {postSingle.comments.map(comment => {
                            return <article key={comment.author} className="comment-single">
                                <p>{comment.commentContent}</p>
                                <strong>{comment.author}</strong>
                            </article>
                        })}
                        </section> : "No commments"
                }
            </section>
        </main>
    )
}
export { Post }