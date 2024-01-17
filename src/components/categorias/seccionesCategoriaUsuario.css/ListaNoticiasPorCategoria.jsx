import React from 'react';

const ListaNoticiasPorCategoria = () => {
    return (
        <section className='col-lg-4 col-md-6 col-sm-12'>
            <section className='tarjeta' aria-label='card'>
                <article aria-label='imagen'>
                    <figure className='cont-img-card'>
                        <img src="" alt="" />
                    </figure>
                </article>
                <article className='tarjeta-cuerpo'>
                <article aria-label='cuerpo'>
                    <h4>Titulo.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, deleniti.</p>
                </article>
                <article aria-label='autor'>
                    <span>Por <b>Melanie Schulman</b></span>
                </article>
                </article>
            </section>
        </section>
    );
};

export default ListaNoticiasPorCategoria;