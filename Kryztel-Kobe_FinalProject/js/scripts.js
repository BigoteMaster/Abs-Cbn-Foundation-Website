window.addEventListener('DOMContentLoaded', () => {
    // 1. Start Bootstrap Agency Navbar Shrink on Scroll
    const navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) return;
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // 2. Activate Bootstrap ScrollSpy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // 3. Collapse responsive mobile navbar when a link is clicked
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // 4. Pass selected advocacy cause into the Donate Modal
    const donateModal = document.getElementById('donateModal');
    if (donateModal) {
        donateModal.addEventListener('show.bs.modal', (event) => {
            const button = event.relatedTarget;
            const cause = button.getAttribute('data-cause') || 'ABS-CBN Foundation';
            document.getElementById('selectedCauseText').textContent = cause;
        });
    }

    // 5. Simple confirmation alerts for forms
    const donateForm = document.getElementById('donateForm');
    if (donateForm) {
        donateForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your generous pledge to ABS-CBN Foundation!');
            bootstrap.Modal.getInstance(donateModal).hide();
            donateForm.reset();
        });
    }

    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('You are now subscribed to the ABS-CBN Foundation Newsletter!');
            bootstrap.Modal.getInstance(document.getElementById('newsletterModal')).hide();
            newsletterForm.reset();
        });
    }
});