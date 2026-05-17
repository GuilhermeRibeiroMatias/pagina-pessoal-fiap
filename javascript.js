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


window.addEventListener('scroll', () => {

    if (window.scrollY > 200) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }

});


topBtn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // 

    const nome = document.getElementById('nome');
    const email = document.querySelector('input[name="email"]');
    const mensagem = document.querySelector('textarea[name="mensagem"]');

    const nomeErro = document.querySelector('.nome-erro');
    const emailErro = document.querySelector('.email-erro');
    const msgErro = document.querySelector('.msg-erro');

    let valido = true;

    nomeErro.textContent = '';
    emailErro.textContent = '';
    msgErro.textContent = '';

    nome.classList.remove('input-erro');
    email.classList.remove('input-erro');
    mensagem.classList.remove('input-erro');
      if (nome.value.trim().length < 3) {
        nomeErro.textContent = 'Nome deve ter pelo menos 3 caracteres';
        nome.classList.add('input-erro');
        valido = false;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
        emailErro.textContent = 'Digite um e-mail válido';
        email.classList.add('input-erro');
        valido = false;
    }


    if (mensagem.value.trim().length < 10) {
        msgErro.textContent = 'Mensagem deve ter pelo menos 10 caracteres';
        mensagem.classList.add('input-erro');
        valido = false;
    }


    if (valido) {


        console.log({
            nome: nome.value,
            email: email.value,
            mensagem: mensagem.value
        });

        const formBox = document.querySelector('.form-box');

        formBox.innerHTML = `
            <div class="sucesso-box">
                <h3>✔ Mensagem enviada com sucesso!</h3>
                <p>Obrigado por entrar em contato, ${nome.value}! Retornarei em breve.</p>
            </div>
        `;

        form.reset();
    }
});