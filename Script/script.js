// Função para rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Rola suavemente até o elemento alvo com ajuste dinâmico para cabeçalhos de diferentes tamanhos
        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Compensação dinâmica para o cabeçalho
            behavior: 'smooth'
        });
    });
});

// Animação do botão no banner ao passar o mouse
const btn = document.querySelector('.banner-content .btn');

btn.addEventListener('mouseover', function() {
    btn.style.transform = 'scale(1.1)';
    btn.style.transition = 'transform 0.5s ease'; // Animação mais lenta e suave
});

btn.addEventListener('mouseout', function() {
    btn.style.transform = 'scale(1)';
    btn.style.transition = 'transform 0.5s ease'; // Retorna suavemente ao estado original
});

// Animação de fade-in ao carregar a página
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in';
        document.body.style.opacity = 1; // Aparecimento suave da página
    }, 100);
});

// Animação suave para os itens do menu ao passar o mouse
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.4s ease'; // Transição suave
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 0.4s ease'; // Volta suavemente ao estado original
    });
});
