export const fetchProperties = () => async (dispatch) => {
    const res = await fetch('http://localhost:5000/api/listings');
    const data = await res.json();
    dispatch(setListings(data));
  };
