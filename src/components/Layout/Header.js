import React, { Component, Fragment, useState } from 'react';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';
import SearchBar from './Search';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Header = (props) => {

  // const [search, setSearch] = useState('');
  // const dispatch = useDispatch();

  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   console.log("search.js search",search)
  //   dispatch(searchActions.searchBeer(search))
  // }

  return (
    <Fragment>
      <header className='header'>
        <h3 className='logo'>Meme's Beer</h3>
        {/* <h3><Link className='homeLink' to={{}}>Meme's Beer</Link></h3>  */}
        {/* <Link to={{ search: '' }}>Meme's Beer</Link> */}
        <SearchBar  />
        <HeaderCartButton />
      </header>
    </Fragment>
  )
}

export default Header;

