import React, { Component } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { connect } from "react-redux";
import * as actions from '../actions';
import _ from "lodash";


class MovieList extends Component {  

  componentDidMount () {
    this.props.fetchAllMovies()
  }


  render() {
    const movies = _.map(this.props.movies, (m) => {
      console.log(m.id)
      return <Movie id={m.id} key={m.id} title={m.title} img={m.poster_path} />
    });

    console.log('movie list rendered')

    return (
        <MovieGrid>
          {movies}
        </MovieGrid>
    );
  }
}

function mapStateToProps (state) {
  return ({ 
    movies: state.movies.results 
  }
  )};

export default connect(
  mapStateToProps,
  actions
)(MovieList);

const MovieGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;