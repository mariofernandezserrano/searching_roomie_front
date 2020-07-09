import React from 'react';
import Style from '../styles/components/Search.scss';

const Search = () => {
  return (
    <div className="search">
      <form>
        <div>
          <label for="">¿Dónde te gustaría vivir?</label>
          <input className="search__input" type="text" placeholder="México, CDMX"></input>
        </div>
        <div>
          <label for="">Presupuesto máximo</label>
          <input className="search__input" type="text" placeholder="$2000"></input>
        </div>
        <button>Buscar</button>
      </form>
    </div>
  );
}

export default Search;