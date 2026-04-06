"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/typography";
import type { BlogPost } from "@/lib/blog";

interface BlogFilterProps {
  posts: BlogPost[];
  categories: string[];
}

export function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === "All"
              ? "bg-[var(--brand-primary)] text-white shadow-lg shadow-[var(--brand-primary)]/20"
              : "bg-[var(--surface-light)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:bg-[var(--surface-alt)] hover:text-[var(--text-primary)]"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-[var(--brand-primary)] text-white shadow-lg shadow-[var(--brand-primary)]/20"
                : "bg-[var(--surface-light)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:bg-[var(--surface-alt)] hover:text-[var(--text-primary)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card
              variant="elevated"
              className="group cursor-pointer h-full flex flex-col hover:border-[var(--brand-primary)]/30 transition-all"
            >
              {/* Category and Reading Time */}
              <div className="flex items-center justify-between mb-4">
                <Badge variant="primary">{post.category}</Badge>
                <span className="text-xs text-[var(--text-muted)]">
                  {post.readingTime} min read
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--brand-primary)] transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <Text variant="small" className="mb-4 line-clamp-3 flex-grow">
                {post.excerpt}
              </Text>

              {/* Footer: Date and Arrow */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border-color)]">
                <time className="text-xs text-[var(--text-muted)]">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <div className="flex items-center gap-1 text-[var(--brand-primary)] text-sm font-medium">
                  Read More
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <Text variant="large" className="text-[var(--text-muted)]">
            No posts found in this category.
          </Text>
        </div>
      )}
    </>
  );
}
