import React from "react";
import selectedImages from "./image";
const Programacao = (props) => {
  return (
    <main className="principal">
      <h2>Categoria Programacao</h2>
      {props.livros.map((livro,index) => (
          <div className="card">
            <div className="thumb">
              <img src={selectedImages([livro.id])} alt="" />
            </div>
            <div className="detalhes">
              <h3>{livro.titulo}</h3>
              <p>{livro.descricao.substring(0,20) + '...'}</p>
              <a href="#">Leia mais &gt;</a>
            </div>
          </div>
        ))
        }
    </main>
  );
};

export default Programacao