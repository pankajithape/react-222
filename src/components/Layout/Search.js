import './Search.css'

const SearchBar = () => {

  return (
  <>
      <form className="search">
        <input type="text" className="search_field" placeholder="Search for Beer"/>
        <button className="search_btn">
          <span>Search</span>
        </button>
      </form>
    </>

  )
}

export default SearchBar;