import { useState } from 'react';
import './Search.css'

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  // console.log("test",search)

  const searchChangeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
    props.onSearchData(search);

    console.log("Search.js", search)
  }

  return (
  <>
      <form className="search">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="search_field" placeholder="Search for Beer"/>
        <button className="search_btn" onClick={searchChangeHandler}>Search</button>
      </form>
    </>

  )
}

export default SearchBar;