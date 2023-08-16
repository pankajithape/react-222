import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';
import SearchBar from './Search';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchActions } from '../../store/search-slice';

const Header = (props) => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(searchActions.searchBeer(""))
  }

  return (
    <Fragment>
      <header className='header'>
        <Link to="/" onClick={handleLinkClick}><h3 className='logo'>Meme's Beer</h3></Link>
        <SearchBar  />
        <HeaderCartButton />
      </header>
    </Fragment>
  )
}

export default Header;

