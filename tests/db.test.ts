import assert from "node:assert/strict";
import { test } from "node:test";
import "dotenv/config";

import { prisma } from "../src/lib/prisma";
import { getPostBySlug, getPosts } from "../src/lib/posts";
import { posts as fallbackPosts } from "../src/data/posts";

test("environment has a database URL configured", () => {
  assert.ok(process.env.DATABASE_URL, "DATABASE_URL should be set in the environment");
});

test("Prisma client can connect to the configured database", async () => {
  await prisma.$connect();

  try {
    const result = await prisma.$queryRaw<{ one: number }[]>`SELECT 1 AS one`;
    assert.ok(Array.isArray(result));
    assert.equal(result[0]?.one, 1);
  } finally {
    await prisma.$disconnect();
  }
});

test("posts service returns data with the expected shape", async () => {
  const posts = await getPosts();

  assert.ok(posts.length > 0, "Expected at least one post");
  assert.ok(posts[0].slug);
  assert.ok(posts[0].title);
  assert.ok(posts[0].content);
});

test("getPostBySlug resolves a known blog post", async () => {
  const post = await getPostBySlug("hello-world");

  assert.ok(post, "Expected to find the hello-world post");
  assert.equal(post?.slug, "hello-world");
  assert.equal(post?.title, fallbackPosts[0].title);
});

test("getPostBySlug returns null for an unknown slug", async () => {
  const post = await getPostBySlug("does-not-exist");

  assert.equal(post, null);
});
