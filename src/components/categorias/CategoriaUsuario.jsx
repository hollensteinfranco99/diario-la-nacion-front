import React from 'react';
import '../../css/categoriaUsuario.css'
import NoticiaCategoriaDestacada from './seccionesCategoriaUsuario.css/NoticiaCategoriaDestacada';
import ListaNoticiasPorCategoria from './seccionesCategoriaUsuario.css/ListaNoticiasPorCategoria';

const CategoriaUsuario = () => {
    return (
        <section className='contenedor-principal'>
            <section className='text-center'>
            <h1>Deportes</h1>
            </section>
            <section className='container'>
                <article>
                <NoticiaCategoriaDestacada></NoticiaCategoriaDestacada>
                </article>
                <article className='row'>
                    <ListaNoticiasPorCategoria></ListaNoticiasPorCategoria>
                    <ListaNoticiasPorCategoria></ListaNoticiasPorCategoria>
                    <ListaNoticiasPorCategoria></ListaNoticiasPorCategoria>
                    <ListaNoticiasPorCategoria></ListaNoticiasPorCategoria>
                    <ListaNoticiasPorCategoria></ListaNoticiasPorCategoria>
                    <ListaNoticiasPorCategoria></ListaNoticiasPorCategoria>
                </article>
            </section>
        </section>
    );
};

export default CategoriaUsuario;