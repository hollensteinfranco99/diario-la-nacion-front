import React, { useEffect, useState } from 'react';
import '../../../css/inicio.css';

const NoticiaCategoriaDestacada = () => {

    return (
        <div className='container'>
            <section aria-label='cards destacadas' className='contenedor-destacadas'>
                <article className='row'>
                    <section className='col-lg-6 col-md-12 col-sm-12 destacada-grande'>
                        <div>
                            <h3>"Vocación de diálogo". Primera reunión entre funcionarios de Milei y diputados opositores para negociar la ley ómnibus</h3>
                            <p>El oficialismo accedió a conformar una mesa política con los bloques de la oposición dialoguista para discutir los cambios en el proyecto; ayer se avanzó con el repaso de los cien primeros artículos; hoy, el capítulo económico</p>
                        </div>
                        <figure>
                            <img src="" alt="" />
                        </figure>
                    </section>
                    <article className='col-lg-6 col-md-12 col-sm-12 row'>
                        <section className='col-12 destacada-chica'>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <div>
                                <h4>"Un lío tremendo".</h4>
                                <p>Cómo se gestó el grupo empresario que apoya a Milei, organiza un cacerolazo contra la CGT y genera tensiones</p>
                                <span>Por Camila Hollenstein</span>
                            </div>
                        </section>
                        <section className='col-12 destacada-chica'>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <div>
                                <h4>"Un lío tremendo".</h4>
                                <p>Cómo se gestó el grupo empresario que apoya a Milei, organiza un cacerolazo contra la CGT y genera tensiones</p>
                                <span>Por Camila Hollenstein</span>
                            </div>
                        </section>
                    </article>
                </article>
            </section>
        </div>
    );
};

export default NoticiaCategoriaDestacada;