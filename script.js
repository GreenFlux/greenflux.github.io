(function () {
    const portfolio = [
        {
            title: 'GreenFlux, LLC - Founder',
            path: 'https://greenflux.us/',
            description: 'Dev agency focused on AI, Low-code and API integrations. Top Rated Plus (5 ⭐️) on UpWork - $200k+, Top Seller (5⭐️) on Fiverr.',
            image: 'https://static.ucraft.net/fs/ucraft/userFiles/greenfluxdev/images/9901080480102-transparent-light-16065922370782.png',
            tags: ['JavaScript', 'APIs', 'FileMaker Pro', 'AppSheet', 'Appsmith', 'Google Apps Script']
        },
        {
            title: 'Appsmith - Friday Tech Workshops',
            path: 'https://www.youtube.com/@appsmith/search?query=friday',
            description: 'Weekly series of Appsmith tutorial content on APIs, SQL, JavaScript, and all things Appsmith. 52 videos with over 50k views and 3.8k direct subscribers from one playlist!',
            image: 'images/appsmith-ftw.jpg',
            tags: ['JavaScript', 'Appsmith', 'Low-Code', 'Database']
        },
        {
            title: 'Writing Architect - Michigan State University',
            path: 'portfolio/writing-architect/index.html',
            description: 'Writing assessment tool developed for MSU study, featured in 4 scientific journals. Funded by grant from the Institute of Education Sciences.',
            image: 'images/wa logo.svg',
            tags: ['JavaScript', 'Qualtrics', 'FileMaker Pro']
        },
        {
            title: 'Safety Clearance Database for Magnet Lab',
            path: 'portfolio/safety-clearance/index.html',
            description: 'Maintenance tracker for high-energy systems in a national laboratory, built in FileMaker Pro. Outstanding review from National Science Foundation.',
            image: 'images/maglab.png',
            tags: ['Database', 'FileMaker Pro']
        },
        {
            title: 'Farm Co-op Weekly Harvest List',
            path: 'portfolio/farm-co-op/index.html',
            description: 'AppSheet app for farm co-ops, used by 4 co-ops of ~50 farms to manage weekly harvest lists for market.',
            image: 'images/farm-co-op.png',
            tags: ['JavaScript', 'Shopify', 'APIs', 'Google Apps Script']
        },
        {
            title: 'AppSheet Community',
            path: 'https://www.googlecloudcommunity.com/gc/user/viewprofilepage/user-id/312288',
            description: 'Community freelancer and mentor. 1000+ Posts, 40+ solutions!',
            image: 'images/appsheet.png',
            tags: ['AppSheet', 'Google Sheets', 'Google Apps Script','APIs']
        }
    ];

    const portfolioDiv = document.querySelector('.portfolio .row');
    portfolio.forEach(p => {
        const tagsHtml = p.tags.map(t => `<span class="badge badge-green m-1">${t}</span>`).join('');
        
        const isExternal = p.path.startsWith('http');
        const target = isExternal ? 'target="_blank"' : '';
        
        const portfolioItem = `
            <div class="col-md-4">
                <a href="${p.path}" class="card-link" ${target}>
                    <div class="card mb-4 portfolio-card">
                        <img src="${p.image}" class="card-img-top" alt="${p.title}">
                        <div class="card-body">
                            <h5 class="card-title">${p.title}</h5>
                            <p class="card-text">${p.description}</p>
                            <div class="tags">${tagsHtml}</div>
                        </div>
                    </div>
                </a>
            </div>`;
        
        portfolioDiv.insertAdjacentHTML('beforeend', portfolioItem);
    });

    // Parallax effect
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxImage = document.querySelector('.parallax-image');
        if (parallaxImage) {
            parallaxImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
})();
