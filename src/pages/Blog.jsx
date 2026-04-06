import { Link } from "react-router-dom";
import posts from "../posts/postsIndex";
import "../styles/Blog.scss";

function Blog() {
  return (
    <section className="blog">
      <p className="blog__label">BLOG</p>
      <h2 className="blog__title">技術筆記</h2>
      <div className="blog__list">
        {posts.map(post => (
          <Link to={`/blog/${post.slug}`} key={post.slug}>
            <div className="blog-card">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <span>{post.date}</span>
              <div className="blog-card__tags">
                {post.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog;
