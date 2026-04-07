import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({
  posts,
  allTags,
  recommendedPosts = [],
  categories = [],
  searchQuery = "",
  onSearchChange,
}) {
  const [openCategory, setOpenCategory] = useState(null);
  const latest = posts.slice(0, 3);


  return (
    <aside className="blog__sidebar">
      {/* 快速搜尋欄 */}
      <div className="sidebar__section">
        <input
          type="text"
          placeholder="搜尋文章或標籤..."
          value={searchQuery}
          onChange={e => onSearchChange?.(e.target.value)}
          style={{ width: '100%', padding: 6, marginBottom: 12, borderRadius: 4, border: '1px solid #ccc' }}
        />
      </div>



      {/* 分類收合清單（Accordion） */}
      {categories.length > 0 && (
        <div className="sidebar__section">
          <h4>分類</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {categories.map((cat, idx) => (
              <li key={cat.name} style={{ textAlign: 'left' }}>
                <button
                  className="sidebar__accordion-btn"
                  aria-expanded={openCategory === idx}
                  onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
                >
                  <span>{cat.name}</span>
                  <span className="sidebar__accordion-arrow" data-open={openCategory === idx}>
                    {openCategory === idx ? "+" : "-"}
                  </span>
                </button>
                {openCategory === idx && cat.posts && (
                  <ul className="sidebar__post-list sidebar__post-list--nested">
                    {cat.posts.map(post => (
                      <li key={post.slug}>
                        <Link to={`/blog/${post.slug}`} className="sidebar__post-link">{post.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 精選標籤 */}
      <div className="sidebar__section">
        <h4>精選標籤</h4>
        <div className="sidebar__tags">
          {allTags.map(tag => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      {/* 推薦的文章 */}
      {recommendedPosts.length > 0 && (
        <div className="sidebar__section">
          <h4>推薦的文章</h4>
          <ul className="sidebar__post-list">
            {recommendedPosts.map(post => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="sidebar__post-link">{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      
      {/* 最新文章 */}
      <div className="sidebar__section">
        <h4>最新文章</h4>
        <ul className="sidebar__post-list">
          {latest.map(post => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="sidebar__post-link">{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__section">
        <h4>關於這個部落格</h4>
        <div className="sidebar__section sidebar__tip">
          <p>開發設計都是學習歷程，不求完美，只求誠實面對每個「暫」原來如此的瞬間。</p>
        </div>
      </div>

    </aside>
  );
}