import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';
import SearchBar from './Search';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return (
    <Fragment>
      <header className='header'>
        <Link to="/"><h3 className='logo'>Meme's Beer</h3></Link>
        <SearchBar  />
        <HeaderCartButton />
      </header>
    </Fragment>
  )
}

export default Header;

