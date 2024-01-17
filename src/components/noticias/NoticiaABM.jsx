import React, { useState } from 'react';
import '../../css/formularioABM.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NoticiaABM = () => {
    const [valueNota, setValueNota] = useState('');

    let toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];
    const module = {
        toolbar: toolbarOptions,
    };

    return (
        <section className='contenedor-principal container mb-5'>
            <article className='ms-5'>
                <h2>Administrador Noticia</h2>
            </article>
            <hr />
            <article>
                <form>
                    <article className='row'>
                        <section className='col-lg-6 col-md-12 col-sm-12 form-group'>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                        </section>
                        <section className='col-lg-6 col-md-12 col-sm-12 row'>
                            <div className='col-12 form-group'>
                                <label>Titulo</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='col-12 form-group'>
                                <label>Descripcion Breve</label>
                                <textarea className='form-control' name="" id="" cols="30" rows="5"></textarea>
                            </div>
                            <div className='col-12 form-group'>
                                <label>Categoria</label>
                                <select className='form-control' name="" id="">Seleccionar categoria</select>
                            </div>
                            <div className='col-12 form-group'>
                                <label>Etiquetas</label>
                                <input className='form-control' type="text" />
                                <div className='my-3 d-flex flex-wrap' aria-label='contenedor-de-etiquetas'>
                                    <span className='btn btn-danger mt-1 me-1'>Milei</span>
                                    <span className='btn btn-danger mt-1 me-1'>Presidente</span>
                                </div>
                            </div>
                        </section>
                        <section className='col-12'>
                        <article className='contenedor-nota-completa' aria-label='nota-completa'>
                            <ReactQuill className='nota-completa' modules={module} theme="snow" value={valueNota} onChange={setValueNota} />;
                        </article>
                        </section>
                    </article>
                    <article className='text-end'>
                        <button className='btn btn-lg btn-success'>Guardar nota</button>
                    </article>
                </form>
            </article>
        </section>
    );
};

export default NoticiaABM;