import React, { Fragment, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../css/navegador.css';
import { Link } from 'react-router-dom';

const Navegador = () => {
    const fondoOpacoRef = useRef(null);
    const menuDesplegableRef = useRef(null);

    const desplegarMenu = () => {
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
            <section onClick={() => desplegarMenu()} ref={fondoOpacoRef} className='fondo-opaco' aria-label='fondo-opaco-menu-desplegable'></section>
            <section className='navegador'>
                <article className='d-flex align-items-center'>
                    <button onClick={() => desplegarMenu()} className='btn btn-outline-dark m-2'>
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
                    <Link className='text-decoration-none' to={"/"}>
                        <h1>LA NACION</h1>
                    </Link>
                </article>
                <article className='ms-auto d-flex align-items-center'>
                    <Link to={'/login'} className='btn btn-outline-dark m-1'>Login</Link>
                    <Link to={'/suscripcion'} className='btn btn-warning'>Suscribite</Link>
                </article>
            </section>
            <article className='contenedor-menu'>
                <div ref={menuDesplegableRef} className='menu-desplegable'>
                    <div className='titulo-menu'>
                        <Link onClick={() => desplegarMenu()} className='text-decoration-none' to={"/"}>
                            <h3 className='ms-3'>LA NACION</h3>
                        </Link>
                        <button onClick={() => desplegarMenu()} className='btn btn-outline-dark'>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                    <ul>
                        {/* Admin */}
                        <span>ADMINISTRADOR</span>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/noticias'}>Noticias</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/noticiaAdmin'}>Nueva noticia</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/categorias'}>Categorias</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/categoriaAdmin'}>Nueva Categoria</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/'}>Usuario</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/'}>Empleados</Link></li>
                        {/* Usuario */}
                        <hr />
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/seccion/deportes'}>Actualidad</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/seccion/deportes'}>Espectaculos</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/seccion/deportes'}>Tecnologias</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/seccion/deportes'}>Deportes</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/seccion/deportes'}>Politica</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/seccion/deportes'}>Economia</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/seccion/deportes'}>Salud</Link></li>
                        <li><Link onClick={() => desplegarMenu()} className='opc-li-nav' to={'/seccion/deportes'}>Fotografia</Link></li>
                    </ul>
                </div>
            </article>
        </Fragment>
    );
};

export default Navegador;