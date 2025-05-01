import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByLocation } from '../redux/propertySlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchByLocation(query));
  };

  const findNearMe = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      // Call API or dispatch action with lat/lng
      console.log("Your Location: ", latitude, longitude);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city or zip"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={findNearMe}>Apartments Near Me</button>
    </div>
  );
};

export default SearchBar;
