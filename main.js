// ===== MENU MOBILE =====
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// ===== DESTAQUE DO LINK ATIVO DURANTE ROLAGEM =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu a');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink(); // chamar no carregamento

// ===== BOTÃO VOLTAR AO TOPO =====
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== ABAS DE EXEMPLOS =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;

        // Remover classe active de todos
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        // Adicionar ao atual
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// ===== BOTÕES COPIAR CÓDIGO =====
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const codeId = btn.dataset.code;
        const codeElement = document.getElementById(codeId);
        if (!codeElement) return;

        const code = codeElement.innerText;
        navigator.clipboard.writeText(code).then(() => {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        });
    });
});