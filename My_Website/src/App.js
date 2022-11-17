import React from 'react';
import { useRoutes } from "react-router-dom";
import myRoute from './routes';

function App() {
  const routeb = useRoutes(myRoute)
  return (
    <>
    
    {routeb}
    
    </>
  );
}

export default App;
