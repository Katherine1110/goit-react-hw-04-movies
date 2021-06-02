import React, { Component } from 'react';
// import MovieItem from '../MovieItem/MovieItem';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import * as movieApi from '../../servises/movie-api';

// const API_KEY = 'f66ea1b32f711902f384aa58ac70e4e4';

//  const baseURL = 'https://api.themoviedb.org/3',

class HomePage extends Component {
  static defaultProps = {};

  static propTypes = {};
  state = {
    trending: [],
  };

  componentDidMount() {
    movieApi.getTrending().then(movies => {
      this.setState({
        trending: movies,
      });
    });
  }

  render() {
    // console.log(this.props.match);
    const { trending } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {trending.map(movie => (
            <li key={movie.id}>
              <Link to={{ pathname: `/movies/${movie.id}` }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
