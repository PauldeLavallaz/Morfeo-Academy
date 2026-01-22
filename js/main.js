/* ========================================
   MORFEO LANDING PAGE - JavaScript
   Interactividad y animaciones
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Scroll-triggered Animations
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Seleccionar elementos para animar
    const animateElements = document.querySelectorAll(
        '.problem-card, .solution-item, .outcome-card, .example-card, .definition-box, .key-insight, .highlight-block'
    );

    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // ========================================
    // Smooth Scroll for anchor links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Floating CTA visibility control
    // ========================================
    const floatingCta = document.getElementById('floatingCta');
    const heroSection = document.querySelector('.hero');
    const finalCtaSection = document.getElementById('agenda');
    const footerSection = document.querySelector('.footer');
    
    function isElementInViewport(el) {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        );
    }
    
    if (floatingCta && heroSection) {
        const floatingCtaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Ocultar cuando el hero es visible
                if (entry.target === heroSection) {
                    if (entry.isIntersecting) {
                        floatingCta.classList.remove('visible');
                    } else if (!isElementInViewport(finalCtaSection) && !isElementInViewport(footerSection)) {
                        floatingCta.classList.add('visible');
                    }
                }
                
                // Ocultar cuando la sección CTA es visible
                if (entry.target === finalCtaSection) {
                    if (entry.isIntersecting) {
                        floatingCta.classList.remove('visible');
                    } else if (!isElementInViewport(heroSection) && !isElementInViewport(footerSection)) {
                        floatingCta.classList.add('visible');
                    }
                }
                
                // Ocultar cuando el footer es visible
                if (entry.target === footerSection) {
                    if (entry.isIntersecting) {
                        floatingCta.classList.remove('visible');
                    } else if (!isElementInViewport(heroSection) && !isElementInViewport(finalCtaSection)) {
                        floatingCta.classList.add('visible');
                    }
                }
            });
        }, { threshold: 0.1 });

        floatingCtaObserver.observe(heroSection);
        if (finalCtaSection) {
            floatingCtaObserver.observe(finalCtaSection);
        }
        if (footerSection) {
            floatingCtaObserver.observe(footerSection);
        }
    }

    // ========================================
    // FAQ Accordion
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                faqItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Si no estaba activo, abrirlo
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ========================================
    // Staggered animation for cards
    // ========================================
    function staggerAnimation(selector, delay = 100) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.style.transitionDelay = `${index * delay}ms`;
        });
    }

    staggerAnimation('.problem-card', 100);
    staggerAnimation('.solution-item', 100);
    staggerAnimation('.outcome-card', 100);

    // ========================================
    // Console welcome message
    // ========================================
    console.log('%c🚀 MORFEO', 'font-size: 24px; font-weight: bold; color: #c8f547;');
    console.log('%cSistemas de contenido automatizado con IA', 'font-size: 12px; color: #888;');

});
