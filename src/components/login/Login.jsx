import React, { useEffect } from 'react';
import '../../css/formularioABM.css';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className='contenedor-principal'>
            <section className='container d-flex justify-content-center'>
                <article className='mt-5 w-50'>
                    <div className='login-titulo text-center'>
                        <h4><b>Iniciar sesión</b></h4>
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
                                <button className='btn btn-primary w-100'>Iniciar sesión</button>
                            </div>
                        </form>
                        <div className='mt-4 d-flex flex-column text-center'>
                            <span>¿No tenés cuenta? <Link to={'/registrar'}> Registrate SIN CARGO</Link> </span>
                            <span className='mt-3'>¿Has olvidado tu contraseña? <Link to={'/registrar'}> Recuperar contraseña</Link> </span>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Login;