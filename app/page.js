"use client";

import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="page">
      <style>{`
        /* Root & Base Styles */
        .page {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #1a1a1a;
          line-height: 1.6;
          background-color: #fdfdfb; /* Subtle paper-like white */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 100px 20px;
          gap: 50px;
        }

        .heroText { flex: 1; }

        .heroTitle {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
        }

        .heroTitle span {
          color: #2563eb; /* Bookseller blue */
          background: linear-gradient(to right, #2563eb, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .heroSubtitle {
          font-size: 1.25rem;
          color: #475569;
          margin-bottom: 40px;
          max-width: 540px;
        }

        .heroButtons {
          display: flex;
          gap: 16px;
        }

        .primaryBtn, .secondaryBtn {
          padding: 14px 32px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .primaryBtn {
          background-color: #0f172a;
          color: white;
          box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.2);
        }

        .primaryBtn:hover {
          background-color: #1e293b;
          transform: translateY(-2px);
        }

        .secondaryBtn {
          background-color: white;
          color: #0f172a;
          border: 1px solid #e2e8f0;
        }

        .secondaryBtn:hover {
          background-color: #f8fafc;
        }

        .heroImage {
          flex: 1;
          position: relative;
          height: 450px;
          background: #f1f5f9;
          border-radius: 30px;
          overflow: hidden;
        }

        .img-contain { object-fit: cover; }

        /* Features Section */
        .features { padding: 100px 20px; }
        .sectionTitle {
          text-align: center;
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 60px;
          color: #0f172a;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .card {
          padding: 40px;
          background: white;
          border-radius: 24px;
          border: 1px solid #f1f5f9;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .card:hover { transform: translateY(-10px); }

        .icon-box {
          margin: 0 auto 24px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eff6ff;
          border-radius: 20px;
        }

        .card h3 { font-size: 1.5rem; margin-bottom: 12px; color: #1e293b; }
        .card p { color: #64748b; }

        /* About Section */
        .about { background-color: #0f172a; color: white; padding: 100px 0; margin: 50px 0; }
        .aboutContent {
          display: flex;
          align-items: center;
          gap: 60px;
          justify-content: space-between;
        }
        .aboutText-wrapper { flex: 1; }
        .about .sectionTitle { color: white; text-align: left; margin-bottom: 24px; }
        .aboutText { font-size: 1.15rem; opacity: 0.8; }
        .rounded-img { border-radius: 20px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3); }

        /* Contact Section */
        .contact { padding: 100px 20px; display: flex; justify-content: center; }
        .contactCard {
          background: #2563eb;
          background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
          color: white;
          padding: 60px;
          border-radius: 32px;
          text-align: center;
          max-width: 800px;
          width: 100%;
        }

        .contactTitle { font-size: 2.5rem; margin-bottom: 16px; }
        .contactText { margin-bottom: 40px; font-size: 1.1rem; opacity: 0.9; }
        .contactDetails {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .contactRow {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.1);
          padding: 12px 24px;
          border-radius: 100px;
          transition: background 0.2s;
        }

        .contactRow:hover { background: rgba(255,255,255,0.2); }
        .contactRow a { color: white; text-decoration: none; font-weight: 500; }

        /* Responsive */
        @media (max-width: 968px) {
          .hero, .aboutContent { flex-direction: column; text-align: center; }
          .heroImage { width: 100%; height: 300px; }
          .about .sectionTitle { text-align: center; }
          .heroButtons { justify-content: center; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero container">
        <div className="heroText">
          <h1 className="heroTitle">
            Discover Your Next <br /> <span>Favorite Book</span>
          </h1>
          <p className="heroSubtitle">
            An online bookstore built with Next.js and NextAuth.
            Browse, buy, and enjoy books from every genre — anytime, anywhere.
          </p>

          <div className="heroButtons">
            <Link href="/shop" className="primaryBtn">
              Shop Books
            </Link>
            <Link href="/login" className="secondaryBtn">
              Login
            </Link>
          </div>
        </div>

        <div className="heroImage">
          <Image
            src="/images (5).jpeg"
            alt="Books illustration"
            fill
            className="img-contain"
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section className="features container">
        <h2 className="sectionTitle">Why Buy From Us?</h2>

        <div className="featureGrid">
          <div className="card">
            <div className="icon-box">
              <Image src="/download.webp" width={50} height={50} alt="Secure Payments" />
            </div>
            <h3>Secure Payments</h3>
            <p>Shop confidently with safe and secure checkout.</p>
          </div>

          <div className="card">
            <div className="icon-box">
              <Image src="/images (5).jpeg" width={50} height={50} alt="Wide Selection" />
            </div>
            <h3>Wide Book Selection</h3>
            <p>From fiction to academics — we’ve got you covered.</p>
          </div>

          <div className="card">
            <div className="icon-box">
              <Image src="/download (1).webp" width={50} height={50} alt="Fast Delivery" />
            </div>
            <h3>Fast Delivery</h3>
            <p>Get your books delivered quickly and reliably.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="aboutContent container">
          <div className="aboutText-wrapper">
            <h2 className="sectionTitle">Built for Book Lovers</h2>
            <p className="aboutText">
              Our bookstore is designed for readers, students, and professionals.
              Simple browsing, easy ordering, and a smooth reading journey —
              all in one place.
            </p>
          </div>

          <div className="aboutImage">
            <Image
              src="/OIP.webp"
              alt="Reading books"
              width={420}
              height={260}
              className="rounded-img"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <div className="contactCard">
          <h2 className="contactTitle">Need Assistance?</h2>
          <p className="contactText">
            Have questions about orders or books? We’re here to help.
          </p>

          <div className="contactDetails">
            <div className="contactRow">
              <span>📧</span>
              <a href="mailto:antonymwangiw85@gmail.com">
                antonymwangiw85@gmail.com
              </a>
            </div>
            <div className="contactRow">
              <span>📞</span>
              <a href="tel:+254700000000">+254 700 000 000</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}