import { createContext, useContext, useState, useEffect } from "react";
// import addOne from '../services/mainServices'
const MainContext = createContext();

export function useGameContext() {
     return useContext(MainContext);
}

export default function MainProvider({ children }) {
     const [requestData, setRequestData] = useState({
          title: '',
          imageUrl: ''
     });

     // const addOneRequest = () => {
     //      setState((prev) => !prev);
     // };

     return (
          <MainContext.Provider value={requestData}>
               {children}
          </MainContext.Provider>
     );
}
