import React from "react";
import MovieCard from './MovieCard'
import { FcGlobe } from "react-icons/fc";

function MovieList({movies, handleClickMovie}) {

    const showMovies = movies.map((movie) => {
       
        return (
            <MovieCard 
                key={movie.id}
                movie={movie}
                handleClickMovie={handleClickMovie}
                
            />
        )
    })

    return (
        <div>
            <h1 className="movie-list-header">
                <div className="welcome-globes">
                    Welcome to M<FcGlobe size=".75em"/>vie Tr<FcGlobe size=".75em"/>tter
                </div> 
            </h1>
            <h3 className="welcome-description">
                Thanks for visiting Movie Trotter! Click on any movie below to add it to your <em>Travel Log,</em> or feel free to add in the details of your favorite movie in the <em>Add a Movie</em> section. 
            </h3>

            <div className="movies-container">
                {showMovies}
            </div>
        </div>
    )
}

export default MovieList;