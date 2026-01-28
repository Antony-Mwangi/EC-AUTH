"use client";

import Link from "next/link";

export default function HomePage() {
  const categories = [
    { name: "Self Help", slug: "selfhelp" },
    { name: "Fiction", slug: "fiction" },
    { name: "Religious", slug: "religious" },
    { name: "Kids", slug: "kids" },
  ];

  const featuredBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: "KSh 1,200",
      category: "Self Help",
      img: "/books/atomic.jpg",
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: "KSh 950",
      category: "Fiction",
      img: "/books/alchemist.jpg",
    },
    {
      id: 3,
      title: "Purpose Driven Life",
      author: "Rick Warren",
      price: "KSh 1,100",
      category: "Religious",
      img: "/books/purpose.jpg",
    },
    {
      id: 4,
      title: "Diary of a Wimpy Kid",
      author: "Jeff Kinney",
      price: "KSh 850",
      category: "Kids",
      img: "/books/wimpy.jpg",
    },
  ];

  return (
    <main>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f5f6f8;
          color: #1f2933;
        }

        /* HEADER */
        header {
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
          color: #2563eb;
          text-decoration: none;
        }

        nav a {
          margin-left: 20px;
          text-decoration: none;
          color: #374151;
          font-weight: 500;
        }

        /* HERO */
        .hero {
          background: #ffffff;
          padding: 50px 30px;
          text-align: center;
        }

        .hero h1 {
          font-size: 34px;
          margin-bottom: 10px;
        }

        .hero p {
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
        }

        /* CATEGORIES */
        .categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          padding: 40px 30px;
        }

        .category-card {
          background: #ffffff;
          padding: 30px;
          text-align: center;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          transition: 0.2s ease;
        }

        .category-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }

        .category-card h3 {
          margin-bottom: 10px;
        }

        .category-card a {
          text-decoration: none;
          color: #2563eb;
          font-weight: bold;
        }

        /* BOOKS */
        .section {
          padding: 40px 30px;
        }

        .section h2 {
          margin-bottom: 20px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .book-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 12px;
          display: flex;
          flex-direction: column;
        }

        .book-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .book-card h4 {
          font-size: 15px;
          margin: 5px 0;
        }

        .book-card p {
          font-size: 13px;
          color: #6b7280;
        }

        .price {
          font-weight: bold;
          margin: 8px 0;
          color: #16a34a;
        }

        .actions {
          margin-top: auto;
          display: flex;
          gap: 10px;
        }

        .actions button {
          flex: 1;
          padding: 8px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }

        .add-cart {
          background: #2563eb;
          color: #fff;
        }

        .view {
          background: #e5e7eb;
        }

        footer {
          background: #111827;
          color: #d1d5db;
          padding: 30px;
          text-align: center;
          margin-top: 40px;
        }
      `}</style>

      {/* HEADER */}
      <header>
        <Link href="/" className="logo">BookStore</Link>
        <nav>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Discover Books for Every Mind</h1>
        <p>
          Explore hand-picked books across self-help, fiction, religious and kids
          categories — delivered across Kenya.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        {categories.map(cat => (
          <div className="category-card" key={cat.slug}>
            <h3>{cat.name}</h3>
            <Link href={`/category/${cat.slug}`}>
              Browse {cat.name}
            </Link>
          </div>
        ))}
      </section>

      {/* FEATURED BOOKS */}
      <section className="section">
        <h2>Featured Books</h2>

        <div className="grid">
          {featuredBooks.map(book => (
            <div className="book-card" key={book.id}>
              <image src={book.img} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <p>{book.category}</p>
              <div className="price">{book.price}</div>

              <div className="actions">
                <button className="add-cart">Add to Cart</button>
                <button className="view">View</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} BookStore Kenya. All rights reserved.
      </footer>
    </main>
  );
}
