import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import * as actions from '../actions';
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";




//controls the search bar
function SearchBar(props) {

  //using hooks to save the search term as it is changed. 
  const [term, setSearchTerm] = useState('')

  //called when a new search option is searched
  const onFormSubmit = function (event) {
    //sends the search to the actions
    props.fetchMovie()
  }

  const logoClick = () =>{props.fetchAllMovies()}

      return (
        
        <SearchContainer>
       
        <button id="logo" onClick={logoClick}>
        <a to="/">
          <h1>Movie Database</h1>
        </a>
        </button>
          <form id="search">
            <select id="cars" name="carlist" form="carform">
                <option value="Movies">Movies</option>
                <option value="People">People</option>
            </select>
            <input onChange={event => setSearchTerm(event.target.value)} type="text" placeholder="Search"></input>
            <button className='search-btn' type='button' onClick={onFormSubmit}>Go!</button>
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
      a {
        color: #fff;
      }
    `;

