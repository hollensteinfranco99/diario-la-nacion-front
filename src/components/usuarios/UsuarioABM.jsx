import React from 'react';
import '../../css/formularioABM.css';

const usuarioABM = () => {
    return (
        <div className='contenedor-principal'>
            <section className='container'>
            <section className='my-4'>
                <h2>AGREGAR USUARIO</h2>
                <hr />
            </section>
            <section className='formulario-categoria'>
                <form className='container w-75'>
                <div className='form-group mt-2'>
                    <label>Email</label>
                    <input className='mt-1 form-control' type="email" />
                    </div>
                    <div className='form-group mt-2'>
                    <label>Contraseña</label>
                    <input className='mt-1 form-control' type="password" />
                    </div>
                    <div className='mt-3'>
                    <button className='btn btn-success'>Guardar</button>
                    </div>
                </form>
            </section>
            </section>
        </div>
    );
};

export default usuarioABM;