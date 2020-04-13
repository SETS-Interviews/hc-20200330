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
    if(query==''){
      ///need to add error message!!!
      console.log('empty')
    }
    //sends the search to the actions
    props.fetchSearch(type, query)
  }

      return (
        <SearchContainer>
            <form id="search">
                <select type='text' id='selector' onChange={event => setSearchType(event.target.value)}>
                    <option value="movie">Movies</option>
                    <option value="person">People</option>
                </select>
                <input id='bar' onChange={event => setSearchQuery(event.target.value)} type="text" placeholder="Search"></input>
                <button id='search-btn' type='button' onClick={onFormSubmit}>
                <p type='text'>Go!</p>
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
      display: flex;
      flex-direction: row;
      width: 50%;
      height: auto;
      margin:auto;
      #search {
        position: relative;
        width: 100%;
        height:auto;
        border: none;
        outline:none;
        font-size:100px;
      }
      #selector {
        width: 25%;
        height: 100%;
        padding:10px;
      }
      #bar{
        width: 50%;
        height: 100%;
    
      }
      #search-btn{
        margin-top:0;
      }
      [type="text"]
      {
      font-size:20px;
      }
    `;

