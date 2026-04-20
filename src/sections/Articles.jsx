import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiSubstack } from "react-icons/si";

export default function Articles() {
  const FEED_URL = "https://tejasssuthrave.substack.com/feed";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSummaryFromHtml = (html = "") => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const plainText = (tempDiv.textContent || tempDiv.innerText || "")
      .replace(/\s+/g, " ")
      .trim();

    const sentences = plainText.match(/[^.!?]+[.!?]+/g) || [plainText];
    let refinedSummary = sentences.slice(0, 2).join(" ");

    if (refinedSummary.length < 50 && plainText.length > 50) {
      refinedSummary = `${plainText.substring(0, 120)}...`;
    }

    return {
      summary: refinedSummary,
      firstImage:
        tempDiv.querySelector("img")?.src ||
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    };
  };

  const formatArticles = (items = []) => {
    return items
      .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
      .slice(0, 3)
      .map((item) => {
        const { summary, firstImage } = getSummaryFromHtml(
          item.content || item.description || ""
        );

        return {
          title: item.title,
          summary,
          date: new Date(item.pubDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          readTime: "5 min read",
          link: item.link,
          image:
            item.thumbnail ||
            item.enclosure?.link ||
            firstImage ||
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        };
      });
  };

  const fetchViaRss2Json = async () => {
    const cacheBustedFeed = `${FEED_URL}?v=${Date.now()}`;
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(cacheBustedFeed)}&count=10`
    );
    const data = await response.json();

    if (data.status !== "ok" || !Array.isArray(data.items)) {
      throw new Error("rss2json fetch failed");
    }

    return data.items;
  };

  const fetchViaAllOrigins = async () => {
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
      FEED_URL
    )}&v=${Date.now()}`;
    const response = await fetch(proxyUrl);
    if (!response.ok) {
      throw new Error("AllOrigins fetch failed");
    }

    const xmlText = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "application/xml");
    const items = Array.from(xml.querySelectorAll("item"));

    return items.map((item) => ({
      title: item.querySelector("title")?.textContent || "Untitled",
      link: item.querySelector("link")?.textContent || "https://tejasssuthrave.substack.com/",
      pubDate: item.querySelector("pubDate")?.textContent || new Date().toISOString(),
      content:
        item.querySelector("content\\:encoded")?.textContent ||
        item.querySelector("description")?.textContent ||
        "",
      description: item.querySelector("description")?.textContent || "",
      thumbnail: "",
    }));
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const rssItems = await fetchViaRss2Json().catch(() => null);
        const fallbackItems = rssItems ? null : await fetchViaAllOrigins().catch(() => null);
        const items = rssItems || fallbackItems;

        if (!items || items.length === 0) {
          throw new Error("No feed items returned");
        }

        setArticles(formatArticles(items));
        setError(null);
      } catch (err) {
        console.error("Error fetching Substack articles:", err);
        setError("Could not load latest articles. Please check back later.");
        // Fallback to some default data if fetch fails
        setArticles([
          {
            title: "Demystifying Cloud Infrastructure",
            summary: "Explore the core components of modern cloud environments and how to build scalable systems. Learn to navigate the complexities of AWS and Linux administration with ease.",
            date: "Recent",
            readTime: "5 min read",
            link: "https://tejasssuthrave.substack.com/",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
          },
          {
            title: "The Future of AI Development",
            summary: "Discover how prompt engineering and machine learning are transforming the software development landscape. Stay ahead of the curve with insights into intelligent system design.",
            date: "Recent",
            readTime: "4 min read",
            link: "https://tejasssuthrave.substack.com/",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section
      id="articles"
      className="relative font-sans py-12 md:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-indigo-900/20 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 w-full z-10">
        <motion.div
          className="mb-10 md:mb-14 flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 w-fit">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-light)]">07</span>
            <span className="w-6 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical Writing
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg font-light">
            Insights on cloud, infrastructure, and AI development from my Substack.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <motion.a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[var(--accent)]/40 hover:bg-white/8 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Image Header */}
                <div className="w-full h-40 sm:h-48 overflow-hidden relative border-b border-white/5">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[50%] group-hover:grayscale-[20%]" 
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                      {article.date}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--accent-light)]">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-[var(--accent-light)] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 flex-grow">
                    {article.summary}
                  </p>

                  <div className="flex items-center gap-1 text-[var(--accent-light)] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More →
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {error && (
          <p className="mt-6 text-center text-xs md:text-sm text-amber-300/90">
            {error}
          </p>
        )}

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://tejasssuthrave.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300 text-sm"
          >
            View All Articles on Substack
          </a>
        </motion.div>
      </div>
    </section>
  );
}

