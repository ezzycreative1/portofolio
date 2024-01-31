// static/scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.getElementById('toggleIcon');
    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('footer');

    if (toggleIcon && navbar && footer) {
         // 1. Toggle Icon Navbar
        toggleIcon.addEventListener('click', function () {
            navbar.classList.toggle('hidden');
        });

        // 2. Scroll Sections
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1); // Menghilangkan tanda '#' dari ID
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Hide navbar after clicking on a link
                    if (window.innerWidth < 1024) {
                        navbar.classList.add('hidden');
                    }
                }
            });
        });

        // 3. Sticky Header
        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                navbar.classList.add('bg-bg-color', 'shadow-md');
                navbar.classList.remove('bg-second-bg-color');
                footer.classList.add('footer-visible');
                footer.classList.remove('footer-hidden');
            } else {
                navbar.classList.remove('bg-bg-color', 'shadow-md');
                navbar.classList.add('bg-second-bg-color');
                footer.classList.remove('footer-visible');
                footer.classList.add('footer-hidden');
            }
        });

        // 4. Hide navbar on window resize for mobile
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 1024) {
                navbar.classList.remove('hidden');
            }
        });

        // 5. Go To Home Function
        function goToHome() {
            window.location.href = '/'; // Ganti '/' dengan URL halaman utama Anda di Nuxt.js
        }

        // Menambahkan event listener ke elemen dengan ID 'homeLink'
        const homeLink = document.getElementById('homeLink');
        if (homeLink) {
            homeLink.addEventListener('click', goToHome);
        }
    } else {
    console.error("Satu atau lebih elemen tidak ditemukan!");
    }
});
