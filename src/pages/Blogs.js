import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "مستقبل الذكاء الاصطناعي في التطوير",
      excerpt: "استكشاف كيفية تأثير الذكاء الاصطناعي على مجال تطوير البرمجيات والتقنيات الناشئة",
      category: "AI",
      date: "2024-01-15",
      readTime: "5 دقائق",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["الذكاء الاصطناعي", "تطوير", "تقنية"]
    },
    {
      id: 2,
      title: "أمان البيانات في العصر الرقمي",
      excerpt: "دليل شامل لحماية البيانات والأمان السيبراني في بيئة العمل الحديثة",
      category: "Security",
      date: "2024-01-10",
      readTime: "8 دقائق",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      tags: ["أمان", "بيانات", "حماية"]
    },
    {
      id: 3,
      title: "تطوير تطبيقات React الحديثة",
      excerpt: "أفضل الممارسات والتقنيات الحديثة في تطوير تطبيقات React للمطورين",
      category: "Development",
      date: "2024-01-05",
      readTime: "12 دقيقة",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      tags: ["React", "JavaScript", "تطوير"]
    },
    {
      id: 4,
      title: "إنترنت الأشياء والمنازل الذكية",
      excerpt: "كيفية بناء نظام منزل ذكي باستخدام تقنيات إنترنت الأشياء الحديثة",
      category: "IoT",
      date: "2023-12-28",
      readTime: "10 دقائق",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      tags: ["IoT", "منازل ذكية", "تقنية"]
    },
    {
      id: 5,
      title: "الحوسبة السحابية مع Azure",
      excerpt: "دليل المبتدئين لاستخدام Microsoft Azure في مشاريع الحوسبة السحابية",
      category: "Cloud",
      date: "2023-12-20",
      readTime: "15 دقيقة",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      tags: ["Azure", "سحابة", "Microsoft"]
    },
    {
      id: 6,
      title: "أساسيات الشبكات والـ CCNA",
      excerpt: "مقدمة شاملة لأساسيات الشبكات وشهادة CCNA من Cisco",
      category: "Networking",
      date: "2023-12-15",
      readTime: "20 دقيقة",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
      tags: ["شبكات", "CCNA", "Cisco"]
    }
  ];

  const categories = [
    { id: 'all', name: ' All blogs', icon: '📚' },
    { id: 'AI', name: 'Artifical intellegence', icon: '🤖' },
    { id: 'Security', name: 'Cyber security', icon: '🔒' },
    { id: 'Development', name: 'Development', icon: '💻' },
    { id: 'IoT', name: 'Internet of things', icon: '🌐' },
    { id: 'Cloud', name: 'Cloud Computing', icon: '☁️' },
    { id: 'Networking', name: 'Networking', icon: '🔗' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="blogs-loading">
        <div className="loading-spinner"></div>
        <p>Blogs Loading...</p>
      </div>
    );
  }

  return (
    <div className="blogs-container">
      {/* Animated Background */}
      <div className="blogs-background">
        <div className="tech-particles"></div>
        <div className="code-rain"></div>
      </div>

      {/* Header */}
      <header className="blogs-header">
        <Link to="/" className="back-button">
          <span>←</span>  Back to Home
        </Link>
        <div className="header-content">
          <h1 className="blogs-title">
            <span className="title-icon">📝</span>
             Technology Blogs
          </h1>
          <p className="blogs-subtitle">
            Articles,  Shares About The Newst Technologies and Developments    
          </p>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="blogs-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search in Blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="categories-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="blogs-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="card-image">
                <img src={post.image} alt={post.title} />
                <div className="card-overlay">
                  <span className="read-time">{post.readTime}</span>
                </div>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-category">{post.category}</span>
                </div>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-excerpt">{post.excerpt}</p>
                <div className="card-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
                <button className="read-more-btn">
                   Read more..
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </article>
          ))
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>There's no matched blogs</h3>
            <p>Try searching by using different words or categories</p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Subscribe to Technology News!</h2>
          <p>Get the newst blogs and updates direct to your E-mail</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

