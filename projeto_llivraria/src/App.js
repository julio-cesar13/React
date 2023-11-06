import React, { Component } from "react";
import Topo from "./components/topo";
import Rodape from "./components/rodape";
import { Link,Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home";
import Frontend from "./components/frontend";
import Programacao from "./components/programacao";
import Catalogo from "./components/catalogo";
import NotFound from "./components/notfound";
import Design from "./components/design";
import Livro from "./components/livro";
import "./index.css"

class App extends Component{
  state = {
    livros: [],
  };

  componentDidMount() {
    fetch("/api/livros.json")
      .then((response) => response.json())
      .then((livros) => {
        this.setState({ livros });
      })
      .catch(function (error) {
        console.log("Erro na requisição");
      })
      .finally(function () {
        console.log("Sempre retorna");
      });
  }

  filtrarLivrosPorCategoria = (categoria) => {
    return this.state.livros.filter((livro) => livro.categoria === categoria);
  };

  filtrarLancamentos = (ano) => {
    return this.state.livros.filter((livro) => Number(livro.ano) >= ano);
    
  };

  
  render(){
    const frontend = this.filtrarLivrosPorCategoria("frontend");
    const programacao = this.filtrarLivrosPorCategoria("programacao");
    const design = this.filtrarLivrosPorCategoria("design");
    const home = this.filtrarLancamentos(2017)
    return(
      <Router>
        <Topo/>
        <Livro livro={ {
      "id": "9788575227268",
      "isbn": "978-85-7522-726-8",
      "titulo": "Dominando o Android com Kotlin",
      "slug": "dominando-o-android-com-kotlin",
      "autor": "Nelson Glauber",
      "categoria": "programacao",
      "ano": "2019",
      "paginas": "1064",
      "preco": "159",
      "descricao": "O Android é a plataforma do Google para dispositivos móveis que se tornou líder absoluta no mercado mundial, e a quantidade de recursos disponibilizada para os desenvolvedores permite criar uma envolvente e estimulante interação do usuário com o dispositivo. Dominando o Android com Kotlin apresenta por meio de exemplos práticos, desde conceitos mais básicos até as mais avançadas técnicas de desenvolvimento de aplicativos para a plataforma mobile do Google."
    }}/>
          <Routes>
            <Route exact path="/" element={<Home livros = {home}/>}/>
            <Route path="/frontend" element={<Frontend livros = {frontend}/>}/>
            <Route exact path="/programacao" element={<Programacao livros ={programacao}/>}/>
            <Route exact path="/design" element={<Design livros ={design}/>}/>
            <Route exact path="/catalogo" element={<Catalogo livros = {this.state.livros}/>}/>
            <Route path="/livro/:livroSlug" 
              element={(props) => {
                console.log(livro)
                const livro = this.state.livros.find(
                  livro => livro.slug === props.match.params.livroSlug
                );
                console.log('mkqwdmjnqfn')
                if(livro) return <Livro livro={livro} />
                else return <NotFound />
              }}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Rodape />
      </Router>
    );
  }
}
export default App;