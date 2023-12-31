import { useEffect, useRef, useState } from 'react';
import './Beers.css';
import axios from 'axios';
import BeerCard from './BeerCard';
import { useSelector } from 'react-redux';
import Pagination from '../Layout/Pagination';
import Header from '../Layout/Header';

const API_URL = 'https://api.punkapi.com/v2/beers'

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  let searchTerm = useSelector((state) => state.search.searchTerm);
  const [totalBeers, setTotalBeers] = useState(25);
  const initialLoadRef = useRef(true);
  const initialSearchRef = useRef(true);
  
  const fetchBeers = async () => {
    try {
      const response = await axios.get(`${API_URL}?page=${currentPage}&per_page=${postsPerPage}`);
      setBeers(response.data);
    } catch (error) { 
      console.error('Error fetching beers:', error);
    }
  };

  useEffect(() => {
    if(!initialLoadRef.current) fetchBeers();
  }, [currentPage]);

  useEffect(() => {
    if (initialLoadRef.current === true) {
      fetchBeers();
      initialLoadRef.current=false;
    }
  }, []);

  const SearchBeers = async () => {
    try {
      const response = await axios.get(`${API_URL}?beer_name=${searchTerm}&page=1&per_page=${postsPerPage}`)
      setBeers(response.data);
      setCurrentPage(1)
      setTotalBeers(response.data.length)
    } catch (error) {
      console.error('Error searching beers:', error);
    }
  };

  useEffect(() => {
    if (searchTerm !== "") {
      SearchBeers();
      initialSearchRef.current = false;
    }
    if (searchTerm === "" && !initialSearchRef.current) {
      setTotalBeers(25)
      fetchBeers();
    }
  }, [searchTerm]);

  return (<>
    <Header/>
    <div className='displayList' data-testid="beer-List-Grid">
      <div className="listing-section">
      {
        beers.map((beer) => (
          <BeerCard
            key={beer.id}
            id={beer.id}
            beerItem={beer}
            name={beer.name}
            isFavorite={beer.hasOwnProperty('isFav')}
            description={beer.description}
            imgUrl={beer.image_url}
          />
        ))
      }
      </div>
      <Pagination
          totalPosts={totalBeers}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
      />
    </div>
    </>
  );
}

export default Beers;