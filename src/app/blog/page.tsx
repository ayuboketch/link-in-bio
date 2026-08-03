import Link from "next/link";
import type { Metadata } from "next";
import { getPosts } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Blog — Ayub Oketch",
  description: "Notes on frontend engineering, Next.js, and building in public.",
};

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Radial background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto">
        <nav className="mb-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5"
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
            Back to Profile
          </Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight">
            Blog & Learning Notes
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Thoughts, tutorials, and progress updates as I learn Next.js and build in public.
          </p>
        </header>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/80 transition-all duration-200 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                  {post.title}
                </Link>
              </h2>

              <p className="text-slate-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 inline-flex items-center gap-1"
                >
                  Read Post
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
