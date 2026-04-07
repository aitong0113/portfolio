export async function fetchPostsIndex() {
  const base = import.meta.env.BASE_URL || "/";
  const response = await fetch(`${base}posts/postsIndex.json`);

  if (!response.ok) {
    throw new Error("Failed to load posts index");
  }

  const posts = await response.json();
  return Array.isArray(posts) ? posts : [];
}