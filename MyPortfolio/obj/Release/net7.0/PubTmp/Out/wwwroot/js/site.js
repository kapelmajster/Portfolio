document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');

    // Function to remove active class from all links
    function removeActiveClasses() {
        navLinks.forEach(link => link.parentElement.classList.remove('active'));
    }

    // Function to add active class to the link corresponding to the current section
    function addActiveClass(section) {
        removeActiveClasses();
        const activeLink = document.querySelector(`.sidebar nav ul li a[href="#${section.id}"]`);
        if (activeLink) {
            activeLink.parentElement.classList.add('active');
        }
    }

    // Event listener for scroll events
    window.addEventListener('scroll', function () {
        let currentSection = sections[0];

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 10;
            if (scrollY >= sectionTop) {
                currentSection = section;
            }
        });

        addActiveClass(currentSection);
    });

    // Event listener for click events on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSection = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            removeActiveClasses();
            this.parentElement.classList.add('active');
        });
    });
});
