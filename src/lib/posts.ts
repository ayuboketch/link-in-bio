import { prisma } from "./prisma";

export async function getPosts() {
  return prisma.post.findMany({
    orderBy: {
      date: "desc",
    },
  });
}

export async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({
    where: {
      slug,
    },
  });
}