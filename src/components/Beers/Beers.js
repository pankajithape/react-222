import { useEffect, useState } from 'react';
import './Beers.css';
import axios from 'axios';
import BeerCard from './BeerCard';


const API_URL = 'https://api.punkapi.com/v2/beers'


const Beers = (props) => {
  const [beers, setBeers] = useState([]);
  const [Search, setSearch] = useState("");

  console.log("Search", Search)
  console.log("props.searchData", props.searchData)

  const fetchBeers = async () => {
    try {
      const response = await axios.get(`${API_URL}?per_page=10`);
      setBeers(response.data);
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  };

  const SearchBeers = async () => {
    try {
      const response =  await axios.get(`${API_URL}?beer_name=${Search}`)
      setBeers(response.data);
    } catch (error) {
      console.error('Error searching beers:', error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  // useEffect(() => {
  //   SearchBeers();
  // }, [Search]);

  // useEffect(() => {
  //   setSearch(props.searchData)
  //   props.searchData!=="" && SearchBeers();
  //   console.log("Beers.js ", Search)
  // }, [Search]);


  return (
    <>
      <div className="listing-section">
        {
            // beers.length > 0 && beers.map((beer) => (
              beers.map((beer) => (
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
    </>
  );
}

export default Beers;