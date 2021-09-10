import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(() => {
      if(localStorage.getItem('allPhotos') === null ){
        fetch(url)
          .then(res => res.json())
          .then(data => setAllPhotos(data))
       }
       else{
        let localImages = JSON.parse(localStorage.getItem("allPhotos"));
        setAllPhotos(localImages)
       }

       if (localStorage.getItem("cartItems") === null ) {
        localStorage.setItem("cartItems", JSON.stringify([]));
      } else{
      let localCart = JSON.parse(localStorage.getItem("cartItems"));
      setCartItems(localCart)}
      
      
      
      }, [])


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("allPhotos", JSON.stringify(allPhotos));
  }, [allPhotos])







  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        setCartItems,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
