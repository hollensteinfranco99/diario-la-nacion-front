import React from 'react';
import '../../css/formularioABM.css';

const CategoriaABM = () => {
    return (
        <div className='contenedor-principal'>
            <section className='container'>
            <section className='my-4'>
                <h2>Administrar Categoria</h2>
                <hr />
            </section>
            <section className='formulario-categoria'>
                <form className='container'>
                    <div className='form-group my-4'>
                    <label>Nombre de la categoria</label>
                    <input className='my-2 form-control' type="text" />
                    </div>
                    <button className='btn btn-success'>Guardar</button>
                </form>
            </section>
            </section>
        </div>
    );
};

export default CategoriaABM;