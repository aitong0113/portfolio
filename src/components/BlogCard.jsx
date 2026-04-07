import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      {post.series && post.seriesOrder && (
        <div className="blog-card__series-badge">
          第 {post.seriesOrder} 篇
        </div>
      )}
      <div className="blog-card__meta">
        <span className="blog-card__date">{post.date}</span>
        <div className="blog-card__tags">
          {post.tags.map(tag => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <h3 className="blog-card__title">{post.title}</h3>
      <p className="blog-card__desc">{post.description}</p>
      <Link to={`/blog/${post.slug}`} className="blog-card__more">閱讀更多 →</Link>
    </div>
  );
}
