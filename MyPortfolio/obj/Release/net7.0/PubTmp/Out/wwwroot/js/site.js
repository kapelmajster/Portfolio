document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            links.forEach(l => l.parentElement.classList.remove('active'));

            // Add active class to the clicked link
            this.parentElement.classList.add('active');

            // Smooth scroll to the target section
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});
