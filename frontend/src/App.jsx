import React from 'react';
import './App.scss';
import HomeRoute from "./routes/HomeRoute";
import FavoritesProvider from './context/FavoritesContext'; // Import the provider

const App = () => {
  return (
      <FavoritesProvider>
        <div className="App">
          <HomeRoute/>
        </div>
      </FavoritesProvider>
  );
};

export default App;
