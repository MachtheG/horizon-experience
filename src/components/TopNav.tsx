"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Programs", href: "/programs" },
  { label: "Grevy's Zebra", href: "/grevys-zebra" },
  { label: "Community", href: "/community" },
  { label: "News", href: "/news" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

const exploreItems = [
  { label: "Interactive Range Map", href: "/interactive-range-map" },
  { label: "Digital Impact", href: "/digital-impact" },
  { label: "Field Journal", href: "/field-journal" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Shop", href: "/shop" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="top-nav-wrap">
      <nav className="top-nav" aria-label="Primary">
        <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
          <span className="brand-line">Grevy&apos;s Zebra Trust</span>
          <span className="brand-sub">Digital Fieldspace</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <div id="site-nav" className={`nav-panel ${open ? "is-open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive ? "is-active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="nav-list nav-list-secondary">
            {exploreItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link nav-link-secondary ${isActive ? "is-active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
