import React, { useEffect } from 'react';
import '../../css/formularioABM.css';
import { Link } from 'react-router-dom';

const Registrar = () => {

    return (
        <div className='contenedor-principal'>
            <section className='container d-flex justify-content-center'>
                <article className='mt-5 w-50'>
                    <div className='login-titulo text-center'>
                        <h4><b>Registrarse</b></h4>
                        <span className='lead'>Con tu email</span>
                    </div>
                    <div aria-label='formulario'>
                        <form className='form-login d-flex flex-column'>
                            <div className='form-group mt-2'>
                                <input className='form-control' placeholder='Email' type="text" />
                            </div>
                            <div className='form-group mt-2'>
                                <input className='form-control' placeholder='Contraseña' type="text" />
                            </div>
                            <div className='mt-2'>
                                <button className='btn btn-primary w-100'>Registrarme</button>
                            </div>
                        </form>
                        <div className='mt-4'>
                            <span>¿Ya tenés una cuenta? <Link to={'/login'}>Iniciar sesión</Link> </span>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Registrar;