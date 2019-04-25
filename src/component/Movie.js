import React, {Fragment} from "react";

// import 'Movie.css';

class Movie extends React.Component {

    render() {
        return (
            <Fragment>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </Fragment>
        );
    }
}


class MoviePoster extends React.Component {

    render() {
        return (
            <img
                src={this.props.poster}/>
        )
    }
}


export default Movie;