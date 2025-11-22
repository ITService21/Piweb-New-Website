import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import Navbar from "../Components/Navbar";
import AnimatedTechBackground from "../Components/AnimatedTechBackground";
import demoPosts from "../Data/EnhancedBlog";

export default function BlogPage({ initialPosts = null }) {
    const posts = initialPosts || demoPosts;

    // SEO Meta Tags
    useEffect(() => {
        document.title = "Blog - Piweb Tech | Insights & Resources on Software Development";
        
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', 'Stay updated with the latest insights on web development, AI & ML, cloud solutions, cybersecurity, and software development. Expert articles, guides, and best practices from Piweb Tech.');
        
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', 'software development blog, web development, AI machine learning, cloud solutions, cybersecurity, digital transformation, tech insights');
    }, []);

    // UI state
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeTag, setActiveTag] = useState("");
    const [visibleCount, setVisibleCount] = useState(6); // load more step
    const [selectedPost, setSelectedPost] = useState(null);

    // debounce query
    useEffect(() => {
        const t = setTimeout(() => setDebouncedQuery(query.trim().toLowerCase()), 300);
        return () => clearTimeout(t);
    }, [query]);

    // derive categories and tags
    const categories = useMemo(() => {
        const s = new Set(posts.map((p) => p.category).filter(Boolean));
        return ["All", ...Array.from(s)];
    }, [posts]);

    const tags = useMemo(() => {
        const s = new Set();
        posts.forEach((p) => (p.tags || []).forEach((t) => s.add(t)));
        return Array.from(s).sort();
    }, [posts]);

    // filtered posts
    const filtered = useMemo(() => {
        let arr = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
        if (activeCategory !== "All") arr = arr.filter((p) => p.category === activeCategory);
        if (activeTag) arr = arr.filter((p) => (p.tags || []).includes(activeTag));
        if (debouncedQuery) {
            arr = arr.filter(
                (p) =>
                    p.title.toLowerCase().includes(debouncedQuery) ||
                    (p.excerpt || "").toLowerCase().includes(debouncedQuery) ||
                    (p.author || "").toLowerCase().includes(debouncedQuery)
            );
        }
        return arr;
    }, [posts, activeCategory, activeTag, debouncedQuery]);

    // featured post is first post or latest in filtered list
    const featured = filtered[0] || posts[0];
    const gridPosts = filtered.slice(1, visibleCount); // exclude featured from grid

    // reset visibleCount when filters change
    useEffect(() => {
        setVisibleCount(6);
    }, [activeCategory, activeTag, debouncedQuery]);

    // modal/reader focus
    const closeRef = useRef(null);
    const postsRef = useRef(null);
    
    useEffect(() => {
        if (selectedPost) setTimeout(() => closeRef.current?.focus(), 50);
    }, [selectedPost]);

    // Scroll to results only when user explicitly searches
    const scrollToResults = () => {
        if (postsRef.current) {
            postsRef.current.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    };

    // helper format
    const formatDate = (d) => {
        try {
            return new Date(d).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
        } catch {
            return d;
        }
    };

    // animations
    // const cardAnim = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <Navbar />
            
            {/* Hero Section with Animated Background */}
            <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
                <AnimatedTechBackground variant="dark" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1 
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                                Insights &
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Resources
                            </span>
                        </motion.h1>
                        <motion.p 
                            className="text-xl sm:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Comprehensive articles, guides, and best practices on <span className="text-red-300 font-bold">software development</span>, 
                            {" "}<span className="text-pink-300 font-bold">web technologies</span>, and 
                            {" "}<span className="text-purple-300 font-bold">digital innovation</span> from Piweb Tech.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                {/* Header */}
                <motion.header 
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                >

                    {/* Search Bar */}
                    <motion.div 
                        className="mt-12 flex justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="w-full md:w-1/2">
                            <label className="relative block">
                                <span className="sr-only">Search posts</span>
                                <motion.input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            scrollToResults();
                                        }
                                    }}
                                    placeholder="Search articles, authors, keywords..."
                                    className="w-full rounded-2xl border-2 border-gray-300 px-6 py-4 pr-12 text-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 shadow-lg"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.div 
                                    className="absolute right-4 top-0 bottom-0 flex items-center justify-center text-gray-400 text-xl cursor-pointer hover:text-red-500 transition-colors"
                                    animate={{ 
                                        scale: query ? [1, 1.2, 1] : 1,
                                        rotate: query ? [0, 10, -10, 0] : 0
                                    }}
                                    transition={{ duration: 0.5 }}
                                    onClick={scrollToResults}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    🔍
                                </motion.div>
                            </label>
                            
                            {/* Search Status Indicator */}
                            {query && (
                                <motion.div 
                                    className="mt-2 text-center"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <div className="flex items-center justify-center gap-3">
                                        {/* <span className="text-sm text-red-600 font-medium">
                                            🔍 Searching for &quot;{query}&quot;... {filtered.length} results found
                                        </span> */}
                                        {filtered.length > 0 && (
                                            <motion.button
                                                onClick={scrollToResults}
                                                className="text-xs px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full hover:from-red-600 hover:to-pink-600 transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                View Results ↓
                                            </motion.button>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Category Filters */}
                    <motion.div 
                        className="mt-8 flex items-center gap-3 flex-wrap justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {categories.map((c, index) => (
                            <motion.button
                                key={c}
                                onClick={() => {
                                    setActiveCategory(c);
                                    setActiveTag("");
                                }}
                                className={`text-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    activeCategory === c 
                                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg" 
                                        : "bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300 hover:shadow-md"
                                }`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {c}
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.header>

                {/* Featured */}
                {featured && (
                    <section className="relative mb-16 overflow-hidden">
                        <AnimatedTechBackground variant="light" />
                        <div className="relative z-10">
                    <motion.article 
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div 
                            className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group relative"
                            initial={{ opacity: 0, x: -120, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.03, y: -12 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-3xl"
                                transition={{ duration: 0.3 }}
                            />
                            <div className="relative z-10">
                            <div className="relative overflow-hidden">
                                <img src={featured.image} alt={featured.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                                        Featured
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-between gap-4 mb-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 text-sm font-semibold rounded-full">
                                        {featured.category}
                                    </span>
                                    <div className="text-sm text-gray-500">{formatDate(featured.date)} • {featured.author}</div>
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{featured.title}</h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">{featured.excerpt}</p>

                                <div className="flex items-center justify-between">
                                    <motion.button
                                        onClick={() => setSelectedPost(featured)}
                                        className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Read Full Article
                                    </motion.button>

                                    <div className="flex gap-2">
                                        {(featured.tags || []).slice(0, 3).map((t) => (
                                            <span key={t} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                                                #{t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            </div>
                        </motion.div>

                        <motion.aside 
                            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 flex flex-col relative"
                            initial={{ opacity: 0, x: 120, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.02, y: -8 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 hover:opacity-100 rounded-3xl"
                                transition={{ duration: 0.3 }}
                            />
                            <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h3>
                            <ul className="space-y-4">
                                {posts.slice(0, 4).map((p, index) => (
                                    <motion.li 
                                        key={p.id} 
                                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                                        onClick={() => setSelectedPost(p)}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <img src={p.image} alt={p.title} className="w-20 h-16 object-cover rounded-xl flex-shrink-0" />
                                        <div className="flex-1">
                                            <h4 className="text-sm font-semibold text-gray-900 hover:text-red-600 transition-colors line-clamp-2">
                                                {p.title}
                                            </h4>
                                            <div className="text-xs text-gray-500 mt-1">{formatDate(p.date)}</div>
                                            <div className="text-xs text-red-600 font-medium mt-1">{p.category}</div>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                            </div>
                        </motion.aside>
                    </motion.article>
                        </div>
                    </section>
                )}

                {/* tags filter */}
                <motion.div 
                    className="mb-12 flex items-center gap-3 flex-wrap justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.button
                        onClick={() => setActiveTag("")}
                        className={`text-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                            activeTag === "" 
                                ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg" 
                                : "bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300 hover:shadow-md"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        All Tags
                    </motion.button>
                    {tags.map((t, index) => (
                        <motion.button
                            key={t}
                            onClick={() => setActiveTag((s) => (s === t ? "" : t))}
                            className={`text-sm px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeTag === t 
                                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg" 
                                    : "bg-white text-gray-700 border-2 border-gray-300 hover:border-red-300 hover:shadow-md"
                            }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            #{t}
                        </motion.button>
                    ))}
                </motion.div>

                {/* posts grid */}
                <section className="relative overflow-hidden">
                    <AnimatedTechBackground variant="light" />
                    <div className="relative z-10">
                <motion.section 
                    ref={postsRef} 
                    aria-labelledby="articles" 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {gridPosts.map((p, index) => (
                        <motion.article
                            key={p.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group cursor-pointer relative"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.08, y: -12, rotate: index % 2 === 0 ? 1 : -1 }}
                            onClick={() => setSelectedPost(p)}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-3xl"
                                transition={{ duration: 0.3 }}
                            />
                            <div className="relative z-10">
                            <div className="relative overflow-hidden">
                                <img src={p.image} alt={p.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                        {p.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                    <div className="font-medium">{p.author}</div>
                                    <div>{formatDate(p.date)}</div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                                    {p.title}
                                </h4>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {p.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 flex-wrap">
                                        {(p.tags || []).slice(0, 2).map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                                                #{t}
                                            </span>
                                        ))}
                                    </div>

                                    <motion.button 
                                        className="text-sm text-red-600 font-semibold hover:text-red-700 transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        Read More →
                                    </motion.button>
                                </div>
                            </div>
                            </div>
                        </motion.article>
                    ))}

                    {filtered.length <= 1 && (
                        <motion.div 
                            className="col-span-full text-center py-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
                </motion.section>
                    </div>
                </section>

                {/* load more */}
                {filtered.length > gridPosts.length + 1 && (
                    <motion.div 
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.button
                            onClick={() => setVisibleCount((c) => c + 6)}
                            className="px-10 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Load More Articles
                        </motion.button>
                    </motion.div>
                )}

                
            </div>

            {/* Article modal / reader */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedPost(null)} />

                        <motion.div
                            className="relative z-10 max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-auto max-h-[90vh] border border-gray-100"
                            initial={{ y: 50, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                        >
                            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl z-20">
                                <div className="flex items-center gap-4">
                                    <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                                        {selectedPost.category}
                                    </span>
                                    <h2 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
                                </div>
                                <motion.button
                                    onClick={() => setSelectedPost(null)}
                                    aria-label="Close"
                                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    ref={closeRef}
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>
                            </div>

                            <div className="p-8">
                                {selectedPost.image && (
                                    <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-80 object-cover rounded-2xl mb-8 shadow-lg" />
                                )}

                                <div className="flex items-center gap-6 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">Author:</span>
                                        <span>{selectedPost.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">Date:</span>
                                        <span>{formatDate(selectedPost.date)}</span>
                                    </div>
                                </div>

                                <div className="prose max-w-none">
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{selectedPost.excerpt}</p>
                                    <div className="text-gray-800 leading-relaxed space-y-4">
                                        {selectedPost.body.split('\n').map((paragraph, index) => (
                                            <p key={index} className="text-base leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                                    <div className="flex gap-3 flex-wrap">
                                        {(selectedPost.tags || []).map((t) => (
                                            <span key={t} className="px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-sm font-medium">
                                                #{t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// PropTypes
BlogPage.propTypes = {
    initialPosts: PropTypes.array,
};