import React, { useEffect, useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../css/suscripcion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Suscripcion = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    useEffect(() => {
        AOS.init(); // Inicializa AOS  
    }, []);

    return (
        <div className='contenedor-principal'>
            <section className='container'>
                <article className='encabezado-suscripcion'>
                    <h2>#PeriodismoDeCalidad</h2>
                    <p className='lead'>Noticias confiables, investigación profunda y el análisis de nuestros columnistas para entender lo que pasa en la Argentina y el mundo</p>
                </article>
                <article data-aos="fade-up" className='row mt-5'>

                    <section className='col-lg-4 col-md-6 col-sm-12 mt-3' aria-label='cards-suscripcion'>
                        <article className='tarjeta-suscripcion' aria-label='card'>
                            <section className='encabezado-tajeta-suscripcion' aria-label='encabezado'>
                                <div className='text-center'>
                                    <h5>Acceso Digital</h5>
                                </div>
                                <div className='text-center my-3'>
                                    <span className='precio-susc'>$1467</span>
                                    <span>/mes</span>
                                </div>
                                <div className='d-flex flex-column text-center'>
                                    <div className='my-3'>
                                        <span className='span-mes-susc'>Durante 3 meses</span>
                                    </div>
                                    <span>Luego $4890 por mes</span>
                                </div>
                            </section>
                            <section className='cuerpo-susc-tarjeta'>
                                <div>
                                    <Link to={'/login'} className='btn btn-primary'>Suscribite</Link>
                                </div>
                                <div className='text-center my-2'>
                                    <a className='btn-mas-detalle' onClick={() => setOpen(!open)} aria-controls="detalle-1" aria-expanded={open}>
                                        {open ? "Menos detalles" : "Mostrar detalles"}
                                    </a>
                                </div>
                                <Collapse in={open}>
                                    <div id="detalle-1">
                                        <ul className='lista-susc-detalle'>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Acceso <b>ilimitado</b> a lanacion.com y revistas digitales
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Acceso a la <b>edición impresa</b> en pdf del diario y revistas
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                <b>App LA NACION</b> personalizada
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                <b>Eventos</b> interactivos
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Anticipo de <b>columnas y contenidos diferenciales</b>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Exclusividad para <b>comentar notas</b>
                                            </li>

                                        </ul>
                                    </div>
                                </Collapse>
                            </section>
                        </article>
                    </section>
                    <section className='col-lg-4 col-md-6 col-sm-12 mt-3' aria-label='cards-suscripcion'>
                        <article className='tarjeta-suscripcion' aria-label='card'>
                            <section className='encabezado-tajeta-suscripcion' aria-label='encabezado'>
                                <div className='text-center'>
                                    <h5>Acceso Digital + Club LA NACION</h5>
                                </div>
                                <div className='text-center my-3'>
                                    <span className='precio-susc'>$2187</span>
                                    <span>/mes</span>
                                </div>
                                <div className='d-flex flex-column text-center'>
                                    <div className='my-3'>
                                        <span className='span-mes-susc'>Durante 3 meses</span>
                                    </div>
                                    <span>Luego $7290 por mes</span>
                                </div>
                            </section>
                            <section className='cuerpo-susc-tarjeta'>
                                <div>
                                    <Link to={'/login'} className='btn btn-primary'>Suscribite</Link>
                                </div>
                                <div className='text-center my-2'>
                                    <a className='btn-mas-detalle' onClick={() => setOpen2(!open2)} aria-controls="detalle-2" aria-expanded={open2}>
                                        {open2 ? "Menos detalles" : "Mostrar detalles"}
                                    </a>
                                </div>
                                <Collapse in={open2}>
                                    <div id="detalle-2">
                                        <ul className='lista-susc-detalle'>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Acceso <b>ilimitado</b> a lanacion.com y revistas digitales
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Acceso a la <b>edición impresa</b> en pdf del diario y revistas
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                <b>App LA NACION</b> personalizada
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                <b>Eventos</b> interactivos
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Anticipo de <b>columnas y contenidos diferenciales</b>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Exclusividad para <b>comentar notas</b>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Beneficios Club LA NACION Premium
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </section>
                        </article>
                    </section>
                    <section className='col-lg-4 col-md-6 col-sm-12 mt-3' aria-label='cards-suscripcion'>
                        <article className='tarjeta-suscripcion' aria-label='card'>
                            <section className='encabezado-tajeta-suscripcion premium-tarjeta' aria-label='encabezado'>
                                <div className='text-center'>
                                    <h5>Dúo Premium</h5>
                                </div>
                                <div className='text-center my-3'>
                                    <span className='precio-susc'>$2187</span>
                                    <span>/mes</span>
                                </div>
                                <div className='d-flex flex-column text-center'>
                                    <div className='my-3'>
                                        <span className='span-mes-susc text-dark'>Durante 3 meses</span>
                                    </div>
                                    <span>Luego $10935 por mes</span>
                                </div>
                            </section>
                            <section className='cuerpo-susc-tarjeta'>
                                <div>
                                    <Link to={'/login'} className='btn btn-primary'>Suscribite</Link>
                                </div>
                                <div className='text-center my-2'>
                                    <a className='btn-mas-detalle' onClick={() => setOpen3(!open3)} aria-controls="detalle-3" aria-expanded={open3}>
                                        {open3 ? "Menos detalles" : "Mostrar detalles"}
                                    </a>
                                </div>
                                <Collapse in={open3}>
                                    <div id="detalle-3">
                                        <ul className='lista-susc-detalle'>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Plan <b>Dúo</b> Premium
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Plan <b>Triple</b> Premium
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                                Plan <b>Black</b> Familiar
                                            </li>

                                        </ul>
                                    </div>
                                </Collapse>
                            </section>
                        </article>
                    </section>
                </article>
                <article className='info-contacto-suscripcion text-center'>
                    <p className='p-color lead'>Cancelá cuando quieras. No hay compromisos ni cargos por cancelación.</p>
                    <p className='lead'>También podés suscribirte por WhatsApp al <b>+54 9 11 2762 3628</b> o llamarnos al <b> 011 5199 4706</b> Atención al cliente: desde la Argentina: <b>011 5199 4787</b> o contactanos al <a href="mailto:accesodigital@lanacion.com.ar">accesodigital@lanacion.com.ar</a></p>
                </article>
                <article data-aos="fade-up" className='preguntas-suscripcion'>
                    <ul>
                    <li>
                    <div className='d-flex mb-2'>
                    <FontAwesomeIcon className='fa fa-2xl me-2' icon={faAngleRight} />
                    <h3>¿Qué es el Acceso Digital?</h3>
                    </div>
                    <p className='lead'>Es la opción para navegar sin límites en LA NACION desde el sitio web o con la app, acceder a la edición impresa del diario y las revistas (OHLALÁ!, Lugares, Living, ¡HOLA!, y Jardín), participar de eventos donde podrás interactuar con diferentes invitados y suscribirte a los newsletters exclusivos que te permitirán recibir anticipos y contenidos diferenciales. Dependiendo del plan que elijas, podés acceder a todos los beneficios de Club LA NACION.</p>
                    </li>
                    <li>
                        <div className='d-flex mb-2'>
                    <FontAwesomeIcon className='fa fa-2xl me-2' icon={faAngleRight} />
                        <h3>¿Si no me suscribo, puedo seguir leyendo LA NACION?</h3>
                        </div>
                        <p className='lead'>Sí. Sin suscripción podés seguir accediendo a la página principal de LA NACION pero podrás leer solo una cantidad limitada de notas en un rango de 30 días.</p>
                    </li>
                    <li>
                        <div className='d-flex mb-2'>
                    <FontAwesomeIcon className='fa fa-2xl me-2' icon={faAngleRight} />
                        <h3>¿Cuáles son los medios de pago?</h3>
                        </div>
                        <p className='lead'>Podés pagar con tarjeta de crédito a través del débito automático.</p>
                    </li>
                    </ul>
                    <hr />
                </article>
            </section >
        </div >
    );
};

export default Suscripcion;