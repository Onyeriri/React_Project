import react, { createContext } from 'react';

const newContext = createContext('');

const mainComponent = () => {
  <newContext.Provider value='hello'>

  </newContext.Provider>
}
