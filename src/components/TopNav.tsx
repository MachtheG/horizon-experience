"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Programs", href: "/programs" },
  { label: "Conservation Status", href: "/conservation-status" },
  { label: "Nkirreten Project", href: "/nkirreten-project" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Donate", href: "/donate" },
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
          <div className="nav-zebra-runway" aria-hidden="true">
            <Image
              src="/images/nav-zebra.jpg"
              alt=""
              width={52}
              height={34}
              className="nav-zebra-runner"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
