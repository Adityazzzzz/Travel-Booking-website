import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the PlaceContext
export const PlaceContext = createContext();

export function PlaceProvider({ children }) {
  const [homeplace, setHomeplace] = useState([]);

  // Fetch places data
  useEffect(() => {
    axios.get("/places").then((response) => {
      setHomeplace([
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
      ]);
    });
  }, []);

  return (
    <PlaceContext.Provider value={{ homeplace, setHomeplace }}>
      {children}
    </PlaceContext.Provider>
  );
}
