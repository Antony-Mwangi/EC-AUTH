"use client";

import Link from "next/link";

export default function HomePage() {
  const categories = [
    { name: "Self Help", slug: "selfhelp" },
    { name: "Fiction", slug: "fiction" },
    { name: "Religious", slug: "religious" },
    { name: "Kids", slug: "kids" },
  ];

  return (
    <main>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f5f6f8;
          color: #111827;
        }

        header {
          background: white;
          padding: 16px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e5e7eb;
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

        .hero {
          padding: 60px 30px;
          text-align: center;
          background: white;
        }

        .hero h1 {
          font-size: 34px;
          margin-bottom: 10px;
        }

        .hero p {
          color: #6b7280;
          max-width: 600px;
          margin: auto;
        }

        .categories {
          padding: 40px 30px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .category {
          background: white;
          padding: 30px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          text-align: center;
        }

        .category a {
          text-decoration: none;
          color: #2563eb;
          font-weight: bold;
        }

        .books {
          padding: 40px 30px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .book {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 12px;
          display: flex;
          flex-direction: column;
        }

        .book img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .price {
          color: #16a34a;
          font-weight: bold;
          margin: 6px 0;
        }

        .actions {
          margin-top: auto;
          display: flex;
          gap: 10px;
        }

        button {
          flex: 1;
          padding: 8px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
          font-weight: bold;
        }

        .cart {
          background: #2563eb;
          color: white;
        }

        .view {
          background: #e5e7eb;
        }

        footer {
          background: #111827;
          color: #d1d5db;
          text-align: center;
          padding: 30px;
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
        <h1>Discover Books for Every Reader</h1>
        <p>
          Shop self-help, fiction, religious and kids books — delivered across Kenya.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        {categories.map((cat) => (
          <div key={cat.slug} className="category">
            <h3>{cat.name}</h3>
            <Link href={`/category/${cat.slug}`}>
              Browse {cat.name}
            </Link>
          </div>
        ))}
      </section>

      {/* FEATURED BOOKS */}
      <section className="books">
        <h2>Featured Books</h2>

        <div className="grid">
          <div className="book">
            <img src="/atomic.webp" alt="Atomic Habits" />
            <h4>Atomic Habits</h4>
            <p>James Clear</p>
            <div className="price">KSh 1,200</div>
            <div className="actions">
              <button className="cart">Add to Cart</button>
              <button className="view">View</button>
            </div>
          </div>

          <div className="book">
            <img src="/alchemist.jpeg" alt="The Alchemist" />
            <h4>The Alchemist</h4>
            <p>Paulo Coelho</p>
            <div className="price">KSh 950</div>
            <div className="actions">
              <button className="cart">Add to Cart</button>
              <button className="view">View</button>
            </div>
          </div>

          <div className="book">
            <img src="/purpose.webp" alt="Purpose Driven Life" />
            <h4>Purpose Driven Life</h4>
            <p>Rick Warren</p>
            <div className="price">KSh 1,100</div>
            <div className="actions">
              <button className="cart">Add to Cart</button>
              <button className="view">View</button>
            </div>
          </div>

          <div className="book">
            <img src="/diary.webp" alt="Diary of a Wimpy Kid" />
            <h4>Diary of a Wimpy Kid</h4>
            <p>Jeff Kinney</p>
            <div className="price">KSh 850</div>
            <div className="actions">
              <button className="cart">Add to Cart</button>
              <button className="view">View</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} BookStore Kenya
      </footer>
    </main>
  );
}
