document.addEventListener('DOMContentLoaded', function() {
    // --- DATABASE PROYEK ANDA ---
    const projectsData = [
        { id: 1, title: 'Sistem Pakar Certainty Factor', shortDescription: 'Aplikasi web untuk mendiagnosis kerusakan komputer menggunakan metode CF.', longDescription: 'Sistem Pakar ini adalah aplikasi web canggih yang dibangun menggunakan framework Laravel. Tujuannya adalah untuk membantu pengguna non-teknis mendiagnosis masalah pada komputer mereka. Aplikasi ini menggunakan algoritma Certainty Factor (CF) untuk menghitung tingkat keyakinan dari setiap kemungkinan kerusakan berdasarkan gejala yang dipilih pengguna, memberikan hasil yang akurat dan mudah dipahami.', imageSrc: 'assets/img/proyek1.png', detailImageSrc: 'assets/img/proyek1.png', tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'], liveDemoUrl: '#', githubUrl: '#'},
        { id: 2, title: 'AutoChat-Discord', shortDescription: 'Solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal.', longDescription: 'AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal. Pengguna dapat menentukan saluran tujuan, isi pesan, dan interval penundaan pengiriman pesan. Program ini berjalan 24/7, memungkinkan pengiriman pesan otomatis tanpa intervensi manual, sehingga memudahkan promosi atau komunikasi di Discord secara efisien.', imageSrc: 'assets/img/proyek2.png', detailImageSrc: 'assets/img/proyek2.png', tech: ['Python', 'Discord.py', 'Asyncio'], liveDemoUrl: '#', githubUrl: '#'},
        { id: 3, title: 'Buku Catatan Online', shortDescription: 'Website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola catatan.', longDescription: 'Ini adalah aplikasi CRUD (Create, Read, Update, Delete) klasik yang dibangun untuk melatih fundamental pengembangan web. Pengguna dapat mendaftar, login, dan mengelola catatan pribadi mereka. Proyek ini menekankan pada arsitektur kode yang bersih dan fungsionalitas yang solid.', imageSrc: 'assets/img/proyek3.png', detailImageSrc: 'assets/img/proyek3.png', tech: ['CodeIgniter', 'PHP', 'Bootstrap'], liveDemoUrl: '#', githubUrl: '#'},
    ];
    
    // --- Inisialisasi Semua Fungsi Dinamis ---
    AOS.init({ duration: 800, once: true, offset: 50 });
    initThemeSwitcher();
    initPageTransitions(projectsData);
    initTabs();
    generateProjectCards(projectsData);
    initCounterUpOnScroll();
    initNavScrollSpy();
    initNavClickHandling(); // <-- FUNGSI BARU DITAMBAHKAN
});

// 1. Inisialisasi Pengalih Tema (Dark/Light)
function initThemeSwitcher() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const htmlEl = document.documentElement;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            htmlEl.classList.add('dark');
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
            localStorage.setItem('color-theme', 'dark');
        } else {
            htmlEl.classList.remove('dark');
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
            localStorage.setItem('color-theme', 'light');
        }
    };
    const savedTheme = localStorage.getItem('color-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
    themeToggleBtn.addEventListener('click', () => applyTheme(htmlEl.classList.contains('dark') ? 'light' : 'dark'));
}

// 2. Inisialisasi Transisi Halaman (Main <-> Detail)
function initPageTransitions(projectsData) {
    const mainWrapper = document.getElementById('main-content-wrapper');
    const detailWrapper = document.getElementById('project-detail');
    const backBtn = document.getElementById('back-to-main');
    
    const showMainPage = () => {
        detailWrapper.classList.add('page-hidden');
        setTimeout(() => {
            detailWrapper.classList.add('hidden');
            mainWrapper.classList.remove('hidden');
            setTimeout(() => mainWrapper.classList.remove('page-hidden'), 50);
        }, 400);
    };

    const showDetailPage = (projectId) => {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;
        
        document.getElementById('detail-title').innerText = project.title;
        document.getElementById('detail-description').innerText = project.longDescription;
        document.getElementById('detail-image').src = project.detailImageSrc || project.imageSrc;
        document.getElementById('detail-demo-link').href = project.liveDemoUrl;
        document.getElementById('detail-github-link').href = project.githubUrl;
        const techContainer = document.getElementById('detail-tech');
        techContainer.innerHTML = project.tech.map(t => `<span class="py-1 px-3 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800">${t}</span>`).join('');
        
        mainWrapper.classList.add('page-hidden');
        setTimeout(() => {
            mainWrapper.classList.add('hidden');
            detailWrapper.classList.remove('hidden');
            window.scrollTo(0, 0);
            setTimeout(() => detailWrapper.classList.remove('page-hidden'), 50);
        }, 400);
    };

    document.addEventListener('click', (e) => {
        if (e.target.matches('.details-btn') || e.target.closest('.details-btn')) {
            const btn = e.target.closest('.details-btn');
            showDetailPage(parseInt(btn.dataset.projectId));
        }
    });

    backBtn.addEventListener('click', showMainPage);
}

// 3. Inisialisasi Fungsionalitas Tab
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const tabId = button.dataset.tab;
            tabContents.forEach(content => {
                content.id === `tab-content-${tabId}` ? content.classList.remove('hidden') : content.classList.add('hidden');
            });
        });
    });
    document.querySelector('.tab-btn[data-tab="projects"]').classList.add('active');
}

// 4. Generate Kartu Proyek
function generateProjectCards(projectsData) {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up">
            <div class="overflow-hidden h-48"><img src="${project.imageSrc}" alt="${project.title}" class="w-full h-full object-cover"></div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">${project.shortDescription}</p>
                <div class="flex justify-between items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button data-project-id="${project.id}" class="details-btn font-semibold text-sm text-indigo-600 dark:text-cyan-400 hover:underline">Details →</button>
                    <a href="${project.liveDemoUrl}" target="_blank" class="font-semibold text-sm text-gray-600 dark:text-gray-400 hover:underline">Live Demo</a>
                </div>
            </div>
        </div>
    `).join('');
}

// 5. Inisialisasi Animasi Angka Berjalan saat Scroll
function initCounterUpOnScroll() {
    const statsSection = document.getElementById('stats-section');
    if (!statsSection) return;
    const counters = statsSection.querySelectorAll('[data-count]');
    let isAnimated = false;

    const animateCounters = () => {
        if (isAnimated) return;
        isAnimated = true;
        counters.forEach(counter => {
            const target = +counter.dataset.count;
            let current = 0;
            const increment = target / 100;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = `${Math.ceil(current)}+`;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = `${target}+`;
                }
            };
            updateCounter();
        });
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// 6. Inisialisasi Penanda Navigasi Aktif saat Scroll (Scroll Spy)
function initNavScrollSpy() {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                
                navLinks.forEach(link => link.classList.remove('active-nav'));
                if (activeLink) {
                    activeLink.classList.add('active-nav');
                }
            }
        });
    }, { 
        rootMargin: '-100px 0px -65% 0px' // <-- PENGATURAN DISESUAIKAN LAGI UNTUK LEBIH ANDAL
    });

    sections.forEach(section => observer.observe(section));
}

// 7. FUNGSI BARU: Menangani Klik pada Navigasi Secara Langsung
function initNavClickHandling() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Hapus kelas aktif dari semua link
            navLinks.forEach(nav => nav.classList.remove('active-nav'));
            
            // Tambahkan kelas aktif ke link yang baru saja diklik
            this.classList.add('active-nav');
        });
    });
}