import React from "react";
import './MovieList.css';
import Movie from "../component/Movie";

class MovieList extends React.Component {
    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {};

    componentDidMount() {
        this._getMovies();
    }

    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            return (
                <Movie
                    title={movie.title_english}
                    poster={movie.large_cover_image}
                    key={movie.id}
                    genres={movie.genres}
                    synopsis={movie.synopsis}
                />
            );
        });
        return movies;
    };

    // async _getMovieList() {
    //     const movies = await this._fetchMovieList();
    //     this.setState({
    //         movies
    //     })
    // }

    _getMovies = async () => {
        const movies = await this._callApi();
        this.setState({
            movies
        });
    };

    _callApi() {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
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

    render() {
        const {movies} = this.state;

        return (
            <div className={movies ? "MovieList" : "MovieList--loading"}>
                {movies ? this._renderMovies(movies) : "Loading"}
            </div>
        );
    }
}

export default MovieList;