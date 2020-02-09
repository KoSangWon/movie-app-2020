import React from "react";
import propTypes from "prop-types"//PropTypes로 하면 error발생
import "./Movie.css";

function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movies_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {genres.map((genre, index) => ( //index안해주면 Warning
                    <li key={index} className="genres_genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie_summary">{summary.slice(0, 140)}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;