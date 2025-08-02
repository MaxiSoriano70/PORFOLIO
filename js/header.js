const btnHamburguesa = document.getElementById('btnHamburguesa');
    const navLinks = document.querySelector('.navLinks');
    const icon = btnHamburguesa.querySelector('i');

    btnHamburguesa.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
});

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
    ...document.querySelectorAll('.cOtraExpDescripcion')
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
