import React, { Component } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import SearchBar from "./Searchbar"
import _ from "lodash";
import * as actions from '../actions';
import { connect } from 'react-redux';


class MovieList extends Component {  

  componentDidMount () {
    this.props.fetchAllMovies()
  }


  render() {
    const movies = _.map(this.props.movies, (m) => {
      return <Movie id={m.id} key={m.id} title={m.title} img={m.poster_path} />
    });

    return (
      <>
        <SearchBar />
        <MovieGrid>
          {movies}
        </MovieGrid>
        </>
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
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;
