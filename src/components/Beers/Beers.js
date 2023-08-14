import { useEffect, useState } from 'react';
import './Beers.css';
import axios from 'axios';
import BeerCard from './BeerCard';
import { useSelector } from 'react-redux';
import Pagination from '../Layout/Pagination';

const API_URL = 'https://api.punkapi.com/v2/beers'

const Beers = (props) => {
  const [beers, setBeers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  let searchTerm = useSelector((state) => state.search.searchTerm);

  const fetchBeers = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      setBeers(response.data);
    } catch (error) { 
      console.error('Error fetching beers:', error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  const SearchBeers = async () => {
    try {
      const response =  await axios.get(`${API_URL}?beer_name=${searchTerm}`)
      setBeers(response.data);
    } catch (error) {
      console.error('Error searching beers:', error);
    }
  };

  useEffect(() => {
    if(searchTerm!=="") SearchBeers();
  }, [searchTerm]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentBeerList = beers.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='displayList' data-testid="beer-List-Grid">
      <div className="listing-section">
      {
          currentBeerList.map((beer) => (
          <BeerCard
            key={beer.id}
            id={beer.id}
            name={beer.name}
            description={beer.description}
            imgUrl={beer.image_url}
          />
        ))
      }
      </div>
      <Pagination
          totalPosts={beers.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
      />
    </div>
  );
}

export default Beers;