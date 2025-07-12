(function() {
    function createFooter() {
        return `
        <footer class="footer">
            <div class="container">
                <p><a href="https://www.greenflux.us" target="_blank" class="footer-link">GreenFlux, LLC</a> | Joseph Petty</p>
            </div>
        </footer>`;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = createFooter();
        }
    });
})();