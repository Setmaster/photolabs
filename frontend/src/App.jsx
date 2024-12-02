import React from 'react';
import './App.scss';
import HomeRoute from "./routes/HomeRoute";
import ApplicationProvider from "./context/ApplicationContext";

const App = () => {
  return (
      <ApplicationProvider>
        <div className="App">
          <HomeRoute/>
        </div>
      </ApplicationProvider>
  );
};

export default App;
