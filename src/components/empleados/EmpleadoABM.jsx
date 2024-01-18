import React from 'react';
import '../../css/formularioABM.css';

const EmpleadoABM = () => {
    return (
        <div className='contenedor-principal'>
            <section className='container w-75'>
            <section className='my-4'>
                <h2>AGREGAR EDITOR</h2>
                <hr />
            </section>
            <section className='formulario-categoria'>
                <form className='container'>
                <div className='form-group mt-2'>
                    <label>Legajo</label>
                    <input disabled className='mt-1 form-control' type="text" />
                    </div>
                    <div className='form-group mt-2'>
                    <label>Nombre</label>
                    <input className='mt-1 form-control' type="text" />
                    </div>
                    <div className='form-group mt-2'>
                    <label>Apellido</label>
                    <input className='mt-1 form-control' type="text" />
                    </div>
                    <div className='form-group mt-2'>
                    <label>Email</label>
                    <input className='mt-1 form-control' type="text" />
                    </div>
                    <div className='form-group mt-2'>
                    <label>Contraseña</label>
                    <input className='mt-1 form-control' type='password' />
                    </div>
                    <button className='btn btn-success'>Guardar</button>
                </form>
            </section>
            </section>
        </div>
    );
};

export default EmpleadoABM;