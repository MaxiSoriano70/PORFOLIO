/* MENU RESPONSIVE */
const btnHamburguesa = document.getElementById('btnHamburguesa');
    const navLinks = document.querySelector('.navLinks');
    const icon = btnHamburguesa.querySelector('i');

    btnHamburguesa.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
});

/* OTROS TRABAJOS */
const btnOtrosTrabajos = document.querySelector('.btnOtrosTrabajos');
const cOtrosTrabajos = document.querySelector('.cOtrosTrabajos');
const iconoBtn = btnOtrosTrabajos.querySelector('i');

btnOtrosTrabajos.addEventListener('click', () => {
    const estaActivo = cOtrosTrabajos.classList.contains('activo');

    if (estaActivo) {
        cOtrosTrabajos.classList.remove('activo');
        iconoBtn.classList.remove('fa-eye-slash');
        iconoBtn.classList.add('fa-eye');
    } else {
        cOtrosTrabajos.classList.add('activo');
        iconoBtn.classList.remove('fa-eye');
        iconoBtn.classList.add('fa-eye-slash');
    }
});

/* WHITE O DARK */
const btnLight = document.getElementById('btnLigth');
const btnDark = document.getElementById('btnDark');
const body = document.body;

const elementosModoDark = [
    document.querySelector('.cImgSobreMi'),
    document.querySelector('.cTxtSobreMi'),
    ...document.querySelectorAll('.expIcono'),
    ...document.querySelectorAll('.iconoUbi'),
    ...document.querySelectorAll('.linkPageExp'),
    ...document.querySelectorAll('.cExpDescripcion'),
    ...document.querySelectorAll('.cTitulo'),
    ...document.querySelectorAll('.cTituloOtraExp'),
    ...document.querySelectorAll('.cOtraExpDescripcion'),
    ...document.querySelectorAll('.categoriaFullStack'),
    ...document.querySelectorAll('.categoriaFrontEnd'),
    ...document.querySelectorAll('.categoriaBackEnd'),
    ...document.querySelectorAll('.cardFullstack'),
    ...document.querySelectorAll('.cardFrontEnd'),
    ...document.querySelectorAll('.cardBackEnd')
];

btnLight.addEventListener('click', () => {
    body.classList.remove('dark');
    elementosModoDark.forEach(el => el.classList.remove('dark'));
    btnLight.style.display = 'none';
    btnDark.style.display = 'inline-flex';
});

btnDark.addEventListener('click', () => {
    body.classList.add('dark');
    elementosModoDark.forEach(el => el.classList.add('dark'));
    btnDark.style.display = 'none';
    btnLight.style.display = 'inline-flex';
});

/* MENU PROYECTOS */
const links = document.querySelectorAll('.linkTipoProyecto');
    const span = document.querySelector('.spanNavProyecto');

    links.forEach((link, index) => {
        link.addEventListener('click', (e) => {
        e.preventDefault();

        links.forEach(l => l.classList.remove('activo'));
        link.classList.add('activo');

        span.style.left = `${index * 25}%`;
        });
});