import React from 'react'
import selectedImages from './image';
const Livro = (props) => (
  <main className='principal'>
    <div className='pag-livro'>
        <img
            src={selectedImages([props.livro.id])}
            alt = "Thumbnail da capa do livro ..."
        />
        <ul>
            <li>ISBN: {props.livro.isbn}</li>
            <li>Ano: {props.livro.ano}</li>
            <li>Páginas: {props.livro.paginas}</li>
            <li>Preço: R${props.livro.preco},00</li>
        </ul>
        <hr />
        <h3>Descrição do livro</h3>
        <p>{props.livro.descricao}</p>
    </div>
  </main>
);

export default Livro;