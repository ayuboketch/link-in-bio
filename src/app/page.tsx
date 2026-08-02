"use client";

import { useState } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";

interface LinkItem {
  id: string;
  label: string;
  subtext: string;
  url: string;
  icon: string;
  badge?: string;
  highlight?: boolean;
}

const mainLinks: LinkItem[] = [
  {
    id: "github",
    label: "GitHub Profile",
    subtext: "Explore open-source repos & code samples",
    url: "https://github.com/ayuboketch",
    icon: "github",
    badge: "15+ Repos",
  },
  {
    id: "linkedin",
    label: "LinkedIn Network",
    subtext: "Connect, collaborate & follow my developer journey",
    url: "https://linkedin.com/in/ayuboketch",
    icon: "linkedin",
    highlight: true,
  },
  {
    id: "email",
    label: "Get in Touch",
    subtext: "ayuboketch84@gmail.com",
    url: "mailto:ayuboketch84@gmail.com",
    icon: "email",
  },
];

const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "App Router",
  "Git",
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-900/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-lg mx-auto py-8">
        {/* Top Floating Badge & Share Actions */}
        <div className="flex items-center justify-between gap-2 mb-8 px-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Opportunities
          </div>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium backdrop-blur-md transition-all active:scale-95"
            title="Copy profile link"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </>
            )}
          </button>
        </div>

        {/* Profile Section */}
        <div className="text-center flex flex-col items-center">
          {/* Avatar with Gradient Border */}
          <div className="relative group mb-5">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-28 h-28 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center overflow-hidden shadow-2xl">
              <span className="text-3xl font-extrabold bg-gradient-to-br from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                AO
              </span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-50">
              Ayub Oketch
            </h1>
            <svg
              className="w-5 h-5 text-indigo-400 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <p className="text-slate-300 font-medium text-sm sm:text-base max-w-sm mb-3">
            Frontend Engineer & UI Developer learning Next.js App Router in public.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8 max-w-md">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-900/90 text-slate-300 border border-slate-800/80 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links Container */}
        <div className="flex flex-col gap-3.5 mb-10">
          {mainLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 rounded-2xl border transition-all duration-200 backdrop-blur-xl flex items-center justify-between ${
                link.highlight
                  ? "bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900/60 border-indigo-500/40 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10"
                  : "bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80"
              } hover:-translate-y-0.5`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    link.highlight
                      ? "bg-indigo-600/20 border-indigo-500/30 text-indigo-300"
                      : "bg-slate-800/60 border-slate-700/50 text-slate-300"
                  }`}
                >
                  {link.icon === "github" && (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  )}
                  {link.icon === "linkedin" && (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {link.icon === "email" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-100 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                    {link.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {link.subtext}
                  </p>
                </div>
              </div>

              <svg
                className="w-5 h-5 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1 transition-all shrink-0 ml-2"
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
            </a>
          ))}
        </div>

        {/* Featured Blog Posts Section */}
        <div className="rounded-2xl p-5 bg-slate-900/40 border border-slate-800/80 backdrop-blur-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Latest Blog Posts
            </h2>
            <Link
              href="/blog"
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              View all ({posts.length}) →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {posts.slice(0, 2).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-indigo-500/40 transition-all block"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>{post.date}</span>
                  <span className="text-indigo-400 font-medium">{post.readTime}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ayub Oketch. Built with Next.js 16 & Tailwind CSS.</p>
        </footer>
      </div>
    </main>
  );
}