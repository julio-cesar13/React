import React from 'react'
import {Link, NavLink} from 'react-router-dom'

let linkCorrente = {
  color: "#027399"
};

const Navegacao = () => {
  return (
    <ul>
        <li>
          <NavLink exact activeStyle={linkCorrente} to="/">Home</NavLink>
        </li>
        <li>
          <Link to="/frontend">Frontend</Link>
        </li>
        <li>
          <NavLink exact activeStyle={linkCorrente} to="/programacao">Programação</NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={linkCorrente} to="/design">Design</NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={linkCorrente} to="/catalogo">Catalogo</NavLink>
        </li>
        <li>
        <NavLink exact activeStyle={linkCorrente} to="/naoexiste">Nao Existe</NavLink>
        </li>
    </ul>
  );
};

export default Navegacao