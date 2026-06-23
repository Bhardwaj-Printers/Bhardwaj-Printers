/* ==========================================
SECTION 1 OF 3
MOBILE MENU
STICKY HEADER
SMOOTH SCROLL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
    MOBILE MENU TOGGLE
    ========================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");

            menuBtn.classList.toggle("active");

        });

    }

    /* ==========================================
    CLOSE MENU AFTER CLICK
    ========================================== */

    const navLinks =
        document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuBtn.classList.remove("active");

        });

    });

    /* ==========================================
    STICKY HEADER EFFECT
    ========================================== */

    const header =
        document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /* ==========================================
    SMOOTH SCROLLING
    ========================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                const targetId =
                    this.getAttribute("href");

                if (targetId === "#")
                    return;

                const target =
                    document.querySelector(targetId);

                if (!target)
                    return;

                e.preventDefault();

                window.scrollTo({

                    top:
                    target.offsetTop - 80,

                    behavior:
                    "smooth"

                });

            });

        });

    /* ==========================================
    ACTIVE NAVIGATION LINK
    ========================================== */

    const sections =
        document.querySelectorAll("section");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.clientHeight;

            if (
                pageYOffset >= sectionTop
                &&
                pageYOffset <
                sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("nav-active");

            if (
                link.getAttribute("href")
                === `#${current}`
            ) {

                link.classList.add("nav-active");

            }

        });

    });

});





/* ==========================================
SECTION 2 OF 3
FAQ ACCORDION
TESTIMONIAL SLIDER
COUNTER ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
    FAQ ACCORDION
    ========================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if (faq !== item) {

                    faq.classList.remove("active");

                    const icon =
                        faq.querySelector(".faq-question span");

                    if (icon) {

                        icon.textContent = "+";

                    }

                }

            });

            item.classList.toggle("active");

            const currentIcon =
                item.querySelector(".faq-question span");

            if (item.classList.contains("active")) {

                currentIcon.textContent = "−";

            } else {

                currentIcon.textContent = "+";

            }

        });

    });

    /* ==========================================
    TESTIMONIAL AUTO SLIDER
    ========================================== */

    const testimonials =
        document.querySelectorAll(".testimonial-card");

    let currentSlide = 0;

    function showTestimonial(index) {

        testimonials.forEach(card => {

            card.classList.remove("active");

        });

        testimonials[index].classList.add("active");

    }

    if (testimonials.length > 0) {

        showTestimonial(currentSlide);

        setInterval(() => {

            currentSlide++;

            if (currentSlide >= testimonials.length) {

                currentSlide = 0;

            }

            showTestimonial(currentSlide);

        }, 5000);

    }

    /* ==========================================
    COUNTER ANIMATION
    ========================================== */

    const counters =
        document.querySelectorAll(".counter");

    let counterStarted = false;

    function animateCounters() {

        counters.forEach(counter => {

            const target =
                +counter.getAttribute("data-target");

            let current = 0;

            const increment =
                target / 100;

            const updateCounter = () => {

                if (current < target) {

                    current += increment;

                    counter.innerText =
                        Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    if (target >= 1000) {

                        counter.innerText =
                            target.toLocaleString() + "+";

                    } else {

                        counter.innerText =
                            target + "+";

                    }

                }

            };

            updateCounter();

        });

    }

    /* ==========================================
    INTERSECTION OBSERVER
    START COUNTERS ON SCROLL
    ========================================== */

    const statsSection =
        document.querySelector(".stats-section");

    if (statsSection) {

        const observer =
            new IntersectionObserver(entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting &&
                        !counterStarted
                    ) {

                        counterStarted = true;

                        animateCounters();

                    }

                });

            }, {

                threshold: 0.4

            });

        observer.observe(statsSection);

    }

});


/* ==========================================
SECTION 3 OF 3
SCROLL REVEAL
FORM VALIDATION
SCROLL TO TOP
PRODUCTION ENHANCEMENTS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
    SCROLL REVEAL ANIMATION
    ========================================== */

    const revealElements = document.querySelectorAll(

        ".service-card,\
        .why-card,\
        .industry-card,\
        .process-card,\
        .portfolio-card,\
        .achievement-card,\
        .contact-card,\
        .stat-card"

    );

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show-element");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

    /* ==========================================
    CONTACT FORM VALIDATION
    ========================================== */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function(e) {

            e.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phonePattern =
                /^[0-9]{10}$/;

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name.length < 3) {

                alert(
                    "Please enter a valid name."
                );

                return;

            }

            if (!phonePattern.test(phone)) {

                alert(
                    "Please enter a valid 10 digit phone number."
                );

                return;

            }

            if (!emailPattern.test(email)) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }

            alert(

                "Thank you! Your inquiry has been submitted successfully."

            );

            contactForm.reset();

        });

    }

    /* ==========================================
    SCROLL TO TOP BUTTON
    ========================================== */

    const scrollBtn =
        document.createElement("button");

    scrollBtn.innerHTML =
        '<i class="fas fa-arrow-up"></i>';

    scrollBtn.classList.add("scroll-top-btn");

    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollBtn.classList.add("show");

        } else {

            scrollBtn.classList.remove("show");

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================================
    CURRENT YEAR IN FOOTER
    ========================================== */

    const yearElement =
        document.getElementById("currentYear");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

    /* ==========================================
    IMAGE LOADING EFFECT
    ========================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach((img) => {

        img.addEventListener("load", () => {

            img.classList.add("loaded");

        });

    });

});
