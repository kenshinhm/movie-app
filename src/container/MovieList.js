import React from "react";
import './MovieList.css';
import Movie from "../component/Movie";

class MovieList extends React.Component {

    state = {};

    componentDidMount() {
        this._getMovieList();
    }

    _renderMovies(movies) {
        console.log(movies);

        return (
            movies.map(movie => {
                return <Movie key={movie.id}
                              title={movie.title_english}
                              poster={movie.medium_cover_image}
                              genres={movie.genres}
                              synopsis={movie.synopsis}/>
            })
        );
    }

    render() {
        const {movies} = this.state;

        return (
            <div className={movies ? "MovieList" : "MovieList--loading"}>
                {movies ? this._renderMovies(movies) : <div>Loading</div>}
            </div>
        );
    }

    async _getMovieList() {
        const movies = await this._fetchMovieList();
        this.setState({
            movies
        })
    }

    _fetchMovieList() {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log(response.status);
                }
            })
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    }
}

export default MovieList;