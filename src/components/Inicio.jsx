import React, { Fragment, useEffect, useState } from 'react';
import '../css/inicio.css';
import NoticiasDestacadas from './secciones-principal/NoticiasDestacadas';
import UltimasNoticias from './secciones-principal/UltimasNoticias';
import PublicidadHorizontal from './secciones-principal/PublicidadHorizontal';
import SeccionCategoria from './secciones-principal/SeccionCategoria';
import imagenes from '../img/Imagenes';

const Inicio = () => {
    const [dolares, setDolares] = useState(null);

    useEffect(() => {
        obtenerTiposCambios();
    }, []);

    const obtenerTiposCambios = async () => {
        try {
            const repuesta = await fetch("https://dolarapi.com/v1/dolares");

            if (repuesta.status === 200) {
                let datos = await repuesta.json();

                // Filtra los datos para obtener solo el dólar oficial, dólar blue y dólar turista
                const dolaresFiltrados = datos.filter((dolar) =>
                    ["oficial", "blue", "tarjeta"].includes(dolar.nombre.toLowerCase())
                );

                setDolares(dolaresFiltrados);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Fragment>
            <section className='contenedor-inicio' aria-label='dolar'>
                <article className='d-flex contenedor-cambio flex-wrap'>
                    {
                        dolares?.map((dol) => (
                            <div className='mt-3' key={dol.nombre}>
                                <span className='m-1'>Dolar: {dol.nombre}</span>
                                <span className='m-1 me-2'><b>${dol.venta}</b> |</span>
                            </div>
                        ))
                    }
                </article>
                <section className='container-fluid row'>
                    <NoticiasDestacadas></NoticiasDestacadas>
                    <UltimasNoticias></UltimasNoticias>
                </section>
                <PublicidadHorizontal></PublicidadHorizontal>
                <SeccionCategoria></SeccionCategoria>
            </section>
        </Fragment>
    );
};

export default Inicio;