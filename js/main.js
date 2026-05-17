/**
 * Extreme Electronics - Main JavaScript
 * Handles navigation, accordion, and interactivity.
 */

document.addEventListener('DOMContentLoaded', function () {
  // ===================================
  // Mobile Menu
  // ===================================
  let mobileMenuOpen = false;
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    if (mobileMenuOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    }
    menuToggle.setAttribute('aria-expanded', String(mobileMenuOpen));
  }

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = link.getAttribute('href');
      const sectionId = href.replace('#', '');
      scrollToSection(sectionId);
      if (mobileMenuOpen) {
        toggleMobileMenu();
      }
    });
  });

  // ===================================
  // Services Accordion
  // ===================================
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const item = trigger.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const icon = trigger.querySelector('.accordion-icon');
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // Close all other accordion items
      accordionTriggers.forEach(function (otherTrigger) {
        if (otherTrigger !== trigger) {
          const otherItem = otherTrigger.closest('.accordion-item');
          const otherContent = otherItem.querySelector('.accordion-content');
          const otherIcon = otherTrigger.querySelector('.accordion-icon');
          otherTrigger.setAttribute('aria-expanded', 'false');
          otherContent.classList.add('hidden');
          otherIcon.classList.remove('rotate-180');
        }
      });

      // Toggle current item
      if (isOpen) {
        trigger.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      }
    });
  });

  // ===================================
  // Smooth scroll for footer links
  // ===================================
  const footerLinks = document.querySelectorAll('footer a[href^="#"]');
  footerLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = link.getAttribute('href').replace('#', '');
      scrollToSection(sectionId);
    });
  });

  // ===================================
  // Intersection Observer for scroll animations
  // ===================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe solution cards for scroll-in animation
  const solutionCards = document.querySelectorAll('.solution-card');
  solutionCards.forEach(function (card) {
    card.classList.add('animate-target');
    observer.observe(card);
  });

  // Observe accordion items
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(function (item) {
    item.classList.add('animate-target');
    observer.observe(item);
  });
});
