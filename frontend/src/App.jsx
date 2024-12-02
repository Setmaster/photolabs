import React from 'react';
import './App.scss';
import HomeRoute from "./routes/HomeRoute";
import FavoritesProvider from './context/FavoritesContext';
import ModalProvider from "./context/ModalContext";

const App = () => {
  return (
      <FavoritesProvider>
          <ModalProvider>
        <div className="App">
          <HomeRoute/>
        </div>
          </ModalProvider>
      </FavoritesProvider>
  );
};

export default App;
