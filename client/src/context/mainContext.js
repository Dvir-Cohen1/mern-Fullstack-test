import { createContext, useContext, useState, useEffect } from "react";
// import addOne from '../services/mainServices'
const MainContext = createContext();

export function useMainContext() {
  return useContext(MainContext);
}

export default function MainProvider({ children }) {
  const [data, setData] = useState({});



  // const addOneRequest = () => {
  //      setState((prev) => !prev);
  // };

  return (
    <MainContext.Provider value={data}>{children}</MainContext.Provider>
  );
}
