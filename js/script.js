// ==========================================================================
// PORTFOLIO SCRIPT - CYBER NOVA THEME
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    // Project Data
    const projectsData = [
        {
            id: 1,
            title: 'Sistem Pakar Diagnosa Penyakit Domba Berbasis Certainty Factor',
            shortDescription: 'Aplikasi web cerdas untuk membantu peternak mendiagnosis penyakit pada domba secara dini menggunakan metode sistem pakar Certainty Factor.',
            longDescription: 'Proyek ini merupakan implementasi sistem pakar yang dirancang khusus untuk sektor peternakan. Menggunakan metode Certainty Factor (CF), aplikasi ini mampu menganalisis gejala-gejala yang dimasukkan oleh pengguna untuk menghitung tingkat keyakinan terhadap kemungkinan berbagai penyakit pada domba. Tujuannya adalah menyedikan alat bantu diagnosis yang akurat, cepat, dan mudah diakses bagi para peternak, sehingga memungkinkan penanganan dini dan pencegahan penyebaran penyakit yang lebih luas. Sistem ini dibangun dengan antarmuka yang intuitif agar dapat digunakan oleh siapa saja tanpa memerlukan latar belakang teknis yang mendalam',
            imageSrc: 'assets/img/sistem-pakar.jpg',
            tech: ['CodeIgniter 4', 'PHP', 'MySQL', 'Laragon'],
            liveDemoUrl: '#',
            githubUrl: 'https://github.com/NashirLidienillah/sistem-pakar-domba'
        },
        {
            id: 2,
            title: 'UI/UX - ReDesign Web DISKOMINFOSATIK Kab Serang',
            shortDescription: 'Sebuah studi kasus desain ulang antarmuka (UI) dan pengalaman pengguna (UX) untuk website resmi DISKOMINFOSATIK, dengan fokus pada modernisasi tampilan, peningkatan aksesibilitas, dan penyederhanaan navigasi bagi masyarakat',
            longDescription: 'Proyek ini merupakan inisiatif desain ulang komprehensif untuk website DISKOMINFOSATIK Kabupaten Serang. Proses dimulai dari analisis mendalam terhadap situs web yang ada untuk mengidentifikasi kelemahan dalam struktur informasi, alur pengguna, dan desain visual. Tahap selanjutnya meliputi riset pengguna untuk memahami kebutuhan masyarakat dalam mengakses informasi publik. Berdasarkan temuan tersebut, saya mengembangkan wireframe dan prototype interaktif untuk membangun alur navigasi yang lebih intuitif. Fokus utama desain visual adalah menciptakan antarmuka yang bersih, modern, dan responsif, sejalan dengan identitas instansi pemerintah yang transparan dan mudah diakses. Hasil akhirnya adalah sebuah desain yang tidak hanya menarik secara visual, tetapi juga fungsional dan ramah pengguna.',
            imageSrc: 'assets/img/diskominfosatik.png',
            tech: ['Figma'],
            liveDemoUrl: 'https://www.figma.com/proto/dvFEmqD3QEz82LMLzKlheV/DISKOMINFOSATIK?page-id=0%3A1&node-id=1-2&p=f&viewport=81%2C340%2C0.19&t=a4qSbqk2KtzyyAJm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=287%3A1363',
            githubUrl: '#'
        },
        {
            id: 3,
            title: 'UI/UX - ReDesign Web Inspektorat kab serang',
            shortDescription: 'Sebuah inisiatif desain ulang UI/UX website Inspektorat Kab. Serang untuk meningkatkan transparansi, kepercayaan publik, serta menyediakan alur pengaduan yang lebih jelas dan aman.',
            longDescription: 'Proyek ini berfokus pada perombakan total website Inspektorat untuk menyajikan informasi yang lebih terstruktur dan mudah diakses. Prioritas utama adalah menyederhanakan arsitektur informasi dan merancang ulang fitur Saluran Pengaduan agar lebih intuitif dan aman. Tampilan visualnya dirancang agar terlihat profesional dan berintegritas, guna membangun kepercayaan masyarakat terhadap lembaga.',
            imageSrc: 'assets/img/inspektorat.png',
            tech: ['Figma'],
            liveDemoUrl: 'https://www.figma.com/proto/YYbVrPrEPmS1h4dbIRHaYb/Inspektorat-serangkab?page-id=0%3A1&node-id=1-2&viewport=719%2C288%2C0.21&t=ctyk2UbzVFiqJ1Xk-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A14',
            githubUrl: '#'
        },
    ];

    const certificatesData = [
        { id: 1, title: "Dasar Pemrograman Web", issuer: "Dicoding Indonesia", date: "Juni 2024", imageUrl: "assets/img/sertifikat-placeholder.png", credentialUrl: "#" },
        { id: 2, title: "Belajar JavaScript Lanjutan", issuer: "Progate", date: "Mei 2024", imageUrl: "assets/img/sertifikat-placeholder.png", credentialUrl: "#" },
        { id: 3, title: "Cloud Practitioner Essentials", issuer: "AWS Skill Builder", date: "April 2024", imageUrl: "assets/img/sertifikat-placeholder.png", credentialUrl: "#" },
    ];

    // Initialize all features
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic'
    });

    initScrollProgress();
    initThemeSwitcher();
    initMobileMenu();
    initPageTransitions(projectsData);
    initTabs();
    generateProjectCards(projectsData);
    generateCertificateCards(certificatesData);
    initCounterUpOnScroll();
    initNavScrollSpy();
    initSmoothScroll();
    initConstellation();
    initTypingAnimation();
    initHeaderScroll();
});

// ==========================================================================
// SCROLL PROGRESS INDICATOR
// ==========================================================================
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    const updateProgress = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
}

// ==========================================================================
// HEADER SCROLL EFFECT
// ==========================================================================
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });
}

// ==========================================================================
// MOBILE MENU
// ==========================================================================
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!menuToggle || !mainNav) return;

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Close menu when clicking nav links
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
}

// ==========================================================================
// THEME SWITCHER
// ==========================================================================
function initThemeSwitcher() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const htmlEl = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'light') {
            htmlEl.classList.add('light');
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        } else {
            htmlEl.classList.remove('light');
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
        }
        localStorage.setItem('portfolio-theme', theme);
        window.dispatchEvent(new Event('themeChanged'));
    }

    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    applyTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const newTheme = htmlEl.classList.contains('light') ? 'dark' : 'light';
        applyTheme(newTheme);
    });
}

// ==========================================================================
// TYPING ANIMATION
// ==========================================================================
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    const cursor = document.querySelector('.typing-cursor');
    if (!typingElement) return;

    const texts = [
        'Software Engineer',
        'Web Developer',
        'UI/UX Designer',
        'Problem Solver'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before next word
        }

        setTimeout(type, typingSpeed);
    }

    // Start typing animation
    setTimeout(type, 1000);

    // Cursor blink effect
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
}

// ==========================================================================
// PAGE TRANSITIONS & MODALS
// ==========================================================================
function initPageTransitions(projectsData) {
    const detailWrapper = document.getElementById('project-detail');
    const backBtn = document.getElementById('back-to-main');

    function showDetailPage(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        document.getElementById('detail-title').innerText = project.title;
        document.getElementById('detail-description').innerText = project.longDescription;
        document.getElementById('detail-image').src = project.detailImageSrc || project.imageSrc;
        document.getElementById('detail-demo-link').href = project.liveDemoUrl;
        document.getElementById('detail-github-link').href = project.githubUrl;
        document.getElementById('detail-tech').innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

        detailWrapper.classList.remove('page-hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    function hideDetailPage() {
        detailWrapper.classList.add('page-hidden');
        document.body.style.overflow = ''; // Restore scroll
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-project-id]')) {
            showDetailPage(parseInt(e.target.closest('[data-project-id]').dataset.projectId));
        }
    });

    backBtn.addEventListener('click', hideDetailPage);

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !detailWrapper.classList.contains('page-hidden')) {
            hideDetailPage();
        }
    });
}

// ==========================================================================
// TAB SYSTEM
// ==========================================================================
function initTabs() {
    const tabContainer = document.querySelector('.tab-container');
    if (!tabContainer) return;

    const tabButtons = tabContainer.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Get tab id and show corresponding content
            const tabId = button.dataset.tab;
            tabContents.forEach(content => {
                if (content.id === `tab-content-${tabId}`) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });
}

// ==========================================================================
// GENERATE PROJECT CARDS
// ==========================================================================
function generateProjectCards(projectsData) {
    const container = document.getElementById('tab-content-projects');
    if (!container) return;

    const scrollWrapper = document.createElement('div');
    scrollWrapper.className = 'projects-container';

    const grid = document.createElement('div');
    grid.className = 'projects-grid';

    grid.innerHTML = projectsData.map(project => `
        <div class="project-card glass-card" data-aos="fade-up" data-project-id="${project.id}">
            <div class="overflow-hidden h-52 rounded-t-2xl">
                <img src="${project.imageSrc}" alt="${project.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-3" style="color: var(--text-primary)">${project.title}</h3>
                <p class="text-sm mb-4 flex-grow" style="color: var(--text-secondary)">${project.shortDescription}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tech.slice(0, 3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div class="flex justify-between items-center mt-auto pt-4" style="border-top: 1px solid var(--glass-border)">
                    <button class="font-bold" style="color: var(--accent-primary); transition: all 0.2s;">
                        Details →
                    </button>
                    <a href="${project.liveDemoUrl}" target="_blank" class="font-semibold text-sm hover:text-accent-primary" style="color: var(--text-secondary)">
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');

    scrollWrapper.appendChild(grid);
    container.innerHTML = '';
    container.appendChild(scrollWrapper);
}

// ==========================================================================
// GENERATE CERTIFICATE CARDS
// ==========================================================================
function generateCertificateCards(certificatesData) {
    const certificatesContainer = document.getElementById('tab-content-certificates');
    if (!certificatesContainer || certificatesData.length === 0) return;

    const grid = document.createElement('div');
    grid.className = 'grid md:grid-cols-2 lg:grid-cols-3 gap-8';

    grid.innerHTML = certificatesData.map(cert => `
        <a href="${cert.credentialUrl}" target="_blank" class="glass-card block" data-aos="fade-up">
            <div class="overflow-hidden h-48 rounded-t-2xl">
                <img src="${cert.imageUrl}" alt="Sertifikat ${cert.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-6">
                <h3 class="font-bold" style="color: var(--text-primary)">${cert.title}</h3>
                <p class="text-sm mt-1" style="color: var(--text-secondary)">Diterbitkan oleh: <strong>${cert.issuer}</strong></p>
                <p class="text-xs mt-2 opacity-75" style="color: var(--text-muted)">${cert.date}</p>
            </div>
        </a>
    `).join('');

    certificatesContainer.innerHTML = '';
    certificatesContainer.appendChild(grid);
}

// ==========================================================================
// COUNTER ANIMATION ON SCROLL
// ==========================================================================
function initCounterUpOnScroll() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    let hasAnimated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            };

            updateCounter();
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('#stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// ==========================================================================
// NAVIGATION SCROLL SPY
// ==========================================================================
function initNavScrollSpy() {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active-nav');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active-nav');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// ==========================================================================
// SMOOTH SCROLL
// ==========================================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================================================
// CONSTELLATION CANVAS ANIMATION
// ==========================================================================
function initConstellation() {
    const canvas = document.getElementById('constellation-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const homeSection = document.getElementById('home');
    let particlesArray = [];

    function resizeCanvas() {
        canvas.width = homeSection.offsetWidth;
        canvas.height = homeSection.offsetHeight;
    }
    resizeCanvas();

    const getColors = () => ({
        particleColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim()
    });
    let { particleColor } = getColors();

    const mouse = { x: null, y: null, radius: 150 };

    canvas.addEventListener('mousemove', (e) => {
        mouse.x = e.offsetX;
        mouse.y = e.offsetY;
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor(x, y, dX, dY, s, c) {
            this.x = x;
            this.y = y;
            this.directionX = dX;
            this.directionY = dY;
            this.size = s;
            this.color = c;
            this.baseSize = s;
            this.pulseAngle = Math.random() * Math.PI * 2;
            this.velocityX = 0;
            this.velocityY = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        update() {
            // Bounce off edges
            if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y + this.size > canvas.height || this.y - this.size < 0) {
                this.directionY = -this.directionY;
            }

            // Mouse interaction - smooth push effect
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.velocityX -= (dx / distance) * force * 2;
                    this.velocityY -= (dy / distance) * force * 2;
                }
            }

            // Friction
            this.velocityX *= 0.95;
            this.velocityY *= 0.95;

            // Random drift
            this.directionX += (Math.random() - 0.5) * 0.02;
            this.directionY += (Math.random() - 0.5) * 0.02;

            // Limit speed
            const maxSpeed = 0.5;
            if (Math.abs(this.directionX) > maxSpeed) {
                this.directionX = Math.sign(this.directionX) * maxSpeed;
            }
            if (Math.abs(this.directionY) > maxSpeed) {
                this.directionY = Math.sign(this.directionY) * maxSpeed;
            }

            // Pulse effect
            this.pulseAngle += 0.03;
            this.size = this.baseSize + Math.sin(this.pulseAngle) * 0.5;

            // Update position
            this.x += this.directionX + this.velocityX;
            this.y += this.directionY + this.velocityY;

            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        const numberOfParticles = (canvas.width * canvas.height) / 9000;

        for (let i = 0; i < numberOfParticles; i++) {
            const size = (Math.random() * 2) + 1;
            const x = Math.random() * (canvas.width - size * 2) + size;
            const y = Math.random() * (canvas.height - size * 2) + size;
            const dX = (Math.random() * 0.6) - 0.3;
            const dY = (Math.random() * 0.6) - 0.3;
            particlesArray.push(new Particle(x, y, dX, dY, size, particleColor));
        }
    }

    function getConnectDistance() {
        return (canvas.width / 7) * (canvas.height / 7);
    }

    function connect() {
        const connectDistanceSquared = getConnectDistance();

        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distance = dx * dx + dy * dy;

                if (distance < connectDistanceSquared) {
                    const opacity = 1 - (distance / connectDistanceSquared);
                    ctx.strokeStyle = `rgba(${hexToRgb(particleColor)}, ${opacity * 0.4})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }

        connect();
    }

    // Event listeners
    window.addEventListener('resize', () => {
        resizeCanvas();
        init();
    });

    window.addEventListener('themeChanged', () => {
        setTimeout(() => {
            ({ particleColor } = getColors());
            init();
        }, 100);
    });

    function hexToRgb(hex) {
        if (!hex) return '0, 255, 151';

        hex = hex.trim();
        let r = 0, g = 0, b = 0;

        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
            r = parseInt(hex.substring(1, 3), 16);
            g = parseInt(hex.substring(3, 5), 16);
            b = parseInt(hex.substring(5, 7), 16);
        }

        return `${r}, ${g}, ${b}`;
    }

    init();
    animate();
}