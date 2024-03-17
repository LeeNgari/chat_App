import React from "react";
import Movie from './movie.jsx'

export default function body(){
    const [movies , setMovies] = React.useState([

        {
            "Title":"Star Wars: Episode IV - A New Hope",
            "Year":"1977",
            "Rated":"PG",
            "Released":"25 May 1977",
            "Runtime":"121 min",
            "Genre":"Action, Adventure, Fantasy",
            "Director":"George Lucas",
            "Writer":"George Lucas",
            "Actors":"Mark Hamill, Harrison Ford, Carrie Fisher",
            "Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
            "Language":"English",
            "Country":"United States",
            "Awards":"Won 6 Oscars. 65 wins & 31 nominations total",
            "Poster":"https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
            "Ratings":[
               {
                  "Source":"Internet Movie Database",
                  "Value":"8.6/10"
               },
               {
                  "Source":"Rotten Tomatoes",
                  "Value":"93%"
               },
               {
                  "Source":"Metacritic",
                  "Value":"90/100"
               }
            ],
            "Metascore":"90",
            "imdbRating":"8.6",
            "imdbVotes":"1,424,627",
            "imdbID":"tt0076759",
            "Type":"movie",
            "DVD":"10 Oct 2016",
            "BoxOffice":"$460,998,507",
            "Production":"N/A",
            "Website":"N/A",
            "Response":"True"
         }, 
         {
            "Title":"Cars",
            "Year":"2006",
            "Rated":"G",
            "Released":"09 Jun 2006",
            "Runtime":"117 min",
            "Genre":"Animation, Adventure, Comedy",
            "Director":"John Lasseter, Joe Ranft",
            "Writer":"John Lasseter, Joe Ranft, Jorgen Klubien",
            "Actors":"Owen Wilson, Bonnie Hunt, Paul Newman",
            "Plot":"On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town and learns that winning isn't everything in life.",
            "Language":"English, Italian, Japanese, Yiddish",
            "Country":"United States",
            "Awards":"Nominated for 2 Oscars. 28 wins & 34 nominations total",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg",
            "Ratings":[
               {
                  "Source":"Internet Movie Database",
                  "Value":"7.2/10"
               },
               {
                  "Source":"Rotten Tomatoes",
                  "Value":"75%"
               },
               {
                  "Source":"Metacritic",
                  "Value":"73/100"
               }
            ],
            "Metascore":"73",
            "imdbRating":"7.2",
            "imdbVotes":"455,648",
            "imdbID":"tt0317219",
            "Type":"movie",
            "DVD":"01 Jan 2014",
            "BoxOffice":"$244,082,982",
            "Production":"N/A",
            "Website":"N/A",
            "Response":"True"
         }
    ])
   
   

    return(
        <div className="body">
          <Movie info = {movies}/>
        </div>
    )
}

// React.useEffect(()=>{

      //  fetch(`{http://www.omdbapi.com/?t=${text}}`)
     //   .then(response => response.json())
       // .then(data => console.log(data))
      //} , [text])