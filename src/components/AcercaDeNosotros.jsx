import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import imagenes from '../img/Imagenes';

const AcercaDeNosotros = () => {
    return (
        <div className='contenedor-principal'>
            <section className='container'>
                <article className='p-3'>
                    <div className='text-center my-3'>
                        <h2>¿QUIENES SOMOS?</h2>
                    </div>
                    <div className='mt-3'>
                        <p className='lead'> <b>Somos una importante Empresa Argentina de Medios de Comunicación</b>, destinada a proveer soluciones de comunicación a sus anunciantes y productos de calidad y confiables a sus audiencias. <br />
                            Es una empresa nacional e independiente, fundada el 4 enero 1870 por Bartolomé Mitre. <br /> <br />

                            Hoy, <b>LA NACION</b> se define como una compañía dedicada a: <br /> <br />

                            <b>DESARROLLAR AUDIENCIAS</b> <br /> <br />
                        </p>

                        <ul className='lead'>
                            <li className='list-group-item'>
                                <FontAwesomeIcon icon={faAngleRight} /> Identificando y respondiendo a sus necesidades</li>
                            <li className='list-group-item'>
                                <FontAwesomeIcon icon={faAngleRight} /> Generando contenidos por intereses y temáticas, a través de marcas relevantes</li>
                            <li className='list-group-item'>
                                <FontAwesomeIcon icon={faAngleRight} /> Utilizando distintos formatos y plataformas tecnológicas,</li>
                            <li className='list-group-item'>                                                  <FontAwesomeIcon icon={faAngleRight} /> Optimizando la experiencia del usuario y aportándole valor.</li>
                        </ul>

                        <p className='lead'> <b>PROVEER SOLUCIONES DE COMUNICACIÓN Y DE MARKETING</b> <br /> <br /> </p>

                        <ul className='lead'>
                            <li className='list-group-item'>
                                <FontAwesomeIcon icon={faAngleRight} /> Ofreciendo a nuestros anunciantes el alcance y la activación de nuestras audiencias.</li>
                            <li className='list-group-item'>
                                <FontAwesomeIcon icon={faAngleRight} /> A través de un portafolio expandido de marcas, temáticas, contenidos y formatos.</li>
                            <li className='list-group-item'>
                                <FontAwesomeIcon icon={faAngleRight} /> Ofreciendo soluciones de comunicación integrales, a través de publicidad y otros servicios.</li>
                        </ul>

                    </div>
                </article>
                <hr />
                <article className='p-3'>
                    <div className='text-center my-3'>
                        <h2>DESARROLLADOR</h2>
                    </div>
                    <div className='d-flex align-items-center flex-column my-5 lead'>
                        <div className='avatar-contenedor-acerca'>
                            <img src={imagenes.avatar} alt="avatar" />
                        </div>
                        <div className='d-flex flex-column mt-4 text-center'>
                            <span><b>FRANCO HOLLENSTEIN</b></span>
                            <span>FullStack Developer</span>
                        </div>
                        <article>
                            <div className='text-center my-4'>
                                <h6>SKILLS</h6>
                            </div>
                            <div className='d-flex flex-wrap justify-content-center'>
                                <span className='btn btn-danger ms-1 mt-1 pe-none'>HTML</span>
                                <span className='btn btn-danger ms-1 mt-1 pe-none'>CSS</span>
                                <span className='btn btn-danger ms-1 mt-1 pe-none'>JAVASCRIPT</span>
                                <span className='btn btn-danger ms-1 mt-1 pe-none'>REACT.JS</span>
                                <span className='btn btn-danger ms-1 mt-1 pe-none'>C#</span>
                                <span className='btn btn-danger ms-1 mt-1 pe-none'>SQL-SERVER</span>
                                <span className='btn btn-danger ms-1 mt-1 pe-none'>MONGODB</span>
                            </div>
                        </article>
                        <article>
                            <div className='text-center my-4'>
                                <h6>PORTFOLIO</h6>
                                <a className='text-dark' href="https://precious-crumble-b79b95.netlify.app/">Proyectos</a>
                            </div>
                        </article>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default AcercaDeNosotros;