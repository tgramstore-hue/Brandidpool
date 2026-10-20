"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserLayout({ children, title, actionLabel, actionHref }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      href: "/dashboard",
      label: "Overview",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" />
        </svg>
      ),
      exact: true,
    },
    {
      href: "/dashboard/services",
      label: "Services",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      href: "/dashboard/applications",
      label: "Applications",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9zM14 3v6h6M8 13h8M8 17h6" />
        </svg>
      ),
    },
    {
      href: "/dashboard/documents",
      label: "Documents",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 20h16" />
        </svg>
      ),
    },
    {
      href: "/dashboard/billing",
      label: "Payments",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
    },
    {
      href: "/dashboard/settings",
      label: "Profile",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      ),
    },
    {
      href: "mailto:support@brandidpool.com",
      label: "Help",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.5 2.5 0 115 0c0 1.7-2.5 2-2.5 4M12 17h.01" />
        </svg>
      ),
    },
  ];

  const isActive = (item) => {
    if (item.exact) return pathname === item.href;
    return pathname.startsWith(item.href);
  };

  return (
    <div className="pg">
      {/* Mobile Top Bar */}
      <div className="mobile-top-bar">
        <Link className="lg" href="/" style={{ margin: 0, color: "#fff" }}>
          brandid<b>pool</b>
        </Link>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="i" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          Menu
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`sb ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Dashboard navigation"
      >
        <Link className="lg" href="/">
          brandid<b>pool</b>
        </Link>
        {navLinks.map((item) => (
          <Link
            key={item.label}
            className={`n ${isActive(item) ? "on" : ""}`}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="mn">
        {title && (
          <div className="tb">
            <h1>{title}</h1>
            <div className="row">
              <Link
                className="bt s"
                href={actionHref || "/dashboard/apply"}
              >
                {actionLabel || "New application"}
              </Link>
              <Link href="/dashboard/settings" style={{ textDecoration: "none" }}>
                <span className="av" aria-label="Account">
                  AO
                </span>
              </Link>
            </div>
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
