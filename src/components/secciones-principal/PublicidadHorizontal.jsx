import React from 'react';
import '../../css/inicio.css';
import imagenes from '../../img/Imagenes';

const PublicidadHorizontal = () => {
    return (
            <section className='container d-flex justify-content-center' aria-label='publicidad'>
                    <div className='cont-img-publicidad'>
                    <img src={imagenes.pedidosya} alt="" />
                    </div>
                </section>
    );
};

export default PublicidadHorizontal;