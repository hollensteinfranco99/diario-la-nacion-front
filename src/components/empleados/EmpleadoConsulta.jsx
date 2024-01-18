import React from 'react';
import '../../css/consulta.css';

const EmpleadoConsulta = () => {
    return (
        <section className='contenedor-principal container'>
            <article className='contenedor-buscar'>
                <div className='text-center my-3'>
                    <h2>ADMINISTRAR EDITORES</h2>
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
                        <th>Nombre completo</th>
                        <th>Email</th>
                        <th className='text-end'>Editar</th>
                        <th className='text-start'>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                        <td>Franco Hollenstein</td>
                        <td>example@gmail.com</td>
                        <td className='text-end'><button className='btn btn-warning'>Editar</button></td>
                        <td className='text-start'><button className='btn btn-danger'>Eliminar</button></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
    );
};

export default EmpleadoConsulta;