import {  useState } from 'react';
import './Search.css'
import { searchActions } from '../../store/search-slice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = (props) => {
  const [search, setSearch] = useState(useSelector((state) => state.search.searchTerm));
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchActions.searchBeer(search))
  }

  return (
  <>
      <form className="search">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="search_field" placeholder="Search for Beer"/>
        <button className="search_btn" onClick={searchHandler}>Search</button>
      </form>
    </>

  )
}

export default SearchBar;