import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    //예전 JS문법 사용해서 한 것
    //const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //console.log(movies.data.data.movies);
    //this.setState({movies: movies}) //앞의 movies는 setState의 movies, 뒤의 movies는 axios에서 온 movies이다.

    //ES6 JS최신 문법을 사용해서 해보겠다.
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    //console.log(movies);
    this.setState({movies, isLoading: false});
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;//ES6
    return (<section className="container">
      {
      isLoading ? (
      <div className="loader">
        <span className="loader_text">Loading...</span>
      </div>
      ) : (
      <div className="movies">
        {
            movies.map(movie => (
              <Movie
                 key={movie.id} //안해주면 Warning 뜸
                 id={movie.id} 
                 year={movie.year} 
                 title={movie.title} 
                 summary={movie.summary} 
                 poster={movie.medium_cover_image}
                 genres={movie.genres}
                 />
                ))
        }
      </div>
    )}
    </section>
    );//3항 연산자
  }
}

export default App;
