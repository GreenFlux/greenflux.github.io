(function() {
    function getBasePath() {
        const path = window.location.pathname;
        const segments = path.split('/').filter(s => s);
        const depth = segments.length - 1;
        return depth > 0 ? '../'.repeat(depth) : './';
    }

    function createHeader() {
        const basePath = getBasePath();
        
        return `
        <nav class="navbar navbar-expand-lg navbar-light sticky-top">
            <div class="container">
                <a class="navbar-brand" href="${basePath}index.html">
                    <img src="${basePath}images/logo.png" alt="GreenFlux Logo" class="logo" height="40">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="${basePath}index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="${basePath}index.html#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="${basePath}index.html#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="${basePath}index.html#social">Social</a></li>
                    </ul>
                    <a href="https://github.com/GreenFlux" target="_blank" class="social-icon mx-3">
                        <i class="bi bi-github" style="font-size: 2rem"></i>
                    </a>
                </div>
            </div>
        </nav>`;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = createHeader();
        }
    });
})();