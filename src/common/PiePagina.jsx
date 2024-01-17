import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

const PiePagina = () => {
    return (
        <div className='contenedor-footer'>
            <section className='container '>
                <section className='row'>
                    <section className='col-12 titulo-footer'>
                        <h2>LA NACION</h2>
                        <hr />
                    </section>

                    <section className='col-lg-4 col-md-6 col-sm-12'>
                        <article className='categorias-footer' aria-label='categorias'>
                            <span className='mb-2'><b>Secciones:</b></span>
                            <ul>
                                <li><a href="">Actualidad</a></li>
                                <li><a href="">Espectaculos</a></li>
                                <li><a href="">Tecnologias</a></li>
                                <li><a href="">Deportes</a></li>
                                <li><a href="">Politica</a></li>
                                <li><a href="">Economia</a></li>
                                <li><a href="">Fotografia</a></li>
                                <li><a href="">Salud</a></li>
                            </ul>
                        </article>
                    </section>

                    <section className='col-lg-4 col-md-6 col-sm-12'>
                        <article className='redes-footer' aria-label='redes-sociales'>
                            <span className='mb-2'><b>Redes sociales:</b></span>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                            </ul>
                        </article>
                    </section>

                    <section className='col-lg-4 col-md-6 col-sm-12'>
                        <article className='accesos-directos-footer' aria-label='contacto-nosotros'>
                            <span><b>Accesos directos:</b></span>
                            <ul>
                            <li><Link to={'/contacto'}>Contacto</Link></li>
                            <li><Link to={'/nosotros'}>Acerca de nosotros</Link></li>
                            </ul>
                        </article>
                    </section>

                    <section className='col-12'>
                        <article className='copy-footer my-4' aria-label='copyright'><p> &copy; Copyright 2024 SA LA NACION | Todos los derechos reservados. Dirección Nacional del Derecho de Autor DNDA - EXPEDIENTE DNDA (renovación) RL-2023-95334553-APN-DNDA#MJ.
                            Queda prohibida la reproducción total o parcial del presente diario.</p></article>
                    </section>

                </section>
            </section>
        </div>
    );
};

export default PiePagina;