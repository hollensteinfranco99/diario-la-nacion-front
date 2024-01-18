import React, { useEffect, useState } from 'react';
import '../../css/formularioABM.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const NoticiaABM = () => {
    const URLAPI = process.env.REACT_APP_API_URL;
    const [valueNota, setValueNota] = useState('');
    const [imagenSrc, setImagenSrc] = useState('');
    const [titulo, setTitulo] = useState('');
    const [resumen, setResumen] = useState('');
    const [categoria, setCategoria] = useState('');
    const [categoriaNombre, setCategoriaNombre] = useState('');
    const [listaCategorias, setListaCategorias] = useState(null);
    const [etiquetas, setEtiquetas] = useState([]);
    // TOOL BAR EDITOR DE TEXTO //
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
    // ======================= //
    useEffect(() => {
        cargarSelectedCategoria();
    }, []);

    // Alta
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validar campos

        // Obtener datos
        const noticiaData = {
            imagen: imagenSrc,
            titulo: titulo,
            resumen: resumen,
            categoria_id: categoria,
            categoria_nombre: categoriaNombre,
            etiquetas: etiquetas,
            nota_completa: valueNota,
            autor: "Franco Hollenstein",
            fecha: "10/03/2024"
        };
        try {
            // Alta
            const respuesta = await fetch(URLAPI+'/noticia',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(noticiaData)
            });
            if(respuesta.status === 201){
                // Mensaje de exito
                Swal.fire({
                    title: "Nueva noticia agregada",
                    text: "Se proceso su solicitud de forma correcta",
                    icon: "success"
                });
            }

            // Editar
            // Mensaje de exito
        } catch (error) {

        }
    }

    // Funciones para el formulario
    const obtenerImagen = (e) => {
        const imagenObtenida = e.target.files[0];
        setImagenSrc(URL.createObjectURL(imagenObtenida));
    }
    const cargarSelectedCategoria = async () => {
        try {
            const respuesta = await fetch(URLAPI+'/categoria');

            if (respuesta.status === 200) {
                const lista = await respuesta.json();

                setListaCategorias(lista);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (e.target.value.trim() !== '' && etiquetas.length < 30) {
                // Agregar la nueva etiqueta al array existente
                setEtiquetas([...etiquetas, e.target.value]);
                e.target.value = '';
                e.preventDefault();
            } else {
                e.preventDefault();
            }
        }
    };
    const eliminarEtiqueta = (index) => {
        const nuevasEtiquetas = [...etiquetas];
        nuevasEtiquetas.splice(index, 1);
        setEtiquetas(nuevasEtiquetas);
    };
    const obtenerCategoria = (e) => {
        let valor = e.target.options[e.target.selectedIndex];

        setCategoria(valor.value);
        setCategoriaNombre(valor.text);
    }
    const handleChangeNota = (content, delta, source, editor) => {
        // Utiliza la variable content para obtener el contenido HTML del editor
        setValueNota(content);

    };
    return (
        <section className='contenedor-principal container mb-5'>
            <article className='ms-5'>
                <h2>Administrador Noticia</h2>
            </article>
            <hr />
            <article>
                <form onSubmit={handleSubmit}>
                    <article className='row'>
                        <section className='col-lg-6 col-md-12 col-sm-12 form-group'>
                            <figure className='cont-imagen-noticia'>
                                <img src={imagenSrc} />
                            </figure>
                            <div className='form-group'>
                                <input onChange={(e) => obtenerImagen(e)} accept="image/*" className='form-control' type="file" />
                            </div>
                        </section>
                        <section className='col-lg-6 col-md-12 col-sm-12 row'>
                            <div className='col-12 form-group'>
                                <label>Titulo</label>
                                <input value={titulo} onChange={(e) => setTitulo(e.target.value)} className='form-control' type="text" />
                            </div>
                            <div className='col-12 form-group'>
                                <label>Descripcion Breve</label>
                                <textarea className='form-control' value={resumen} onChange={(e) => setResumen(e.target.value)} cols="30" rows="5"></textarea>
                            </div>
                            <div className='col-12 form-group'>
                                <label>Categoria</label>
                                <select className='form-select' value={categoria} onChange={(e) => obtenerCategoria(e)}>
                                    <option value="">Seleccionar categoría</option>
                                    {
                                        listaCategorias?.map((categ, index) => (
                                            <option key={index} value={categ.id}>{categ.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='col-12 form-group'>
                                <label>Etiquetas (limite 30)</label>
                                <input onKeyDown={(e) => handleKeyPress(e)} className='form-control' type="text" />
                                <div className='contenedor-etiquetas mt-2 d-flex flex-wrap'>
                                    {
                                        etiquetas?.map((eti, index) => (
                                            <div onClick={() => eliminarEtiqueta(index)} key={index} className='etiqueta'>
                                                <FontAwesomeIcon className='fa fa-xs icono-etiqueta-x' icon={faXmark} />
                                                <span className='btn btn-warning me-1 mt-1'>{eti}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </section>
                        <section className='col-12'>
                            <article className='contenedor-nota-completa' aria-label='nota-completa'>
                                <ReactQuill className='nota-completa' modules={module} theme="snow" value={valueNota} onChange={handleChangeNota} />;
                            </article>
                        </section>
                    </article>
                    <article className='text-end'>
                        <button type='submit' className='btn btn-lg btn-success'>Guardar nota</button>
                    </article>
                </form>
            </article>
        </section>
    );
};

export default NoticiaABM;