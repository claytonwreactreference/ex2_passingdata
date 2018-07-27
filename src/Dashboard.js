import React, {Component} from 'react'
import MovieCard from './MovieCard.js'

class Dashboard extends Component {
  render(){
  	const {users, movies, usersByMovie} = this.props
    const movieCards = Object.keys(movies).map(id => (
      <MovieCard 
      key={id}
      usersWhoLikedMovie={usersByMovie[id]}
      users={users}                                         
      movieInfo={movies[id]}
      />
  	));
	return(
      <ul>{movieCards}</ul>
    )}
}
export default Dashboard;