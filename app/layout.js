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
            text-decoration: none;
            color: inherit;
          }

          
          header {
            background: #ffffff;
            border-bottom: 1px solid #e5e7eb;
            padding: 16px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
          }

          .logo {
            font-size: 22px;
            font-weight: 700;
            color: #2563eb;
            letter-spacing: 0.4px;
            white-space: nowrap;
          }

          nav {
            display: flex;
            align-items: center;
            gap: 14px;
            flex-wrap: wrap;
          }

          /* Normal nav links */
          .nav-link {
            font-size: 15px;
            font-weight: 500;
            padding: 8px 12px;
            border-radius: 6px;
            color: #374151;
          }

          .nav-link:hover {
            background: #f3f4f6;
            color: #2563eb;
          }

          /* Button-style links */
          .nav-btn {
            font-size: 14px;
            font-weight: 600;
            padding: 8px 18px;
            border-radius: 8px;
            transition: all 0.2s ease;
            white-space: nowrap;
          }

          .nav-btn.primary {
            background: #2563eb;
            color: #ffffff;
          }

          .nav-btn.primary:hover {
            background: #1d4ed8;
          }

          .nav-btn.outline {
            border: 1px solid #2563eb;
            color: #2563eb;
          }

          .nav-btn.outline:hover {
            background: #eff6ff;
          }

          
          main {
            min-height: 80vh;
            width: 100%;
          }

          
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
              flex-direction: column;
              align-items: stretch;
            }

            nav {
              width: 100%;
              justify-content: space-between;
            }

            .nav-link,
            .nav-btn {
              flex: 1;
              text-align: center;
            }

            footer {
              padding: 40px 16px 24px;
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
          <Link href="/" className="logo">
            BookStore
          </Link>

          <nav>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/cart" className="nav-link">Cart</Link>
            <Link href="/register" className="nav-btn outline">Register</Link>
            <Link href="/login" className="nav-btn primary">Login</Link>
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