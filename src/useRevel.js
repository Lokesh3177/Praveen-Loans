// src/hooks/useReveal.js
import { useEffect, useRef } from 'react';

/**
 * useReveal — attaches an IntersectionObserver to a ref.
 * When the element enters the viewport, adds the 'visible' class.
 * Works with .reveal, .reveal-left, .reveal-right, .reveal-scale CSS classes.
 *
 * @param {Object} options - IntersectionObserver options
 * @returns ref to attach to the element
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add .visible to this element and all reveal children
            entry.target.classList.add('visible');
            const children = entry.target.querySelectorAll(
              '.reveal, .reveal-left, .reveal-right, .reveal-scale, .step-line'
            );
            children.forEach((child) => child.classList.add('visible'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * useRevealAll — observes EACH direct child of the container ref.
 * Fires per-child so stagger delays work properly.
 */
export function useRevealAll(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return ref;
}