import gsap from 'gsap';

// GSAP animation utilities for Super RSS Feed
export const anim = {
  // Stagger-reveal children of a container
  revealChildren(container: HTMLElement, selector = '.anim-item', delay = 0): gsap.core.Tween {
    const items = container.querySelectorAll(selector);
    gsap.set(items, { opacity: 0, y: 24 });
    return gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: 'power3.out',
      delay,
    });
  },

  // Page transition between views
  pageEnter(el: HTMLElement): gsap.core.Tween {
    gsap.set(el, { opacity: 0, y: 30 });
    return gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power4.out',
    });
  },

  pageExit(el: HTMLElement): Promise<void> {
    return new Promise((resolve) => {
      gsap.to(el, {
        opacity: 0,
        y: -20,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: resolve,
      });
    });
  },

  // Pulse glow on stat cards
  pulseGlow(el: HTMLElement): gsap.core.Tween {
    return gsap.to(el, {
      boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  },

  // Sidebar slide
  sidebarToggle(el: HTMLElement, collapsed: boolean): gsap.core.Tween {
    return gsap.to(el, {
      width: collapsed ? 72 : 280,
      duration: 0.4,
      ease: 'power3.inOut',
    });
  },

  // Counter animation for stats
  animateCounter(el: HTMLElement, target: number, duration = 1.2): gsap.core.Tween {
    const obj = { val: 0 };
    return gsap.to(obj, {
      val: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = Math.round(obj.val).toLocaleString();
      },
    });
  },

  // Loading bar progress
  loadingBar(el: HTMLElement, progress: number): gsap.core.Tween {
    return gsap.to(el, {
      width: `${progress}%`,
      duration: 0.4,
      ease: 'power2.out',
    });
  },

  // Card hover micro-interaction
  cardHover(el: HTMLElement, entering: boolean): void {
    gsap.to(el, {
      scale: entering ? 1.02 : 1,
      y: entering ? -4 : 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  },

  // Scanline sweep effect for header
  scanline(el: HTMLElement): gsap.core.Tween {
    return gsap.fromTo(
      el,
      { x: '-100%' },
      { x: '200%', duration: 3, repeat: -1, ease: 'none' }
    );
  },

  // Typing effect for hero text
  typewriter(el: HTMLElement, text: string, speed = 0.04): gsap.core.Timeline {
    el.textContent = '';
    const tl = gsap.timeline();
    const chars = text.split('');
    chars.forEach((char, i) => {
      tl.call(() => {
        el.textContent += char;
      }, undefined, i * speed);
    });
    return tl;
  },

  // Orbital rotation for decorative elements
  orbit(el: HTMLElement): gsap.core.Tween {
    return gsap.to(el, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });
  },

  // Kill all tweens on element
  kill(el: HTMLElement): void {
    gsap.killTweensOf(el);
  },
};
