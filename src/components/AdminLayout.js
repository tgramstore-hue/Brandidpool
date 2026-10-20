"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children, title, customAction }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const adminNavLinks = [
    {
      href: "/admin/dashboard",
      label: "Overview",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" />
        </svg>
      ),
      exact: true,
    },
    {
      href: "/admin/dashboard/applications",
      label: "Applications",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9zM14 3v6h6M8 13h8M8 17h6" />
        </svg>
      ),
    },
    {
      href: "/admin/dashboard/customers",
      label: "Customers",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      ),
    },
    {
      href: "/admin/dashboard/partners",
      label: "Partners",
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
      href: "/admin/dashboard/payments",
      label: "Payments",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
    },
    {
      href: "/admin/dashboard/services",
      label: "Services",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
    },
    {
      href: "/admin/dashboard/settings",
      label: "Settings",
      icon: (
        <svg className="i" aria-hidden="true" viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
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
      <div className="mobile-top-bar ad">
        <div>
          <Link className="lg" href="/admin/dashboard" style={{ margin: 0, color: "#fff" }}>
            brandid<b>pool</b>
          </Link>
          <span style={{ color: "#FF9A4D", fontSize: 12, fontWeight: 600, marginLeft: 8 }}>
            Admin
          </span>
        </div>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle admin menu"
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

      {/* Admin Sidebar */}
      <nav
        className={`sb ad ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Admin console navigation"
      >
        <Link className="lg" href="/admin/dashboard">
          brandid<b>pool</b>
        </Link>
        <p className="adt">Admin console</p>
        {adminNavLinks.map((item) => (
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

      {/* Main Content */}
      <main className="mn">
        {title && (
          <div className="tb">
            <h1>{title}</h1>
            <div className="row">
              {customAction}
              <span className="av" aria-label="Staff account">
                AD
              </span>
            </div>
          </div>
        )}
        {children}
      </main>
    </div>
  );
}
