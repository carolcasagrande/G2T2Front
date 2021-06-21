import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import './styles.css';

const SearchInput: React.FC = ({setSearchField}) =>(

  <div className="search">
  <div className="search-input">
    <SearchIcon style={{color: '#13132B'}}/>
    <input onChange={((e) => setSearchField(e.target.value))} placeholder="Buscar pacientes" />
  </div>
  </div>

);

export default SearchInput;
