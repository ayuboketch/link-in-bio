import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} — Ayub Oketch`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto">
        {/* Navigation Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link
            href="/"
            className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <Link
            href="/blog"
            className="hover:text-indigo-400 transition-colors font-medium"
          >
            Blog
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300 truncate max-w-[200px] sm:max-w-xs">
            {post.slug}
          </span>
        </nav>

        {/* Article Header */}
        <header className="mb-8 pb-8 border-b border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-xs sm:text-sm text-slate-400">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-5 text-base sm:text-lg">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-xl font-bold text-slate-100 mt-8 mb-3"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              const listItems = paragraph.split("\n");
              return (
                <ul key={idx} className="list-disc list-inside space-y-2 my-4 pl-2 text-slate-300">
                  {listItems.map((item, i) => (
                    <li key={i} className="leading-snug">
                      {item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Author Footer Card */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
              Written by
            </p>
            <h4 className="text-lg font-bold text-slate-100">Ayub Oketch</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Frontend Engineer learning & building Next.js apps in public.
            </p>
          </div>
          <Link
            href="/"
            className="shrink-0 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700/60 transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
    </main>
  );
}