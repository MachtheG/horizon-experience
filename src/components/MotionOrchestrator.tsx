"use client";

import { useEffect } from "react";

export default function MotionOrchestrator() {
  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      document.body.classList.add("site-ready");
    });

    const sections = Array.from(document.querySelectorAll("main.page section"));
    sections.forEach((section) => section.setAttribute("data-reveal", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      document.body.classList.remove("site-ready");
    };
  }, []);

  return null;
}
