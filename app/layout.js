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

          /* ===== HEADER ===== */
          header {
            background: #ffffff;
            border-bottom: 1px solid #e5e7eb;
            padding: 16px 40px;
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

          nav {
            display: flex;
            gap: 24px;
          }

          nav a {
            text-decoration: none;
            color: #374151;
            font-weight: 500;
          }

          nav a:hover {
            color: #2563eb;
          }

          /* ===== MAIN ===== */
          main {
            min-height: 80vh;
          }

          /* ===== FOOTER ===== */
          footer {
            background: #111827;
            color: #d1d5db;
            padding: 50px 40px 30px;
            margin-top: 60px;
          }

          .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 30px;
            margin-bottom: 30px;
          }

          .footer-section h4 {
            margin-bottom: 12px;
            color: #ffffff;
          }

          .footer-section p,
          .footer-section a {
            font-size: 14px;
            color: #d1d5db;
            text-decoration: none;
            display: block;
            margin-bottom: 6px;
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
