import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * useScrollReveal — returns [ref, isVisible]
 * Attach ref to any element; isVisible flips true once it enters the viewport.
 */
export const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

/**
 * useCountUp — animates a number from 0 to `end` when triggered.
 * Returns [displayValue, startFn]
 */
export const useCountUp = (end, duration = 1800) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const raf = useRef(null);

  const start = useCallback(() => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();
    const numericEnd = parseInt(end.toString().replace(/\D/g, ''), 10);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * numericEnd));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
  }, [end, duration, started]);

  useEffect(() => () => raf.current && cancelAnimationFrame(raf.current), []);

  // Format: if original ends with '+', keep it
  const suffix = end.toString().replace(/\d/g, '');
  return [`${value}${suffix}`, start];
};

/**
 * useTypewriter — cycles through an array of strings with a typewriter effect.
 */
export const useTypewriter = (strings, typingSpeed = 100, deletingSpeed = 50, pause = 2000) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index];
    let timeout;

    if (!deleting && display.length < current.length) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed);
    } else if (!deleting && display.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deletingSpeed);
    } else if (deleting && display.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, index, strings, typingSpeed, deletingSpeed, pause]);

  return display;
};

/**
 * useNavScroll — tracks scroll position and active section.
 */
export const useNavScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'education', 'contact'];
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);

      const active = offsets.reduce((closest, s) =>
        Math.abs(s.top) < Math.abs(closest.top) ? s : closest
      );
      if (active) setActiveSection(active.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrolled, activeSection };
};
