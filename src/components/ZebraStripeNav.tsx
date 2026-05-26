"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function ZebraStripeNav() {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!navRef.current) return;
    
    const links = navRef.current.querySelectorAll('.stripe-link');
    
    links.forEach((link: Element) => {
      // Remove any existing event listeners by cloning
      const newLink = link.cloneNode(true) as HTMLElement;
      link.parentNode?.replaceChild(newLink, link);
      
      newLink.addEventListener('mouseenter', () => {
        gsap.to(newLink, { x: -30, duration: 0.3, ease: "power2.out" });
      });
      newLink.addEventListener('mouseleave', () => {
        gsap.to(newLink, { x: 0, duration: 0.5, ease: "bounce.out" });
      });
    });
  }, [pathname]); // Re-bind on route change if necessary

  const navItems = [
    { name: "Home", path: "/", width: "60px", color: "var(--color-zebra-white)" },
    { name: "About Us", path: "/about-us", width: "80px", color: "var(--color-zebra-white)" },
    { name: "Grevy's Zebra", path: "/grevys-zebra", width: "90px", color: "var(--color-zebra-white)" },
    { name: "Conservation", path: "/conservation", width: "110px", color: "var(--color-zebra-white)" },
    { name: "Community", path: "/community", width: "85px", color: "var(--color-zebra-white)" },
    { name: "News", path: "/news", width: "50px", color: "var(--color-zebra-white)" },
    { name: "Donate", path: "/donate", width: "70px", color: "var(--color-ochre)" },
    { name: "Shop", path: "/shop", width: "60px", color: "var(--color-sage)" },
  ];

  return (
    <div className="nav-container" ref={navRef}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', alignItems: 'flex-end', paddingRight: '20px' }}>
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} style={{ textDecoration: 'none' }} title={item.name}>
            <div 
              className="stripe-link" 
              style={{ 
                width: item.width, 
                height: '12px', 
                backgroundColor: pathname === item.path ? 'var(--color-clay)' : item.color, 
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
