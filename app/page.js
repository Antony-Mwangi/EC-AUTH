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
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #f5f6f8;
    color: #111827;
  }

  main {
    width: 100%;
    overflow-x: hidden;
  }

  /* HERO */
  .hero {
    padding: 80px 20px;
    text-align: center;
    background: white;
  }

  .hero h1 {
    font-size: clamp(26px, 4vw, 40px);
    margin-bottom: 12px;
  }

  .hero p {
    color: #6b7280;
    max-width: 640px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.6;
  }

  
  .categories {
    padding: 40px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
  }

  .category {
    background: white;
    padding: 25px 20px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .category:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  }

  .category h3 {
    margin-bottom: 10px;
  }

  .category a {
    text-decoration: none;
    color: #2563eb;
    font-weight: bold;
    font-size: 15px;
  }

  
  .books {
    padding: 40px 20px 60px;
  }

  .books h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: clamp(22px, 3vw, 30px);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
  }

  .book {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 14px;
    display: flex;
    flex-direction: column;
  }

  .book img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 12px;
  }

  .book h4 {
    margin: 4px 0;
  }

  .book p {
    color: #6b7280;
    font-size: 14px;
    margin: 0;
  }

  .price {
    color: #16a34a;
    font-weight: bold;
    margin: 10px 0;
    font-size: 15px;
  }

  .actions {
    margin-top: auto;
    display: flex;
    gap: 10px;
  }

  button {
    flex: 1;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
    font-size: 14px;
  }

  .cart {
    background: #2563eb;
    color: white;
  }

  .cart:hover {
    background: #1d4ed8;
  }

  .view {
    background: #e5e7eb;
  }

  .view:hover {
    background: #d1d5db;
  }

  
  @media (max-width: 640px) {
    .hero {
      padding: 60px 16px;
    }

    .categories {
      padding: 30px 16px;
    }

    .books {
      padding: 30px 16px 50px;
    }

    .book img {
      height: 200px;
    }

    .actions {
      flex-direction: column;
    }

    button {
      width: 100%;
    }
  }


  @media (min-width: 641px) and (max-width: 1024px) {
    .hero {
      padding: 70px 30px;
    }

    .book img {
      height: 220px;
    }
  }
`}</style>


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
    </main>
  );
}
