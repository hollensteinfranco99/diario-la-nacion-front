import React, { Fragment, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../css/navegador.css';

const Navegador = () => {
    const fondoOpacoRef = useRef(null);
    const menuDesplegableRef = useRef(null);

    const desplegarMenu = () =>{
        const fondoOpaco = fondoOpacoRef.current;
        const menu = menuDesplegableRef.current;

        if (fondoOpaco.classList.contains("active")) {

            fondoOpaco.classList.remove("active");
            menu.classList.remove("active");
        } else {
            fondoOpaco.classList.add("active");
            menu.classList.add("active");
        }
    }
    return (
        <Fragment>
            <section onClick={()=>desplegarMenu()} ref={fondoOpacoRef} className='fondo-opaco' aria-label='fondo-opaco-menu-desplegable'></section>
            <section className='navegador'>
                <article className='d-flex align-items-center'>
                    <button onClick={()=>desplegarMenu()} className='btn btn-outline-dark m-2'>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <h5 className='txt-seccion-nav m-2'>Secciones</h5>
                    <section aria-label='boton-menu'>
                        <button className='btn-buscar-nav btn btn-outline-dark m-2'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                    </section>
                </article>
                <article className='m-auto me-3 mt-2'>
                    <h1>LA NACION</h1>
                </article>
                <article className='ms-auto d-flex align-items-center'>
                    <button className='btn btn-outline-dark m-1'>Login</button>
                    <button className='btn btn-warning'>Suscribite</button>
                </article>
            </section>
            <article className='contenedor-menu'>
                        <div ref={menuDesplegableRef} className='menu-desplegable'>
                            <div className='titulo-menu'>
                            <h3 className='ms-3'>LA NACION</h3>
                            <button onClick={()=>desplegarMenu()} className='btn btn-outline-dark'>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                            </div>
                            <ul>
                                {/* Admin */}
                                <span>ADMINISTRADOR</span>
                                <li><a href="">Noticias</a></li>
                                <li><a href="">Nueva noticia</a></li>
                                <li><a href="">Categorias</a></li>
                                <li><a href="">Nueva Categoria</a></li>
                                {/* Usuario */}
                                <li><a href="">Actualidad</a></li>
                                <li><a href="">Espectaculos</a></li>
                                <li><a href="">Tecnologias</a></li>
                                <li><a href="">Deportes</a></li>
                                <li><a href="">Politica</a></li>
                                <li><a href="">Economia</a></li>
                                <li><a href="">Salud</a></li>
                                <li><a href="">Fotografia</a></li>
                            </ul>
                        </div>
                        </article>
        </Fragment>
    );
};

export default Navegador;