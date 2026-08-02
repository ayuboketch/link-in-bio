export interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello World: Building My Link-in-Bio in Public",
    date: "2026-08-01",
    readTime: "2 min read",
    excerpt: "Welcome to my tech corner! Here is why I decided to build my personal link-in-bio app using Next.js 16, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "Learning", "WebDev"],
    content: `Welcome to my first blog post!

I decided to build my own personal link-in-bio app from scratch using Next.js 16 App Router, TypeScript, and Tailwind CSS. 

### Why build it myself?
While tools like Linktree exist, building a custom platform allows me to:
- **Learn Next.js 16 App Router**: Deep dive into server components, dynamic routes with \`[slug]\`, and modern performance patterns.
- **Full Customization**: Tailor the aesthetic, dark glassmorphism styling, and micro-interactions exactly how I want.
- **Showcase My Work**: Give hiring managers and fellow developers a direct look into my code quality and UI design skills.

Stay tuned for more updates as I refine this project!`,
  },
  {
    slug: "learning-in-public",
    title: "Why Learning in Public Accelerated My Developer Career",
    date: "2026-08-01",
    readTime: "3 min read",
    excerpt: "Sharing progress, small wins, and learning notes on LinkedIn keeps me accountable and connects me with an incredible developer community.",
    tags: ["Career", "Public Build", "React"],
    content: `Learning in public can feel intimidating at first. You might think: *"What if I make a mistake?"* or *"Is this basic knowledge worth sharing?"*

Here is what I have learned after committing to public building:

### 1. Proof of Work Over Resume Keywords
When you document your projects, post code snippets, and explain how you solved routing bugs in Next.js, people don't have to guess your skill level—they can see it in real-time.

### 2. High Quality Accountability
Posting updates on LinkedIn forces you to write cleaner code, write better documentation, and finish what you start.

### 3. Community Connections
Other developers step in to share tips, give constructive feedback, and point out modern web features you might have missed.

If you are thinking about sharing your tech journey, start today!`,
  },
];
