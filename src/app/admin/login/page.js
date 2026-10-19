"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link className="logo" href="/" style={{ marginBottom: 16, display: "inline-flex" }}>
          brandid<b>pool</b>
        </Link>
        <div style={{ marginBottom: 32 }}>
          <span className="admin-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
              <path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z" />
            </svg>
            Admin Portal
          </span>
        </div>
        <h1>Admin sign in</h1>
        <p className="auth-subtitle">Access the administration dashboard to manage users and applications.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="admin-email">Admin email</label>
            <input
              id="admin-email"
              type="email"
              placeholder="admin@brandidpool.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <Link href="#" className="forgot-link">Reset admin password</Link>

          <button type="submit" className="auth-btn" id="admin-login-submit" style={{ background: "#6C63E6" }}>
            Sign in to admin
          </button>
        </form>

        <p className="auth-footer" style={{ marginTop: 36 }}>
          <Link href="/login" style={{ color: "var(--blue)", fontWeight: 500 }}>
            ← Back to user login
          </Link>
        </p>
      </div>
    </div>
  );
}
