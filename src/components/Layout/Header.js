import React, { Component, Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';
import SearchBar from './Search';

const Header = (props) => {
  return (
    <Fragment>
      <header className='header'>
        <h3>Meme's Beer</h3>
        <SearchBar />
        <HeaderCartButton />
      </header>
    </Fragment>
  )
}

export default Header;