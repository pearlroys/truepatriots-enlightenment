"use client";

import { useEffect, useState } from "react";

export default function BlogsPage() {

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@roysugbobuaku"
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.items.slice(0, 3));
      });
  }, []);

  return (
    <main id="blogs" className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">

      {/* HEADER */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Blogs
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          Our thoughts on patriotism, leadership and civic responsibility.
        </p>
      </header>

      {/* BLOG GRID */}
      <section className="grid md:grid-cols-3 gap-8">

        {/* FEATURED ARTICLE */}
        {posts[0] && (
          <a
            href={posts[0].link}
            target="_blank"
            className="md:col-span-2 bg-white border rounded-xl p-8 hover:shadow-lg transition block"
          >

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {posts[0].title}
            </h2>

            <p className="text-gray-500 text-sm mb-4">
              {new Date(posts[0].pubDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {posts[0].description
                .replace(/<[^>]*>/g, "")
                .replace(/\s+/g, " ")
                .slice(0, 180)}...
            </p>

            <span className="text-[#2fa4a9] font-medium">
              Read on Medium →
            </span>

          </a>
        )}

        {/* SMALLER ARTICLES */}
        <div className="space-y-6">

          {posts.slice(1).map((post, index) => {

            const cleanText = post.description
              .replace(/<[^>]*>/g, "")
              .replace(/\s+/g, " ")
              .slice(0, 90);

            return (
              <a
                key={index}
                href={post.link}
                target="_blank"
                className="bg-white border rounded-xl p-5 hover:shadow-lg transition block"
              >

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm mb-2">
                  {new Date(post.pubDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric"
                  })}
                </p>

                <p className="text-gray-600 text-sm">
                  {cleanText}...
                </p>

              </a>
            );
          })}

        </div>

      </section>

    </main>
  );
}