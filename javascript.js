const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');

        header.textContent = item.classList.contains('active')
            ? '▲ Detalhes das Habilidades'
            : '▼ Detalhes das Habilidades';
    });
});
const links = document.querySelectorAll('.menu a');

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
         toggle.textContent = '☰';
    });
});
const closeBtn = document.querySelector('.close-btn');

toggle.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});
const topBtn = document.getElementById('topBtn');

// mostrar quando rolar
window.addEventListener('scroll', () => {

    if (window.scrollY > 200) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }

});

// clicar → voltar pro topo
topBtn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});