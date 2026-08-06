const content_dir = 'contents/'
const config_file = 'config.yml'

window.addEventListener('DOMContentLoaded', event => {

    // Access check
    const PASSKEY = 'zyb_swufe_xmu';
    const params = new URLSearchParams(window.location.search);
    if (params.get('key') === PASSKEY) {
        sessionStorage.setItem('_access', '1');
        const url = new URL(window.location);
        url.searchParams.delete('key');
        window.history.replaceState({}, '', url);
    }
    if (sessionStorage.getItem('_access') !== '1') {
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;text-align:center;font-family:sans-serif;color:#999;"><div><div style="font-size:4rem;margin-bottom:1rem;">🔒</div><p style="font-size:1.1rem;">This page is not publicly accessible.</p></div></div>';
        return;
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        }
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            themeBtn.innerHTML = next === 'dark'
                ? '<i class="bi bi-sun-fill"></i>'
                : '<i class="bi bi-moon-fill"></i>';
        });
    }

    // Yaml
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => console.log(error));

    // Marked
    marked.use({ mangle: false, headerIds: false })
    const section_names = Array.from(
        document.querySelectorAll('.main-body[id$="-md"]')
    ).map(el => el.id.replace('-md', ''));

    section_names.forEach((name) => {
        fetch(content_dir + name + '.md')
            .then(response => response.text())
            .then(markdown => {
                const html = marked.parse(markdown);
                const target = document.getElementById(name + '-md');
                if (target) {
                    target.innerHTML = html;
                }
            }).then(() => {
                // MathJax
                MathJax.typeset();
            })
            .catch(error => console.log(error));
    })

});
