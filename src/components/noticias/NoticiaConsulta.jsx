import React from 'react';
import '../../css/consulta.css';
import '../../img/Imagenes';
import imagenes from '../../img/Imagenes';

const NoticiaConsulta = () => {
    return (
        <section className='contenedor-principal container'>
            <article className='contenedor-buscar'>
                <div className='text-center my-3'>
                    <h2>Noticias</h2>
                    <hr />
                </div>
                <form>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Buscar noticia' type="search" />
                        <hr />
                    </div>
                </form>
            </article>
            {/* TABLA */}
            <article className='contenedor-tabla'>
                <table className='table table-dark table-stripped table-hover'>
                    <thead className='text-center'>
                        <tr className='encabezado-tabla'>
                        <th>Fecha</th>
                        <th>Imagen</th>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                        <th>Autor</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                        <td>10/10/2024</td>
                        <td>
                            <figure className='cont-img-tabla'>
                            <img src={imagenes.bannerVertical} alt="" />
                            </figure>
                            </td>
                        <td><b>Lorem ipsum dolor sit amet.</b></td>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quia quisquam expedita eos tempore eaque amet necessitatibus, cumque dolore cupiditate!</td>
                        <td>Franco Figueroa</td>
                        <td><button className='btn btn-warning'>Editar</button></td>
                        <td><button className='btn btn-danger'>Eliminar</button></td>
                        </tr>
                        <tr>
                        <td>10/10/2024</td>
                        <td>
                            <figure className='cont-img-tabla'>
                            <img src={imagenes.bannerVertical} alt="" />
                            </figure>
                            </td>
                        <td><b>Lorem ipsum dolor sit amet.</b></td>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quia quisquam expedita eos tempore eaque amet necessitatibus, cumque dolore cupiditate!</td>
                        <td>Franco Figueroa</td>
                        <td><button className='btn btn-warning'>Editar</button></td>
                        <td><button className='btn btn-danger'>Eliminar</button></td>
                        </tr>
                        <tr>
                        <td>10/10/2024</td>
                        <td>
                            <figure className='cont-img-tabla'>
                            <img src={imagenes.bannerVertical} alt="" />
                            </figure>
                            </td>
                        <td><b>Lorem ipsum dolor sit amet.</b></td>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quia quisquam expedita eos tempore eaque amet necessitatibus, cumque dolore cupiditate!</td>
                        <td>Franco Figueroa</td>
                        <td><button className='btn btn-warning'>Editar</button></td>
                        <td><button className='btn btn-danger'>Eliminar</button></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
    );
};

export default NoticiaConsulta;