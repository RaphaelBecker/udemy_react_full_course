import { createContext, useState } from "react";

// custom react component
// Components from a Javascript context object
// argument: Initial context by startup
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

// responsible for update the context values
// by passing props and wrapping <FavoritesContext.Provider>
// around props.children, this component can be wrappend now around any other
// components and this components is then wrapped by the FavoritesContext.
// This means, we can wrap this around any component which is interested in the FavoritesContext variables
function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // this could cause a delay in react:
    // setUserFavorites(userFavorites.concat(favoriteMeetup));
    // use instead this: It garantees that we always get the latest state snapshot
    setUserFavorites((prevUserFavorites) => {
      prevUserFavorites.concat(favoriteMeetup);
    });
  }

  // this function removes a meetup by id by setting a array of meetups where the passed meetupid was removed with .filter()
  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id != meetupId);
    });
  }

  // just returning true if a given meetupId is in userFavorites
  function itemIsFavoriteHandler(meetupid) {
    return userFavorites.some((meetup) => meetup.id === meetup);
  }

  // holds the latest object which should be exposed to all children
  // so userFavorites is a state snapshot containing all favorite meetups
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
