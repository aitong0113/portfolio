import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import TagFilter from "../components/TagFilter";
import Sidebar from "../components/Sidebar";
import { fetchPostsIndex } from "../utils/fetchPostsIndex";
import "./Blog.scss";


const allTags = [
  "React", "JavaScript", "Git", "Firebase", "Laravel"
];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [postsReady, setPostsReady] = useState(false);
  const [selectedTag, setSelectedTag] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let disposed = false;

    fetchPostsIndex()
      .then(data => {
        if (!disposed) {
          setPosts(data);
        }
      })
      .catch(() => {
        if (!disposed) {
          setPosts([]);
        }
      })
      .finally(() => {
        if (!disposed) {
          setPostsReady(true);
        }
      });

    return () => {
      disposed = true;
    };
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const matchesSearch = post => {
    if (!normalizedQuery) return true;

    const haystack = [
      post.title,
      post.description,
      ...(post.tags || []),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  };

  const filteredPosts = posts.filter(post => {
    const matchesTag = selectedTag === "全部" || post.tags.includes(selectedTag);
    return matchesTag && matchesSearch(post);
  });
  const filteredSeriesPosts = filteredPosts.filter(post => post.series === "InnerSoul 實戰系列");
  const filteredStandalonePosts = filteredPosts.filter(post => post.series !== "InnerSoul 實戰系列");

  const sidebarPosts = posts.filter(matchesSearch);
  const categoryNames = [...new Set(sidebarPosts.map(post => post.category || "其他"))];
  const seriesPosts = posts
    .filter(post => post.series === "InnerSoul 實戰系列")
    .sort((left, right) => (left.seriesOrder || 0) - (right.seriesOrder || 0));

  // 推薦文章範例（可依實際需求調整）
  const recommendedPosts = sidebarPosts.slice(0, 1);
  const categories = categoryNames.map(name => ({
    name,
    posts: sidebarPosts.filter(post => (post.category || "其他") === name),
  }));

  return (
    <section className="blog">
      <div className="blog__main">
        <p className="blog__label">ARTICLES & NOTES</p>
        <h2 className="blog__title">
          技術文章<span className="blog__title--em">｜學習筆記</span>
        </h2>
        <p className="blog__subtitle">記錄前端專案中的資料流設計與實作思考</p>
        <TagFilter
          tags={["全部", ...allTags]}
          selected={selectedTag}
          onSelect={setSelectedTag}
        />
        <div className="blog__list">
          {!postsReady ? (
            <p className="blog__empty">文章載入中...</p>
          ) : filteredPosts.length > 0 ? (
            <>
              {filteredSeriesPosts.length > 0 && (
                <section className="blog__section-block">
                  <div className="blog__section-head">
                    <p className="blog__section-kicker">Featured Series</p>
                    <h3 className="blog__section-title">InnerSoul 實戰系列</h3>
                    <p className="blog__section-desc">依照實作脈絡閱讀這 4 篇文章，會更清楚看到我如何從資料流一路整理到 UI 狀態與會員權限。</p>
                  </div>
                  <div className="blog__series-timeline">
                    {seriesPosts.map(post => (
                      <span className="blog__series-timeline-item" key={post.slug}>
                        {String(post.seriesOrder).padStart(2, "0")}. {post.title.replace("InnerSoul 實戰｜", "")}
                      </span>
                    ))}
                  </div>
                  <div className="blog__section-list">
                    {filteredSeriesPosts.map(post => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                </section>
              )}
              {filteredStandalonePosts.length > 0 && (
                <section className="blog__section-block">
                  <div className="blog__section-head">
                    <p className="blog__section-kicker">Notes</p>
                    <h3 className="blog__section-title">其他文章</h3>
                  </div>
                  <div className="blog__section-list">
                    {filteredStandalonePosts.map(post => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            <p className="blog__empty">找不到符合的文章，試試其他標籤或關鍵字。</p>
          )}
        </div>
      </div>
      <Sidebar
        posts={sidebarPosts}
        allTags={allTags}
        recommendedPosts={recommendedPosts}
        categories={categories}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </section>
  );
}

