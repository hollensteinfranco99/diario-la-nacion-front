import React from 'react';
import '../../css/consulta.css';

const CategoriaConsulta = () => {
    return (
        <section className='contenedor-principal container'>
            <article className='contenedor-buscar'>
                <div className='text-center my-3'>
                    <h2>ADMINISTRAR CATEGORIAS</h2>
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