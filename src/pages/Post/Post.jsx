import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { BlogContext } from "../../context/BlogContext"
import { UserContext } from "../../context/UserContext"
import './post.css'
function Post() {
    const { post } = useParams()
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const { blogs, deleteComment, deletePost } = useContext(BlogContext)
    const postSingle = blogs.find(blog => blog.slug === post)

    function handleBack() {
        navigate('/blog')
    }
    function handlePostDelete() {
        deletePost(post)
        handleBack()
    }
    function handleCommentDelete(commentContent) {
        deleteComment(commentContent, post)
    }
    return (
        <main>
            <article>
                <header className="article-header">
                    <h1>{postSingle?.title}</h1>
                    <button onClick={handleBack}>Volver al blog</button>
                    {
                        (user?.role === 'admin' || user?.username === postSingle.author) && <button onClick={handlePostDelete} className="secondary-btn">Eliminar post</button>
                    }
                </header>
                <p><strong>{postSingle.author}</strong></p>
                <br />
                <p>{postSingle?.content}</p>
            </article>
            <section className="blog-comments">
                <h2>Comentarios</h2>
                {
                    postSingle.comments.length > 0 ? <section className="comments-container">
                        {postSingle.comments.map((comment, index) => {
                            return <article key={comment.author} className="comment-single">
                                <section className="main-coment">
                                    <p>{comment.commentContent}</p>
                                    <strong>{comment.author}</strong>
                                </section>
                                {
                        (user?.role === 'admin' || user?.username === postSingle.comments[index].author) && <button onClick={() => handleCommentDelete(comment.commentContent)} className="secondary-btn">Eliminar comentario</button>
                                }
                            </article>
                        })}
                        </section> : "No commments"
                }
            </section>
        </main>
    )
}
export { Post }