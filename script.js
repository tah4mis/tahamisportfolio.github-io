// Console mesajı
console.log("%c🚨 DUR BAKALIM İHTİYAR! 🚨", "color: red; font-size: 24px; font-weight: bold;");
console.log("%cKodları incelediğini görüyorum. Eğer bir açık bulursan tahamis2016@gmail.com adresinden bana ulaşabilirsin.", "color: red; font-size: 16px; font-weight: bold;");

// Sabit projeler listesi - buraya kendi projelerinizi ekleyebilirsiniz
const projects = [
    {
        id: 1,
        title: "Electron-PassVault-",
        description: "Electron PassVault, kullanıcıların web siteleri için kullanıcı adı ve şifrelerini güvenli bir şekilde saklayabilecekleri masaüstü uygulamasıdır. AES-256-CBC şifreleme algoritması kullanarak verileri yerel olarak şifreli bir şekilde saklar..",
        tags: ["JavaScript", "Electron.js", "React", "Node.js"],
        demo: "",
        github: "https://github.com/tah4mis/Electron-PassVault-"
    },
    {
        id: 2,
        title: "book-management-api",
        description: "Modern ve kullanımı kolay bir RESTful API ile kitap koleksiyonunuzu yönetin. Node.js ve Express.js kullanılarak geliştirilmiştir.",
        tags: ["JavaScript","Express.js", "Node.js", "CORS", "Helmet","Dotenv","Morgan"],
        demo: "",
        github: "https://github.com/tah4mis/book-management-api"
    },
    {
        id: 3,
        title: "binary-analyzer-cpp",
        description: "Bu proje, binary dosyaları analiz etmek için geliştirilmiş gelişmiş bir C++ uygulamasıdır. Dosya türü tespiti, hex dump, string extraction, pattern arama ve detaylı analiz raporları gibi özellikler sunar.",
        tags: ["C++", "CMake 3.10+ (opsiyonel)"],
        demo: "",
        github: "https://github.com"
    },
    {
        id: 4,
        title: "Kanban-Desktop",
        description: "Modern ve responsive kişisel portföy sitesi. Dark theme, smooth animations ve mobile-first approach ile tasarlandı.",
        tags: ["HTML5", "CSS3", "JavaScript","Electron.js"],
        demo: "#",
        github: "https://github.com/tah4mis/Kanban-Desktop"
    },
    {
        id: 5,
        title: "crypto-price-analyzer",
        description: "Bu proje, kripto para piyasasındaki fiyatları analiz etmek ve makine öğrenimi ile gelecekteki fiyatları analiz etmek amacıyla geliştirilmiştir.",
        tags: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "NumPy"],
        demo: "",
        github: "https://github.com/tah4mis/crypto-price-analyzer"
    },
    {
        id: 6,
        title: "aracihale-app",
        description: "Bu proje, araç ihale sistemini yönetmek için geliştirilmiş bir web uygulamasıdır. Sistem, araç alıcıları ve satıcıları için güvenli ve şeffaf bir ihale platformu sunmaktadır.",
        tags: ["C#", ".NET Core", "ASP.NET Core MVC", "Entity Framework", "Entity Framework", "Swagger/OpenAPI", "JWT Authentication", "Unit of Work Pattern",
            "Middleware yapılandırması: Exception Handling,Request Logging,CORS Policy..", "React.js", "Microsoft SQL Server"],
        demo: "#",
        github: "https://github.com/tah4mis/aracihale"
    },
    {
        id: 7,
        title: "BlogSite",
        description: "Bu proje ASP.NET Core MVC kullanılarak geliştirilmiş bir blog sitesidir. Kullanıcılar makale yazabilir, düzenleyebilir ve kategorilere göre filtreleyebilir.",
        tags: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Bootstrap 5", "Identity Framework",],
        demo: "",
        github: "https://github.com/tah4mis/BlogSite"
    },
    {
        id: 8,
        title: "SimpleDoctor",
        description: "Bu proje, ASP.NET Core MVC kullanılarak geliştirilmiş bir doktor randevu sistemidir.",
        tags: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Bootstrap 5", "Identity Framework", "jQuery"],
        demo: "",
        github: "https://github.com/tah4mis/SimpleDoctor"
    },
    {
        id: 9,
        title: "RotanaMobil",
        description: "Rotana Mobil, Flutter ile geliştirilmiş kapsamlı bir seyahat ve konaklama yönetimi uygulamasıdır. Bu uygulama, seyahat ve konaklama hizmetlerinin çeşitli yönlerini yönetmek için kusursuz bir deneyim sunar.",
        tags: ["Flutter - UI Framework", "Dart", "Firebase"],
        demo: "",
        github: "https://github.com/tah4mis/RotanaMobil"
    },
    {
        id: 10,
        title: "zenit_ring",
        description: "NFC özellikli yüzük için Flutter tabanlı mobil uygulama.",
        tags: ["Flutter - UI Framework", "Dart", "Firebase"],
        demo: "",
        github: "https://github.com/tah4mis/zenit_ring"
    },
    {
        id: 11,
        title: "office-project-management-app-demo",
        description: "Modern ekiplerin iletişim ve iş takibini kolaylaştırmak için geliştirilmiş bir ofis yönetim uygulaması.",
        tags: ["React 19", "TailwindCSS", "lucide-react → ikon seti", "React Scripts"],
        demo: "",
        github: "https://github.com/tah4mis/office-project-management-app-demo"
    },
    {
        id: 12,
        title: "create-project-cli",
        description: "Hakkında TypeScript, Docker ve CI/CD ile React, Express ve tam yığın projeler oluşturmak için minimal CLI aracı",
        tags: ["full-stack"],
        demo: "",
        github: "https://github.com/tah4mis/create-project-cli"
    },
    {
        id: 13,
        title: "gitpush-cli",
        description: "GitHub'a kolay proje push etme CLI aracı - Node.js ile geliştirilmiş, tek komutla commit ve push yapabilen, branch yönetimi ve otomatik dosya oluşturma özellikli CLI tool",
        tags: [" Node.js "],
        demo: "",
        github: "https://github.com/tah4mis/gitpush-cli"
    },
    {
        id: 14,
        title: "cryptodash-flow",
        description: "Modern bir kripto para ve döviz kurları dashboard uygulaması. React, TypeScript, TailwindCSS ve Shadcn/UI kullanılarak geliştirilmiştir.",
        tags: ["Node.js 18+ ve npm", "Electron", "TailwindCSS", "Vite", "React Router DOM"],
        demo: "",
        github: "https://github.com/tah4mis/cryptodash-flow"
    },
     {
        id: 15,
        title: "Port-Scanner-Tool",
        description: "Port Scanner Tool, Python ile yazılmış gelişmiş bir TCP/UDP port tarayıcı ve servis tespit test ve eğitim aracıdır.",
        tags: ["Python"],
        demo: "",
        github: "https://github.com/tah4mis/Port-Scanner-Tool"
    },
    {
        id: 16,
        title: "PwdGen",
        description: "Bu proje, kullanıcıların kolayca güçlü şifreler oluşturmasını sağlayan basit bir Python GUI uygulamasıdır. Tkinter kullanılarak geliştirilmiştir.",
        tags: ["Python"],
        demo: "",
        github: "https://github.com/tah4mis/PwdGen"
    },
        {
        id: 17,
        title: "crypto-price-analyzer",
        description: "Teknik analiz ve makine öğrenimi kullanarak kripto para piyasası verilerini çıkaran ve fiyat analizi gerçekleştiren Python projesi",
        tags: ["Python"],
        demo: "",
        github: "https://github.com/tah4mis/crypto-price-analyzer"
    },
    {
        id: 18,
        title: "Yanibasinda-Joint-Project",
        description: "Python ile geliştirilmiş ortak proje",
        tags: ["Python"],
        demo: "",
        github: "https://github.com/tah4mis/Yanibasinda-Joint-Project"
    },
    {
        id: 19,
        title: "3D-Pursuit-Simulation",
        description: "3D ortamda asker küresinin düşman küresini dinamik olarak takip ettiği gerçek zamanlı bir takip simülasyonu",
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
                <p class="project-description">${project.description}</p>
                <div class="project-stack">
                    ${project.tags.map(tag => `<span class="stack-item">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demo && project.demo !== '#' ? `<a href="${project.demo}" class="project-link" target="_blank">Live Demo</a>` : ''}
                    ${project.github ? `<a href="${project.github}" class="project-link" target="_blank">Source Code</a>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(projectCard);
    });

    // Drag and drop functionality
    initDragAndDrop();
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
    
    // Projeleri render et
    renderProjects();

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

