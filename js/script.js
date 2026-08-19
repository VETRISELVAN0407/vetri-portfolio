/* =====================================================================
   VETRI SELVAN — PORTFOLIO SCRIPT
   Sections: 1. Navbar scroll + active link  2. Mobile nav auto-close
             3. Typing effect  4. Scroll reveal (IntersectionObserver)
             5. Animated counters  6. Skill bar animation
             7. Back-to-top button  8. Contact form validation
   ===================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. NAVBAR: background on scroll + active link ---------- */
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  function handleNavScroll() {
    if (window.scrollY > 40) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  }
  handleNavScroll();
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  function setActiveLink() {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }
  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* ---------- 2. MOBILE NAV: auto-close after clicking a link ---------- */
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    const bsCollapse = window.bootstrap ? new bootstrap.Collapse(navMenu, { toggle: false }) : null;
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navMenu.classList.contains('show') && bsCollapse) {
          bsCollapse.hide();
        }
      });
    });
  }

  /* ---------- 3. HERO TYPING EFFECT ---------- */
  const typedRoleEl = document.getElementById('typedRole');
  const roles = [
    'Java Full Stack Developer',
    'Backend Developer',
    'Web Application Developer',
    'Software Developer'
  ];

  if (typedRoleEl) {
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let isDeleting = false;

    const TYPE_SPEED = 70;
    const DELETE_SPEED = 40;
    const HOLD_TIME = 1600;

    function typeLoop() {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        charIndex++;
        if (charIndex > currentRole.length) {
          typedRoleEl.textContent = currentRole;
          isDeleting = true;
          setTimeout(typeLoop, HOLD_TIME);
          return;
        }
      } else {
        charIndex--;
        if (charIndex < 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          charIndex = 0;
        }
      }

      typedRoleEl.textContent = currentRole.substring(0, charIndex);
      setTimeout(typeLoop, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    }

    charIndex = 0;
    typedRoleEl.textContent = '';
    setTimeout(typeLoop, 500);
  }

  /* ---------- 4. SCROLL REVEAL ---------- */
  const animatedEls = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window && animatedEls.length) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    animatedEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    animatedEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- 5. ANIMATED COUNTERS ---------- */
  const counters = document.querySelectorAll('.stat-num');

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1400;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && counters.length) {
    const counterObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { counterObserver.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
  }

  /* ---------- 6. SKILL BAR ANIMATION ---------- */
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  if ('IntersectionObserver' in window && skillBars.length) {
    const skillObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute('data-width') || 0;
          requestAnimationFrame(function () {
            bar.style.width = width + '%';
          });
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.4 });

    skillBars.forEach(function (bar) { skillObserver.observe(bar); });
  } else {
    skillBars.forEach(function (bar) {
      bar.style.width = (bar.getAttribute('data-width') || 0) + '%';
    });
  }

  /* ---------- 7. BACK TO TOP BUTTON ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    function toggleBackToTop() {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
  }

  /* ---------- 8. CONTACT FORM VALIDATION ---------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        formStatus.textContent = 'Please fill in all fields correctly.';
        return;
      }

      contactForm.classList.add('was-validated');

      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const subject = document.getElementById('cf-subject').value.trim();
      const message = document.getElementById('cf-message').value.trim();

      /* Frontend-only site: no backend to actually send email.
         Show confirmation and offer a mailto: fallback. */
      formStatus.textContent = 'Thank you! Your message has been prepared.';

      const mailtoLink =
        'mailto:k.vetriselvan04@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(
          'Name: ' + name + '\nEmail: ' + email + '\n\n' + message
        );

      window.location.href = mailtoLink;
      contactForm.reset();
      contactForm.classList.remove('was-validated');
    });
  }

});
