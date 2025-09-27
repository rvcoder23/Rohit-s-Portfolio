import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Force initial reveal for all reveal elements
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale, .slide-left, .slide-right');
    revealElements.forEach((element) => {
      element.classList.add('revealed');
    });

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add('revealed');

          // Handle stagger for children if parent has stagger class
          if (target.classList.contains('stagger-parent')) {
            const children = target.querySelectorAll('[data-stagger]');
            children.forEach((child, index) => {
              const childElement = child as HTMLElement;
              childElement.style.setProperty('--index', index.toString());
              setTimeout(() => {
                child.classList.add('revealed');
              }, index * 150); // 150ms delay per child
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with reveal classes
    const allRevealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale, .slide-left, .slide-right, .stagger-parent');
    allRevealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      allRevealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};
