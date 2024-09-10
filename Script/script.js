// Função para rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Rola suavemente até o elemento alvo
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Compensação para o cabeçalho fixo
            behavior: 'smooth'
        });
    });
});

// Animação do botão no banner ao passar o mouse
const btn = document.querySelector('.banner-content .btn');
btn.addEventListener('mouseover', function() {
    btn.style.transform = 'scale(1.1)'; // Aumenta o botão
    btn.style.transition = 'transform 0.3s'; // Suaviza a animação
});

btn.addEventListener('mouseout', function() {
    btn.style.transform = 'scale(1)'; // Volta ao tamanho original
});
