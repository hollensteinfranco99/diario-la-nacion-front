import React, { useEffect, useState } from 'react';
import '../../css/consulta.css';
import '../../img/Imagenes';
import imagenes from '../../img/Imagenes';

const NoticiaConsulta = () => {
    const URL = process.env.REACT_APP_API_URL;
    const [lista, setLista] = useState(null);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        try {
            const respuesta = await fetch(URL + "/noticia");

            if (respuesta.status === 200) {
                const datos = await respuesta.json();
                setLista(datos);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <section className='contenedor-principal container'>
            <article className='contenedor-buscar'>
                <div className='text-center my-3'>
                    <h2>ADMINISTRAR NOTICIAS</h2>
                    <hr />
                </div>
                <article className='d-flex justify-content-between align-items-end'>
                    <form className='w-100 mx-3'>
                        <div className='form-group'>
                            <input className='form-control' placeholder='Buscar noticia' type="search" />
                        </div>
                    </form>
                    <div>
                        <button className='btn btn-success'>Agregar</button>
                    </div>
                </article>
                <hr />
            </article>
            {/* TABLA */}
            <article className='contenedor-tabla'>
                <table className='table table-striped table-hover'>
                    <thead className='table-dark text-center'>
                        <tr className='encabezado-tabla'>
                            <th>Fecha</th>
                            <th>Imagen</th>
                            <th>Titulo</th>
                            <th>Resumen</th>
                            <th>Autor</th>
                            <th>Nota</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            lista?.map(noticia => (
                                <tr>
                                    <td>{noticia.fecha}</td>
                                    <td>
                                        <figure className='cont-img-tabla'>
                                            <img src={noticia.imagen} alt="" />
                                        </figure>
                                    </td>
                                    <td><b>{noticia.titulo}</b></td>
                                    <td>{noticia.resumen}</td>
                                    <td>{noticia.autor}</td>
                                    <td><button className='btn btn-dark'>Detalle</button></td>
                                    <td><button className='btn btn-warning'>Editar</button></td>
                                    <td><button className='btn btn-danger'>Eliminar</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </article>
        </section>
    );
};

export default NoticiaConsulta;