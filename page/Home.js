import React, { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PropertyList from '../components/PropertyList';
import MapView from '../components/MapView'; // If you added this
import { useDispatch } from 'react-redux';
import { fetchProperties } from '../redux/propertySlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <PropertyList />
      <MapView /> {/* Optional */}
    </div>
  );
};

export default Home;
