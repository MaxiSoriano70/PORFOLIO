import styleMenu from '../css/BannerPrincipal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const BannerPrincipal = () => {
    return (
        <section className={styleMenu.banner}>
            <article className={styleMenu.contenedorText}>
                <h1 className={styleMenu.tituloPrincipal}>Maximiliano Soriano</h1>
                <h2 className={styleMenu.tituloSecundario}>Software Developer | Tec. Analistas de Sistemas</h2>
                <p className={styleMenu.textoBienvenida}> ¡Bienvenidos a mi portafolio personal! Aquí encontrarás una muestra de mis proyectos, mi educación académica y mi experiencia laboral. Estoy entusiasmado de compartir mi trayectoria y habilidades mientras continúo creciendo como desarrollador. ¡Espero que disfrutes el recorrido!
                </p>
                <div className={styleMenu.contenedorBotonGithub}>
                    <button type="button" className="btn btnPersonalized2 fw-bold">
                    <FontAwesomeIcon icon={faGithub} /> Github
                    </button>
                </div>
            </article>
        </section>
    );
}

export default BannerPrincipal;
