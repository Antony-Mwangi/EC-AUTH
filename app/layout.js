import Link from "next/link";

export const metadata = {
  title: "BookStore Kenya",
  description: "Buy books online in Kenya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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

  a {
    color: inherit;
  }

  
  header {
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .logo {
    font-size: 22px;
    font-weight: bold;
    color: #2563eb;
    text-decoration: none;
    white-space: nowrap;
  }

  nav {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  nav a {
    text-decoration: none;
    color: #374151;
    font-weight: 500;
    font-size: 15px;
  }

  nav a:hover {
    color: #2563eb;
  }

  
  main {
    min-height: 80vh;
    width: 100%;
  }

  /* ===== FOOTER ===== */
  footer {
    background: #111827;
    color: #d1d5db;
    padding: 50px 24px 30px;
    margin-top: 60px;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 32px;
    margin-bottom: 30px;
  }

  .footer-section h4 {
    margin-bottom: 12px;
    color: #ffffff;
    font-size: 16px;
  }

  .footer-section p,
  .footer-section a {
    font-size: 14px;
    color: #d1d5db;
    text-decoration: none;
    display: block;
    margin-bottom: 8px;
    line-height: 1.6;
  }

  .footer-section a:hover {
    color: #ffffff;
  }

  .footer-bottom {
    border-top: 1px solid #374151;
    padding-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #9ca3af;
  }

  
  @media (max-width: 640px) {
    header {
      padding: 14px 16px;
      flex-direction: column;
      align-items: flex-start;
    }

    nav {
      width: 100%;
      justify-content: space-between;
      gap: 14px;
    }

    nav a {
      font-size: 14px;
    }

    footer {
      padding: 40px 16px 24px;
    }

    .footer-grid {
      gap: 24px;
    }

    .footer-bottom {
      font-size: 13px;
    }
  }

  
  @media (min-width: 641px) and (max-width: 1024px) {
    header {
      padding: 16px 32px;
    }

    footer {
      padding: 50px 32px 30px;
    }
  }
`}</style>


        
        <header>
          <Link href="/" className="logo">BookStore</Link>

          <nav>
            <Link href="/">Home</Link>
            <Link href="/register">Register</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/login">Login</Link>
          </nav>
        </header>

        
        <main>{children}</main>

        
        <footer>
          <div className="footer-grid">
            <div className="footer-section">
              <h4>BookStore Kenya</h4>
              <p>
                Your trusted online bookstore offering quality books across
                Kenya.
              </p>
            </div>

            <div className="footer-section">
              <h4>Categories</h4>
              <Link href="/category/selfhelp">Self Help</Link>
              <Link href="/category/fiction">Fiction</Link>
              <Link href="/category/religious">Religious</Link>
              <Link href="/category/kids">Kids</Link>
            </div>

            <div className="footer-section">
              <h4>Customer Care</h4>
              <a href="#">Help Center</a>
              <a href="#">Delivery Info</a>
              <a href="#">Returns Policy</a>
            </div>

            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Email: support@bookstore.co.ke</p>
              <p>Phone: +254 700 000 000</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <div className="footer-bottom">
            © {new Date().getFullYear()} BookStore Kenya. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
