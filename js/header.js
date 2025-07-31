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

btnLight.addEventListener('click', () => {
    body.classList.remove('dark');
    btnLight.style.display = 'none';
    btnDark.style.display = 'inline-flex';
});

btnDark.addEventListener('click', () => {
    body.classList.add('dark');
    btnDark.style.display = 'none';
    btnLight.style.display = 'inline-flex';
});
