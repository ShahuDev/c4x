export interface BlogPost {
  /** URL-friendly identifier, used in the /blog/:slug route. Must be unique. */
  slug: string;
  title: string;
  /** Short 1-2 sentence summary shown on the blog list card. */
  excerpt: string;
  /** Path under assets/images/blog/, or a full URL. */
  coverImage: string;
  author: string;
  /** ISO date string, e.g. '2026-07-20'. */
  date: string;
  tags: string[];
  /**
   * Full article body. Each string in the array renders as one paragraph.
   * Keep it plain text/simple HTML-safe strings — no need for a markdown
   * pipeline for a handful of posts.
   */
  content: string[];
}
