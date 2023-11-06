import React from "react";
import { Link } from "react-router-dom";
import selectedImages from "./image";
const Home = (props) => {
  return (
    <main className="principal">
      <h2>Últimos lançamentos</h2>
      {props.livros
        .filter((n,index) => index < 6)
        .map(livro =>(
          <div className="card" key={livro.id}>
            <div className="thumb">
              <img
                src={selectedImages([livro.id])}
                alt="Thumbnail da capa do livro..."
              />
            </div>
            {props.livros
             .filter(c => c.slug === livro.slug)
             .map(livro => (
                <Link to={`/livro/${livro.slug}`}>
                  {
                    <div className="detalhes">
                      <h3>{livro.titulo}</h3>
                      <p>{livro.descricao.slice(0,130) + "..."}</p>
                      <p> leia mais &gt;</p>
                    </div>
                  }
                </Link>
             ))
            }
          </div>
        ))  
      }
    </main>
  );
};

export default Home;