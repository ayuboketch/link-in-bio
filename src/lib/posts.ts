import { prisma } from "./prisma";
import { posts as fallbackPosts } from "../data/posts";

export type PostRecord = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
};

function normalizePost(post: {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
}): PostRecord {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    readTime: post.readTime,
    excerpt: post.excerpt,
    content: post.content,
    tags: post.tags,
  };
}

async function ensurePostsSeeded() {
  const existing = await prisma.post.count();

  if (existing > 0) {
    return;
  }

  await prisma.post.createMany({
    data: fallbackPosts.map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      readTime: post.readTime,
      excerpt: post.excerpt,
      content: post.content,
      tags: post.tags,
    })),
  });
}

export async function getPosts(): Promise<PostRecord[]> {
  try {
    await ensurePostsSeeded();
    const posts = await prisma.post.findMany({
      orderBy: { date: "desc" },
    });

    return posts.map(normalizePost);
  } catch (error) {
    console.warn("Falling back to local post data:", error);
    return fallbackPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<PostRecord | null> {
  try {
    await ensurePostsSeeded();
    const post = await prisma.post.findUnique({
      where: { slug },
    });

    return post ? normalizePost(post) : null;
  } catch (error) {
    console.warn(`Falling back to local post data for slug ${slug}:`, error);
    return fallbackPosts.find((item) => item.slug === slug) ?? null;
  }
}
