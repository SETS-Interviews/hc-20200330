import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import * as actions from '../actions';
import styled from "styled-components";
import { Link } from "react-router-dom";

//controls the search bar
function SearchBar(props) {

//using hooks to save the search term as it is changed. 
const [query, setSearchQuery] = useState('')

//using hooks to save the term type when it changes. 
const [type, setSearchType] = useState('movie')

  //called when a Go butto is clicked
  const onFormSubmit = function (event) {
    //sends the search to the actions
    props.fetchSearch(type, query)
  }

  //shows all movies when logo is clickd
  const logoClick = () =>{props.fetchAllMovies()}

      return (
        <SearchContainer>
            <button id="logo" onClick={logoClick}>
                <Link to="/">
                    <h1>Movie Database</h1>
                </Link>
            </button>
            <form id="search">
                <select id='selector' onChange={event => setSearchType(event.target.value)}>
                    <option value="movie">Movies</option>
                    <option value="person">People</option>
                </select>
                <input id='bar' onChange={event => setSearchQuery(event.target.value)} type="text" placeholder="Search"></input>
                <button className='search-btn' type='button' onClick={onFormSubmit}>
                <Link to="/">
                Go!
                </Link>
                </button>
            </form>
        </SearchContainer>
      )
    }

    export default connect(
        null,
        actions
      )(SearchBar);


      const SearchContainer = styled.div`
      position: fixed;
      z-index: 999;
      background: hsl(0, 0%, 13%);
      color: whitesmoke;
      margin-top: 0;
      width: 100%;
      height: auto;
      padding: 1.5em;
      #logo {
        position: relative;
        float: left;
        width: 200px;
        height: auto;
        background-color:hsl(0, 0%, 13%);
        border: none;
        outline:none;
      }
      #search {
        position: relative;
        float: right;
        margin-right: 100px;
        margin-top:20px;
        height: auto;
      }
      #bar{
          width:300px;
      }
      a {
        color: #fff;
      }
    `;

