"use client";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  nextId?: string;
};

export default function ScrollSection({ children, nextId }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const locked = useRef(false);

  useEffect(() => {
    if (!ref.current || !nextId) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY.current;

        lastScrollY.current = currentScrollY;

        if (entry.isIntersecting && scrollingDown && !locked.current) {
          locked.current = true;

          document
            .getElementById(nextId)
            ?.scrollIntoView({ behavior: "smooth" });

          // unlock after scroll animation
          setTimeout(() => {
            locked.current = false;
          }, 1000);
        }
      },
      { threshold: 0.9 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [nextId]);

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center"
    >
      {children}
    </section>
  );
}
