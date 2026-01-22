// Console mesajı
console.log("%c🚨 DUR BAKALIM İHTİYAR! 🚨", "color: red; font-size: 24px; font-weight: bold;");
console.log("%cKodları incelediğini görüyorum. Eğer bir açık bulursan contact@tahamis.com.tr adresinden bana ulaşabilirsin.", "color: red; font-size: 16px; font-weight: bold;");

// Sabit projeler listesi - buraya kendi projelerinizi ekleyebilirsiniz
const projects = [
    {
        id: 1,
        title: "Electron-PassVault-",
        description: {
            en: "Electron PassVault is a desktop application that allows users to securely store usernames and passwords for websites. It stores data locally in encrypted form using the AES-256-CBC encryption algorithm.",
            tr: "Electron PassVault, kullanıcıların web siteleri için kullanıcı adı ve şifrelerini güvenli bir şekilde saklayabilecekleri masaüstü uygulamasıdır. AES-256-CBC şifreleme algoritması kullanarak verileri yerel olarak şifreli bir şekilde saklar."
        },
        tags: ["JavaScript", "Electron.js", "React", "Node.js"],
        demo: "",
        github: "https://github.com/tah4mis/Electron-PassVault-"
    },
    {
        id: 2,
        title: "book-management-api",
        description: {
            en: "Manage your book collection with a modern and easy-to-use RESTful API. Built with Node.js and Express.js.",
            tr: "Modern ve kullanımı kolay bir RESTful API ile kitap koleksiyonunuzu yönetin. Node.js ve Express.js kullanılarak geliştirilmiştir."
        },
        tags: ["JavaScript","Express.js", "Node.js", "CORS", "Helmet","Dotenv","Morgan"],
        demo: "",
        github: "https://github.com/tah4mis/book-management-api"
    },
    {
        id: 3,
        title: "binary-analyzer-cpp",
        description: {
            en: "This project is an advanced C++ application developed for analyzing binary files. It offers features such as file type detection, hex dump, string extraction, pattern search, and detailed analysis reports.",
            tr: "Bu proje, binary dosyaları analiz etmek için geliştirilmiş gelişmiş bir C++ uygulamasıdır. Dosya türü tespiti, hex dump, string extraction, pattern arama ve detaylı analiz raporları gibi özellikler sunar."
        },
        tags: ["C++", "CMake 3.10+ (optional)"],
        demo: "",
        github: "https://github.com/tah4mis/binary-analyzer-cpp"
    },
    {
        id: 4,
        title: "Kanban-Desktop",
        description: {
            en: "Electron-based desktop Kanban board application. Designed with task management, drag & drop functionality, and a modern interface.",
            tr: "Electron tabanlı masaüstü Kanban tahtası uygulaması. Görev yönetimi, drag & drop özelliği ve modern arayüz ile tasarlandı."
        },
        tags: ["HTML5", "CSS3", "JavaScript","Electron.js"],
        demo: "#",
        github: "https://github.com/tah4mis/Kanban-Desktop"
    },
    {
        id: 5,
        title: "crypto-price-analyzer",
        description: {
            en: "This project was developed to analyze prices in the cryptocurrency market and predict future prices using machine learning.",
            tr: "Bu proje, kripto para piyasasındaki fiyatları analiz etmek ve makine öğrenimi ile gelecekteki fiyatları tahmin etmek amacıyla geliştirilmiştir."
        },
        tags: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "NumPy"],
        demo: "",
        github: "https://github.com/tah4mis/crypto-price-analyzer"
    },
    {
        id: 6,
        title: "aracihale-app",
        description: {
            en: "This project is a web application developed to manage vehicle auction systems. The system provides a secure and transparent auction platform for vehicle buyers and sellers.",
            tr: "Bu proje, araç ihale sistemini yönetmek için geliştirilmiş bir web uygulamasıdır. Sistem, araç alıcıları ve satıcıları için güvenli ve şeffaf bir ihale platformu sunmaktadır."
        },
        tags: ["C#", ".NET Core", "ASP.NET Core MVC", "Entity Framework", "Entity Framework", "Swagger/OpenAPI", "JWT Authentication", "Unit of Work Pattern",
            "Middleware configuration: Exception Handling, Request Logging, CORS Policy..", "React.js", "Microsoft SQL Server"],
        demo: "#",
        github: "https://github.com/tah4mis/aracihale"
    },
    {
        id: 7,
        title: "BlogSite",
        description: {
            en: "This project is a blog site built with ASP.NET Core MVC. Users can write, edit, and filter articles by categories.",
            tr: "Bu proje ASP.NET Core MVC kullanılarak geliştirilmiş bir blog sitesidir. Kullanıcılar makale yazabilir, düzenleyebilir ve kategorilere göre filtreleyebilir."
        },
        tags: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Bootstrap 5", "Identity Framework",],
        demo: "",
        github: "https://github.com/tah4mis/BlogSite"
    },
    {
        id: 8,
        title: "SimpleDoctor",
        description: {
            en: "This project is a doctor appointment system built with ASP.NET Core MVC.",
            tr: "Bu proje, ASP.NET Core MVC kullanılarak geliştirilmiş bir doktor randevu sistemidir."
        },
        tags: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Bootstrap 5", "Identity Framework", "jQuery"],
        demo: "",
        github: "https://github.com/tah4mis/SimpleDoctor"
    },
    {
        id: 9,
        title: "RotanaMobil",
        description: {
            en: "Rotana Mobile is a comprehensive travel and accommodation management application built with Flutter. This application provides a seamless experience for managing various aspects of travel and accommodation services.",
            tr: "Rotana Mobil, Flutter ile geliştirilmiş kapsamlı bir seyahat ve konaklama yönetimi uygulamasıdır. Bu uygulama, seyahat ve konaklama hizmetlerinin çeşitli yönlerini yönetmek için kusursuz bir deneyim sunar."
        },
        tags: ["Flutter - UI Framework", "Dart", "Firebase"],
        demo: "",
        github: "https://github.com/tah4mis/RotanaMobil"
    },
    {
        id: 10,
        title: "zenit_ring",
        description: {
            en: "Flutter-based mobile application for NFC-enabled ring. Provides smart ring control and data management with NFC technology.",
            tr: "NFC özellikli yüzük için Flutter tabanlı mobil uygulama. NFC teknolojisi ile akıllı yüzük kontrolü ve veri yönetimi sağlar."
        },
        tags: ["Flutter - UI Framework", "Dart", "Firebase"],
        demo: "",
        github: "https://github.com/tah4mis/zenit_ring"
    },
    {
        id: 11,
        title: "office-project-management-app-demo",
        description: {
            en: "An office management application developed to facilitate communication and task tracking for modern teams.",
            tr: "Modern ekiplerin iletişim ve iş takibini kolaylaştırmak için geliştirilmiş bir ofis yönetim uygulaması."
        },
        tags: ["React 19", "TailwindCSS", "lucide-react → icon set", "React Scripts"],
        demo: "",
        github: "https://github.com/tah4mis/office-project-management-app-demo"
    },
    {
        id: 12,
        title: "create-project-cli",
        description: {
            en: "Minimal CLI tool for creating React, Express, and full-stack projects with TypeScript, Docker, and CI/CD. Provides quick project setup and configuration.",
            tr: "TypeScript, Docker ve CI/CD ile React, Express ve tam yığın projeler oluşturmak için minimal CLI aracı. Hızlı proje başlatma ve yapılandırma sağlar."
        },
        tags: ["full-stack"],
        demo: "",
        github: "https://github.com/tah4mis/create-project-cli"
    },
    {
        id: 13,
        title: "gitpush-cli",
        description: {
            en: "CLI tool for easy project push to GitHub - Built with Node.js, enables commit and push with a single command, features branch management and automatic file creation",
            tr: "GitHub'a kolay proje push etme CLI aracı - Node.js ile geliştirilmiş, tek komutla commit ve push yapabilen, branch yönetimi ve otomatik dosya oluşturma özellikli CLI tool"
        },
        tags: [" Node.js "],
        demo: "",
        github: "https://github.com/tah4mis/gitpush-cli"
    },
    {
        id: 14,
        title: "cryptodash-flow",
        description: {
            en: "A modern cryptocurrency and exchange rates dashboard application. Built with React, TypeScript, TailwindCSS, and Shadcn/UI.",
            tr: "Modern bir kripto para ve döviz kurları dashboard uygulaması. React, TypeScript, TailwindCSS ve Shadcn/UI kullanılarak geliştirilmiştir."
        },
        tags: ["Node.js 18+ and npm", "Electron", "TailwindCSS", "Vite", "React Router DOM"],
        demo: "",
        github: "https://github.com/tah4mis/cryptodash-flow"
    },
     {
        id: 15,
        title: "Port-Scanner-Tool",
        description: {
            en: "Port Scanner Tool is an advanced TCP/UDP port scanner and service detection tool for testing and education, written in Python.",
            tr: "Port Scanner Tool, Python ile yazılmış gelişmiş bir TCP/UDP port tarayıcı ve servis tespit test ve eğitim aracıdır."
        },
        tags: ["Python"],
        demo: "",
        github: "https://github.com/tah4mis/Port-Scanner-Tool"
    },
    {
        id: 16,
        title: "PwdGen",
        description: {
            en: "This project is a simple Python GUI application that allows users to easily generate strong passwords. Built with Tkinter.",
            tr: "Bu proje, kullanıcıların kolayca güçlü şifreler oluşturmasını sağlayan basit bir Python GUI uygulamasıdır. Tkinter kullanılarak geliştirilmiştir."
        },
        tags: ["Python"],
        demo: "",
        github: "https://github.com/tah4mis/PwdGen"
    },
        {
        id: 17,
        title: "crypto-price-analyzer",
        description: {
            en: "Python project that extracts cryptocurrency market data and performs price analysis using technical analysis and machine learning",
            tr: "Teknik analiz ve makine öğrenimi kullanarak kripto para piyasası verilerini çıkaran ve fiyat analizi gerçekleştiren Python projesi"
        },
        tags: ["Python"],
        demo: "",
        github: "https://github.com/tah4mis/crypto-price-analyzer"
    },
    {
        id: 18,
        title: "Yanibasinda-Joint-Project",
        description: {
            en: "Joint project developed with Python",
            tr: "Python ile geliştirilmiş ortak proje"
        },
        tags: ["Python"],
        demo: "",
        github: "https://github.com/tah4mis/Yanibasinda-Joint-Project"
    },
    {
        id: 19,
        title: "3D-Pursuit-Simulation",
        description: {
            en: "A real-time pursuit simulation where a soldier sphere dynamically tracks an enemy sphere in a 3D environment",
            tr: "3D ortamda asker küresinin düşman küresini dinamik olarak takip ettiği gerçek zamanlı bir takip simülasyonu"
        },
        tags: ["Python", "3D Graphics"],
        demo: "",
        github: "https://github.com/tah4mis/3D-Pursuit-Simulation-"
    }
];

// Matrix rain effect
function initMatrix() {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const letters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px JetBrains Mono';
        
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 100);
}

// Projeleri render et
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const countEl = document.getElementById('projectCount');
    
    grid.innerHTML = '';
    countEl.textContent = projects.length;

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.draggable = true;
        projectCard.setAttribute('data-project-id', project.id);
        
        // Get description based on current language
        const description = typeof project.description === 'object' 
            ? project.description[currentLang] || project.description.en
            : project.description;
        
        projectCard.innerHTML = `
            <div class="project-header drag-handle">
                <div class="project-dots">
                    <div class="terminal-dot dot-red"></div>
                    <div class="terminal-dot dot-yellow"></div>
                    <div class="terminal-dot dot-green"></div>
                </div>
                <div class="drag-icon">⋮⋮</div>
            </div>
            <div class="project-body">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description" data-project-desc="${project.id}">${description}</p>
                <div class="project-stack">
                    ${project.tags.map(tag => `<span class="stack-item">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demo && project.demo !== '#' ? `<a href="${project.demo}" class="project-link" target="_blank" data-i18n="projects.liveDemo">Canlı Demo</a>` : ''}
                    ${project.github ? `<a href="${project.github}" class="project-link" target="_blank" data-i18n="projects.sourceCode">Kaynak Kod</a>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(projectCard);
    });

    // Drag and drop functionality
    initDragAndDrop();
    
    // Dil güncellemesini yap (projeler render edildikten sonra)
    setTimeout(() => {
        setLanguage(currentLang);
    }, 100);
}

// Drag and Drop işlevselliği
function initDragAndDrop() {
    const cards = document.querySelectorAll('.project-card');
    let draggedElement = null;

    cards.forEach(card => {
        card.addEventListener('dragstart', function(e) {
            draggedElement = this;
            this.style.opacity = '0.5';
            e.dataTransfer.effectAllowed = 'move';
        });

        card.addEventListener('dragend', function(e) {
            this.style.opacity = '1';
            cards.forEach(c => c.classList.remove('drag-over'));
        });

        card.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            
            if (this !== draggedElement) {
                this.classList.add('drag-over');
            }
            return false;
        });

        card.addEventListener('dragleave', function(e) {
            this.classList.remove('drag-over');
        });

        card.addEventListener('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (draggedElement !== this) {
                const grid = document.getElementById('projects-grid');
                const allCards = [...grid.children];
                const draggedIndex = allCards.indexOf(draggedElement);
                const targetIndex = allCards.indexOf(this);
                
                if (draggedIndex < targetIndex) {
                    this.parentNode.insertBefore(draggedElement, this.nextSibling);
                } else {
                    this.parentNode.insertBefore(draggedElement, this);
                }
            }
            
            this.classList.remove('drag-over');
            return false;
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Matrix efektini başlat
    initMatrix();
    
    // Language switcher (projeler render edilmeden önce)
    initLanguageSwitcher();
    
    // Projeleri render et
    renderProjects();
    
    // Dil güncellemesini tekrar yap (projeler render edildikten sonra)
    setLanguage(currentLang);
    
    // Mobile menu toggle
    initMobileMenu();

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 15, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 15, 0.95)';
        }
    });

    // Responsive matrix canvas
    window.addEventListener('resize', function() {
        const canvas = document.getElementById('matrix');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});

// Image Modal Functions
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    
    // ESC tuşu ile kapatma
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Modal dışına tıklayınca kapatma
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Language Switcher
const translations = {
    tr: {
        'nav.home': 'ana sayfa',
        'nav.projects': 'projeler',
        'nav.design': 'tasarım',
        'nav.cv': 'cv',
        'hero.title': 'Full Stack Developer & Designer',
        'hero.learning': '// Sürekli Öğreniyorum...',
        'hero.description': 'Kod yazmayı seven, problemi çözmeyi seven ve sürekli öğrenen bir geliştiriciyim. Modern teknolojiler kullanarak etkili ve ölçeklenebilir çözümler üretiyorum.',
        'hero.explore': 'projeler.keşfet()',
        'hero.contact': 'iletişim.kur()',
        'projects.prefix': '// Projelerim',
        'projects.title': 'Son Çalışmalar',
        'projects.description': 'Son zamanlarda üzerinde çalıştığım projeler ve açık kaynak katkılarım',
        'projects.count': 'Projeler',
        'projects.liveDemo': 'Canlı Demo',
        'projects.sourceCode': 'Kaynak Kod',
        'design.prefix': '// Tasarım Portföyü',
        'design.title': 'Grafik & Tasarım Portföyü',
        'design.description': 'Grafik tasarım ve görsel çalışmalarım',
        'design.note': 'Daha fazlası için iletişime geçin',
        'design.enlarge': 'Resimleri büyütün lütfen',
        'cv.prefix': '// Özgeçmiş',
        'cv.title': 'Özgeçmiş',
        'cv.description': 'Detaylı özgeçmişimi aşağıda inceleyebilirsiniz',
        'cv.download': 'CV İndir',
        'cv.turkish': 'Türkçe CV',
        'cv.europass': 'Europass CV',
        'cv.pdfError': 'PDF görüntülenemiyor.',
        'cv.clickHere': 'Buraya tıklayarak açın',
        'modal.fullSize': 'Tam Boyut Görsel'
    },
    en: {
        'nav.home': 'home',
        'nav.projects': 'projects',
        'nav.design': 'design',
        'nav.cv': 'cv',
        'hero.title': 'Full Stack Developer & Designer',
        'hero.learning': '// Always Learning...',
        'hero.description': 'I am a developer who loves coding, solving problems, and constantly learning. I create effective and scalable solutions using modern technologies.',
        'hero.explore': 'projects.explore()',
        'hero.contact': 'contact.me()',
        'projects.prefix': '// My Projects',
        'projects.title': 'Recent Work',
        'projects.description': 'Recent projects I\'ve been working on and open source contributions',
        'projects.count': 'Projects',
        'projects.liveDemo': 'Live Demo',
        'projects.sourceCode': 'Source Code',
        'design.prefix': '// Design Portfolio',
        'design.title': 'Graphic & Design Portfolio',
        'design.description': 'Graphic design and visual works • Click to enlarge images',
        'design.note': 'Contact me for more',
        'design.enlarge': 'Please enlarge the images',
        'cv.prefix': '// Resume',
        'cv.title': 'Resume',
        'cv.description': 'You can review my detailed resume below',
        'cv.download': 'Download CV',
        'cv.turkish': 'Turkish CV',
        'cv.europass': 'Europass CV',
        'cv.pdfError': 'PDF cannot be displayed.',
        'cv.clickHere': 'Click here to open',
        'modal.fullSize': 'Full Size Image'
    }
};

let currentLang = localStorage.getItem('language') || 'tr';

function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Set initial language
    setLanguage(currentLang);
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            currentLang = lang;
            localStorage.setItem('language', lang);
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update all elements with data-i18n-alt attribute
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('alt', translations[lang][key]);
        }
    });
    
    // Update project descriptions
    document.querySelectorAll('[data-project-desc]').forEach(element => {
        const projectId = parseInt(element.getAttribute('data-project-desc'));
        const project = projects.find(p => p.id === projectId);
        if (project && typeof project.description === 'object') {
            element.textContent = project.description[lang] || project.description.en;
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

