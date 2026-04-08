import "./Blog.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import Sidebar from "../components/Sidebar";
import { fetchPostsIndex } from "../utils/fetchPostsIndex";

function Post() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}content/${slug}.md`)
      .then(res => {
        if (!res.ok) {
          throw new Error("文章不存在或載入失敗");
        }
        return res.text();
      })
      .then(raw => {
        const parsed = fm(raw);
        let body = parsed.body;
        if (typeof body !== "string") {
          body = "[內容格式錯誤，請檢查 markdown frontmatter 或內容格式]";
        }
        setContent(body);
        setMeta(parsed.attributes || {});
      })
      .catch(() => {
        setContent("");
        setMeta({ title: "文章不存在", description: "找不到這篇文章，請確認網址是否正確。" });
      });
  }, [slug]);

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
      });

    return () => {
      disposed = true;
    };
  }, []);

  // sidebar 資料
  const allTags = ["React", "JavaScript", "Git", "Firebase", "Laravel"];
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

  const sidebarPosts = posts.filter(matchesSearch);
  const categoryNames = [...new Set(sidebarPosts.map(post => post.category || "其他"))];
  const recommendedPosts = sidebarPosts.slice(0, 1);
  const categories = categoryNames.map(name => ({
    name,
    posts: sidebarPosts.filter(post => (post.category || "其他") === name),
  }));
  const currentPost = posts.find(post => post.slug === slug);
  const seriesPosts = currentPost?.series
    ? posts
        .filter(post => post.series === currentPost.series)
        .sort((left, right) => (left.seriesOrder || 0) - (right.seriesOrder || 0))
    : [];
  const currentSeriesIndex = seriesPosts.findIndex(post => post.slug === slug);
  const previousPost = currentSeriesIndex > 0 ? seriesPosts[currentSeriesIndex - 1] : null;
  const nextPost = currentSeriesIndex >= 0 && currentSeriesIndex < seriesPosts.length - 1
    ? seriesPosts[currentSeriesIndex + 1]
    : null;
  const seriesProgress = seriesPosts.length > 0 && currentPost?.seriesOrder
    ? (currentPost.seriesOrder / seriesPosts.length) * 100
    : 0;

  return (
    <section className="blog">
      <div className="blog__main">
        <div className="post-back-wrapper">
          <button type="button" onClick={() => navigate(-1)}>← 返回</button>
        </div>
        <div className="post">
          {/* 文章 meta 區塊 */}
          {meta.title && (
            <div className="blog-card">
              <div className="blog-card__meta">
                {meta.date && (
                  <span className="blog-card__date">
                    {meta.date}
                  </span>
                )}
                {meta.tags && Array.isArray(meta.tags) && meta.tags.length > 0 && (
                  <span className="blog-card__tags">
                    {meta.tags.map(tag => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </span>
                )}
              </div>
              <h1 className="blog-card__title">{meta.title}</h1>
              {meta.description && (
                <div className="blog-card__desc">{meta.description}</div>
              )}
            </div>
          )}
          {currentPost?.series && seriesPosts.length > 0 && (
            <section className="post-series-intro">
              <p className="post-series-intro__eyebrow">{currentPost.series}</p>
              <h2 className="post-series-intro__title">第 {currentPost.seriesOrder} 篇 / 共 {seriesPosts.length} 篇</h2>
              <p className="post-series-intro__text">這組文章會依序整理播放器資料流、Diary 資料流、UI 狀態設計與會員權限整合，對應我在 InnerSoul 專案中逐步建立前端系統設計的過程。</p>
              <div className="post-series-intro__progress" aria-label="系列閱讀進度">
                <div className="post-series-intro__progress-track">
                  <div className="post-series-intro__progress-bar" style={{ width: `${seriesProgress}%` }} />
                </div>
                <span className="post-series-intro__progress-text">閱讀進度 {currentPost.seriesOrder} / {seriesPosts.length}</span>
              </div>
              <div className="post-series-intro__steps">
                {seriesPosts.map(post => (
                  <span
                    key={post.slug}
                    className={post.slug === slug ? "post-series-intro__step is-active" : "post-series-intro__step"}
                  >
                    {String(post.seriesOrder).padStart(2, "0")}. {post.title.replace("InnerSoul 實戰｜", "")}
                  </span>
                ))}
              </div>
            </section>
          )}
          {/* 防呆：content 必須是字串 */}
          {typeof content === "string" ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || "");
                  let codeString = "";
                  if (typeof children === "string") {
                    codeString = children;
                  } else if (Array.isArray(children)) {
                    codeString = children.join("");
                  } else if (children && typeof children === "object") {
                    codeString = String(children);
                  }
                  codeString = codeString.replace(/\n$/, "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={oneLight}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>{codeString}</code>
                  );
                }
              }}
            >
              {content}
            </ReactMarkdown>
          ) : (
            <div style={{color: 'red', fontWeight: 600}}>文章內容格式錯誤，請檢查 markdown 檔案！</div>
          )}
          {currentPost?.series && (previousPost || nextPost) && (
            <nav className="post-series-nav" aria-label="系列文章導覽">
              {previousPost ? (
                <Link className="post-series-nav__link" to={`/blog/${previousPost.slug}`}>
                  <span className="post-series-nav__label">上一篇</span>
                  <span className="post-series-nav__title">{previousPost.title}</span>
                </Link>
              ) : (
                <div className="post-series-nav__link is-empty" />
              )}
              {nextPost ? (
                <Link className="post-series-nav__link post-series-nav__link--next" to={`/blog/${nextPost.slug}`}>
                  <span className="post-series-nav__label">下一篇</span>
                  <span className="post-series-nav__title">{nextPost.title}</span>
                </Link>
              ) : (
                <div className="post-series-nav__link is-empty" />
              )}
            </nav>
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

export default Post;
