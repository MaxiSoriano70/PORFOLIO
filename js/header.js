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

const cImgSobreMi = document.querySelector('.cImgSobreMi');
const cTxtSobreMi = document.querySelector('.cTxtSobreMi');

btnLight.addEventListener('click', () => {
    body.classList.remove('dark');
    cImgSobreMi.classList.remove('dark');
    cTxtSobreMi.classList.remove('dark');
    btnLight.style.display = 'none';
    btnDark.style.display = 'inline-flex';
});

btnDark.addEventListener('click', () => {
    body.classList.add('dark');
    cImgSobreMi.classList.add('dark');
    cTxtSobreMi.classList.add('dark');
    btnDark.style.display = 'none';
    btnLight.style.display = 'inline-flex';
});

