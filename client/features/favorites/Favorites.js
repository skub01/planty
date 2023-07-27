import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome to the favorites page!</h3>
      <p>Here a user will be able to view all of their saved recipes.</p>
    </div>
  );
};

export default Favorites;
