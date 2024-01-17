import React from 'react';

const Contacto = () => {
    return (
        <div className='contenedor-principal'>
            <section className='container mt-4 w-75'>
                <article className='d-flex flex-column justify-content-center'>
                    <div className='text-center'>
                    <h2>CONTACTO</h2>
                    </div>
                    <form>
                        <div className='form-group mt-2'>
                            <input placeholder='Nombre' className='form-control' type="text" />
                        </div>
                        <div className='form-group mt-2'>
                            <input placeholder='Asunto' className='form-control' type="text" />
                        </div>
                        <div className='form-group mt-2'>
                            <textarea placeholder='Mensaje' className='form-control' cols="30" rows="10"></textarea>
                        </div>
                        <div className='form-group mt-2'>
                            <button className='btn btn-primary w-100'>Enviar mensaje</button>
                        </div>
                    </form>
                </article>
            </section>
        </div>
    );
};

export default Contacto;