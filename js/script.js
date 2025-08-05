document.addEventListener('DOMContentLoaded', function() {
    const projectsData = [
        { id: 1, title: 'Sistem Pakar Certainty Factor', shortDescription: 'Aplikasi web untuk mendiagnosis kerusakan komputer menggunakan metode CF.', longDescription: 'Sistem Pakar ini adalah aplikasi web canggih yang dibangun menggunakan framework Laravel. Tujuannya adalah untuk membantu pengguna non-teknis mendiagnosis masalah pada komputer mereka. Aplikasi ini menggunakan algoritma Certainty Factor (CF) untuk menghitung tingkat keyakinan dari setiap kemungkinan kerusakan berdasarkan gejala yang dipilih pengguna, memberikan hasil yang akurat dan mudah dipahami.', imageSrc: 'assets/img/proyek1.png', detailImageSrc: 'assets/img/proyek1.png', tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'], liveDemoUrl: '#', githubUrl: '#'},
        { id: 2, title: 'AutoChat-Discord', shortDescription: 'Solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal.', longDescription: 'AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal. Pengguna dapat menentukan saluran tujuan, isi pesan, dan interval penundaan pengiriman pesan. Program ini berjalan 24/7, memungkinkan pengiriman pesan otomatis tanpa intervensi manual, sehingga memudahkan promosi atau komunikasi di Discord secara efisien.', imageSrc: 'assets/img/proyek2.png', detailImageSrc: 'assets/img/proyek2.png', tech: ['Python', 'Discord.py', 'Asyncio'], liveDemoUrl: '#', githubUrl: '#'},
        { id: 3, title: 'Buku Catatan Online', shortDescription: 'Website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola catatan.', longDescription: 'Ini adalah aplikasi CRUD (Create, Read, Update, Delete) klasik yang dibangun untuk melatih fundamental pengembangan web. Pengguna dapat mendaftar, login, dan mengelola catatan pribadi mereka. Proyek ini menekankan pada arsitektur kode yang bersih dan fungsionalitas yang solid.', imageSrc: 'assets/img/proyek3.png', detailImageSrc: 'assets/img/proyek3.png', tech: ['CodeIgniter', 'PHP', 'Bootstrap'], liveDemoUrl: '#', githubUrl: '#'},
    ];
    
    AOS.init({ duration: 800, once: true, offset: 50 });
    initThemeSwitcher();
    initPageTransitions(projectsData);
    initTabs();
    generateProjectCards(projectsData);
    initCounterUpOnScroll();
    initNavScrollSpy();
    initNavClickHandling();
    initConstellation();
});

function initThemeSwitcher() {
    // ... (Fungsi ini tidak berubah)
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

function initPageTransitions(projectsData) {
    // ... (Fungsi ini tidak berubah)
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
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-project-id]')) {
             showDetailPage(parseInt(e.target.closest('[data-project-id]').dataset.projectId));
        }
    });

    backBtn.addEventListener('click', () => detailWrapper.classList.add('page-hidden'));
}

function initTabs() {
    // ... (Fungsi ini tidak berubah)
    const tabContainer = document.querySelector('.tab-container');
    if (!tabContainer) return;
    
    const tabButtons = tabContainer.querySelectorAll('.tab-btn');
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
    if(tabButtons.length > 0) tabButtons[0].classList.add('active');
}

function generateProjectCards(projectsData) {
    // ... (Fungsi ini tidak berubah)
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="glass-card" data-aos="fade-up" data-project-id="${project.id}">
            <div class="overflow-hidden h-48 rounded-t-2xl"><img src="${project.imageSrc}" alt="${project.title}" class="w-full h-full object-cover"></div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                <p class="text-sm mb-4 flex-grow">${project.shortDescription}</p>
                <div class="flex justify-between items-center mt-auto pt-4 border-t" style="border-color: var(--glass-border)">
                    <button class="details-btn font-bold">Details →</button>
                    <a href="${project.liveDemoUrl}" target="_blank" class="font-semibold text-sm">Live Demo</a>
                </div>
            </div>
        </div>
    `).join('');
}

function initCounterUpOnScroll() {
    // ... (Fungsi ini tidak berubah)
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length === 0) return;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
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
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.8 });
    counters.forEach(c => observer.observe(c));
}

function initNavScrollSpy() {
    // ... (Fungsi ini tidak berubah)
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                navLinks.forEach(link => link.classList.remove('active-nav'));
                if (activeLink) activeLink.classList.add('active-nav');
            }
        });
    }, { rootMargin: '-40% 0px -59% 0px' });
    sections.forEach(section => observer.observe(section));
}

function initNavClickHandling() {
    // ... (Fungsi ini tidak berubah)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active-nav'));
            this.classList.add('active-nav');
        });
    });
}

function initConstellation() {
    const canvas = document.getElementById('constellation-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const homeSection = document.getElementById('home');
    let particlesArray = [];
    let grid = [];
    
    const cellSize = 120; // Ukuran "kandang" virtual untuk partikel
    let columns, rows;

    function resizeCanvas() {
        canvas.width = homeSection.offsetWidth;
        canvas.height = homeSection.offsetHeight;
        columns = Math.ceil(canvas.width / cellSize);
        rows = Math.ceil(canvas.height / cellSize);
    }
    resizeCanvas();

    const getColors = () => ({
        particleColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-glow').trim(),
    });
    let { particleColor } = getColors();
    
    const mouse = { x: null, y: null, radius: 150 };
    canvas.addEventListener('mousemove', e => { mouse.x = e.offsetX; mouse.y = e.offsetY; });
    canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

    class Particle {
        constructor(x, y, dX, dY, s, c) {
            this.x = x; this.y = y; this.baseX = x; this.baseY = y;
            this.speedX = dX; this.speedY = dY;
            this.currentSpeedX = dX; this.currentSpeedY = dY;
            this.size = s; this.color = c;
            this.friction = 0.97;
            this.pushForce = 10;
            this.returnForce = 0.01;
        }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = this.color; ctx.fill(); }
        update() {
            // Interaksi mouse
            if (mouse.x !== null) {
                let dx = this.x - mouse.x;
                let dy = this.y - mouse.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.currentSpeedX += (dx / distance) * force * this.pushForce;
                    this.currentSpeedY += (dy / distance) * force * this.pushForce;
                }
            }
            
            // Kembali ke posisi awal (memberi efek 'mengambang')
            this.currentSpeedX += (this.baseX - this.x) * this.returnForce;
            this.currentSpeedY += (this.baseY - this.y) * this.returnForce;
            
            // Friksi
            this.currentSpeedX *= this.friction;
            this.currentSpeedY *= this.friction;

            // Batasan Tepi
            if (this.x + this.size > canvas.width || this.x - this.size < 0) this.currentSpeedX *= -1;
            if (this.y + this.size > canvas.height || this.y - this.size < 0) this.currentSpeedY *= -1;
            
            this.x += this.currentSpeedX;
            this.y += this.currentSpeedY;
            this.draw();
        }
    }
    
    function init() {
        particlesArray = [];
        let num = (canvas.width * canvas.height) / 20000;
        for (let i = 0; i < num; i++) {
            let size = (Math.random() * 2) + 1;
            let x = Math.random() * (canvas.width - size * 2) + size * 2;
            let y = Math.random() * (canvas.height - size * 2) + size * 2;
            let dX = (Math.random() * 0.4) - 0.2;
            let dY = (Math.random() * 0.4) - 0.2;
            particlesArray.push(new Particle(x, y, dX, dY, size, particleColor));
        }
    }

    const connectDistance = 120;

    function updateGrid() {
        grid = Array(rows * columns).fill(null).map(() => []);
        for (const particle of particlesArray) {
            let gridX = Math.floor(particle.x / cellSize);
            let gridY = Math.floor(particle.y / cellSize);
            if (gridX >= 0 && gridX < columns && gridY >= 0 && gridY < rows) {
                let index = gridY * columns + gridX;
                grid[index].push(particle);
            }
        }
    }

    function connect() {
        ctx.strokeStyle = `rgba(${hexToRgb(particleColor)}, 0.1)`;
        ctx.lineWidth = 1;
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < columns; x++) {
                let index = y * columns + x;
                for (const particle of grid[index]) {
                    // Cek sel sekitar
                    for (let dy = -1; dy <= 1; dy++) {
                        for (let dx = -1; dx <= 1; dx++) {
                            let neighborX = x + dx;
                            let neighborY = y + dy;
                            if (neighborX >= 0 && neighborX < columns && neighborY >= 0 && neighborY < rows) {
                                let neighborIndex = neighborY * columns + neighborX;
                                for (const neighbor of grid[neighborIndex]) {
                                    let dist = Math.sqrt((particle.x - neighbor.x) ** 2 + (particle.y - neighbor.y) ** 2);
                                    if (dist < connectDistance) {
                                        ctx.beginPath();
                                        ctx.moveTo(particle.x, particle.y);
                                        ctx.lineTo(neighbor.x, neighbor.y);
                                        ctx.stroke();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        updateGrid();
        for (let i = 0; i < particlesArray.length; i++) particlesArray[i].update();
        connect();
    }
    
    window.addEventListener('resize', () => { resizeCanvas(); init(); });
    window.addEventListener('themeChanged', () => {
        setTimeout(() => { ({ particleColor } = getColors()); init(); }, 100);
    });
    
    function hexToRgb(hex) {
        if(hex == null) return '255,255,255';
        let r = 0, g = 0, b = 0;
        if (hex.length == 4) { r = "0x" + hex[1] + hex[1]; g = "0x" + hex[2] + hex[2]; b = "0x" + hex[3] + hex[3]; }
        else if (hex.length == 7) { r = "0x" + hex[1] + hex[2]; g = "0x" + hex[3] + hex[4]; b = "0x" + hex[5] + hex[6]; }
        return `${+r},${+g},${+b}`;
    }
    
    init();
    animate();
}