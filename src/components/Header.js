"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="bar">
        New: track every application live from your dashboard.{" "}
        <a href="#how">See how it works</a>
      </div>
      <header>
        <div className="wrap nav">
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={drawerOpen}
            aria-controls="drawer"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link className="logo" href="/">
            brandid<b>pool</b>
          </Link>
          <nav className="menu" aria-label="Main">
            <a href="#services">Services</a>
            <a href="#how">How it works</a>
            <a href="#why">Why brandidpool</a>
            <a href="#faq">FAQs</a>
          </nav>
          <div className="right">
            <Link
              className="signin"
              href="/login"
              style={{ font: "500 15px var(--body)" }}
            >
              Sign in
            </Link>
            <Link className="btn btn-dark btn-rect" href="#contact">
              Contact us
            </Link>
          </div>
        </div>
        <nav
          className={`drawer${drawerOpen ? " open" : ""}`}
          id="drawer"
          aria-label="Mobile"
        >
          <a href="#services" onClick={() => setDrawerOpen(false)}>
            Services
          </a>
          <a href="#how" onClick={() => setDrawerOpen(false)}>
            How it works
          </a>
          <a href="#why" onClick={() => setDrawerOpen(false)}>
            Why brandidpool
          </a>
          <a href="#faq" onClick={() => setDrawerOpen(false)}>
            FAQs
          </a>
          <Link href="/login" onClick={() => setDrawerOpen(false)}>
            Sign in
          </Link>
        </nav>
      </header>
    </>
  );
}
