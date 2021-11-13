import { createContext, useEffect, useState } from "react";

export const WaveContext = createContext();

export const WaveProvider = ({ children }) => {
  const [currentPlayList, setCurrentPlayList] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const initialLocalStorage = () => {
      const initialStore = localStorage.getItem("first");
      !initialStore && localStorage.setItem("id", JSON.stringify(favourites));
    };
    initialLocalStorage();
    fetchFromLocalStorage();
    setInitial(false);
    localStorage.setItem("first", "not");
  }, []);

  useEffect(() => {
    !initial && updateLocalStorage();
  }, [favourites]);

  const fetchFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("id"));

    data.length !== 0 ? setFavourites(data) : setFavourites([]);
  };

  const updateLocalStorage = () => {
    localStorage.setItem("id", JSON.stringify(favourites));
  };

  return (
    <WaveContext.Provider
      value={{ currentPlayList, setCurrentPlayList, favourites, setFavourites }}
    >
      {children}
    </WaveContext.Provider>
  );
};
