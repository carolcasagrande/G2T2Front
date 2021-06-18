import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import './styles.css';

const SearchInput: React.FC = () =>(

    <div className="search">
      <div className="search-input">
        <SearchIcon placeholder='search patients' style={{color: '#13132B'}}/>
        <input type="Buscar histórico de prontuário" />
      </div>
    </div>

);

export default SearchInput;