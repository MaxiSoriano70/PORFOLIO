import styleMenu from '../css/Menu.module.css';
import logo from '../assets/img/pinguino.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { routes } from '../assets/utils/routes';
import { Link } from 'react-router-dom';

const NavBarMaxi = () => {
    return(
        <nav className={`navbar navbar-expand-lg navbar-dark bgColorPrincipal p-md-2 p-lg-3`}>
            <div className="container-fluid">
                <Link to={routes.home}>
                    <img className={styleMenu.logoPrincipal} src={logo} alt="logo-principal" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder active" aria-current="page" to={routes.home}>Home</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder active" to={routes.sobreMi}>Sobre mi</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder active" to={routes.proyectos}>Proyectos</Link>
                        </li>
                        <li className="nav-item ms-2">
                            <Link className="nav-link fw-bolder active" to={routes.formacionAcademica}>Formación academica y más</Link>
                        </li>
                    </ul>
                    <button className="btn btnPersonalized1 d-flex align-items-center justify-content-center ms-2" type="button">
                    <span className='fw-bolder'><FontAwesomeIcon icon={faLinkedin} /> Linkedin</span>
                    </button>
                    <button className="btn btnPersonalized1 d-flex align-items-center justify-content-center ms-2" type="button">
                    <span className='fw-bolder'><FontAwesomeIcon icon={faSun} /> Light</span><span className='fw-bolder'><FontAwesomeIcon icon={faMoon} /> Dark</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

const Menu = () => {
    return (
        <header className='sticky-top'>
            <NavBarMaxi/>
        </header>
    );
}

export default Menu;
