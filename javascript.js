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