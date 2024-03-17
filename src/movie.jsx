import React from "react";

export default function movie({info}){

  const [fav ,setFav] = React.useState([])
  
  function addFavouriteMovie (movie){
		const newFavouriteList = [...fav, movie];
		setFav(newFavouriteList);
	};

  const movieList = info.map((info) =>{
        return (
          
            <div className="container">
              <img src={info.Poster} className="image" />
              <h4>{info.Title}</h4>
              <button  onClick={addFavouriteMovie(info)}>Favourite
              </button>
            </div>
           
        )
    })
  const favList = fav.map((favs) =>{
      return (
          <div className="container-2">
            <img src={favs.Poster} className="image-2" />
            <h4>{favs.Title}</h4>
          </div>
         
      )
  })
    return (
       <>
        <div className="searchList">
          {movieList}
        </div>
        <h1>Favourite</h1>
        <div className="Favourite">
        
          {favList}
        </div>

        </>
    )
}

