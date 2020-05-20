import React from 'react';
import {Link} from 'react-router-dom';
import './category.css';




//Navbar Categories in the game section page
const Category = (props) => {
  return (
    <div>
      <div className="navCategories">
        <button className="buttonCategories">Palabras</button>
        <button className="buttonCategories">Arcade</button>
        <button className="buttonCategories">Puzles</button>
        <button className="buttonCategories">Cartas</button>
        <button className="buttonCategories">Casino</button>
        <Link to='iframe' className="buttonCategories">
          <p>Todos</p>
        </Link>
        <input className="buttonCategories" type="text" placeholder="Buscar.."/>
      </div>
    </div>
  )
}

export default Category
