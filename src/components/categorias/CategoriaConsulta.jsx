import React from 'react';
import '../../css/consulta.css';
import '../../img/Imagenes';
import imagenes from '../../img/Imagenes';

const CategoriaConsulta = () => {
    return (
        <section className='contenedor-principal container'>
            <article className='contenedor-buscar'>
                <div className='text-center my-3'>
                    <h2>Categorias</h2>
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
                        <th>Indice</th>
                        <th>Categoria</th>
                        <th className='text-end'>Editar</th>
                        <th className='text-start'>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                        <td>1</td>
                        <td>Politica</td>
                        <td className='text-end'><button className='btn btn-warning'>Editar</button></td>
                        <td className='text-start'><button className='btn btn-danger'>Eliminar</button></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
    );
};

export default CategoriaConsulta;