import React from "react";
import LinesEllipsis from 'react-lines-ellipsis';
import PropTypes from "prop-types";
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <img src={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className='Movie__Genres'>
                    {genres.map(genre => <span className='Movie__Genre'>{genre} </span>)}
                </div>
                <div className='Movie__Synopsis'>
                    <LinesEllipsis text={synopsis}
                                   maxLine='3'
                                   ellipsis='...'
                                   trimRight
                                   baseOn='letters'/>
                </div>
            </div>
        </div>
    );
}

export default Movie;

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
};
