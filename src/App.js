import React from 'react';
import './App.css';
import Movie from "./component/Movie";

const movieTitles = [
    'Matrix',
    'Pandas',
    'Full Metal Jacket',
    'Star Wars',
];

const moviePosters = [
    'https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
];

function App() {
    return (
        <div className="App">
            <Movie title={movieTitles[0]} poster={moviePosters[0]}/>
            <Movie title={movieTitles[1]} poster={moviePosters[1]}/>
            <Movie title={movieTitles[2]} poster={moviePosters[2]}/>
            <Movie title={movieTitles[3]} poster={moviePosters[3]}/>
        </div>
    );
}

export default App;
