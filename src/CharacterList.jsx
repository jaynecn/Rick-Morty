import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './state/actionCreators';
import styled from 'styled-components';

//Styled Components
const StyledCardDiv = styled.div`
border: 1px solid green;
padding: 0px 5px;
margin: 20px;
display: flex;
flex-direction: column;
max-width: 300px;
align-items: center;`

const StyledCardImageDiv = styled.img`
display: flex;
justify-content: center;
align-items: center;
width: 150px;`

export function CharacterList(props) {
  
  const fetchCharacters = e => {
    e.preventDefault();
    props.getCharacters();
  };

  const { state, getCharacters } = props;
  return (
    <div >
      <h2>Rick &amp; Morty!!</h2>
      <div className="character-list-div">
        {
          state.map((info) => (
            <div className="character-div">
              <h3>{info.name}</h3>
              <StyledCardImageDiv className="character-image" src={info.image} alt={info.name}/>
            </div>
          ))
        }
      </div>
      <button className="character-button" onClick={fetchCharacters}>Fetch Characters!</button>
    </div>
  )
}

const mapStateToProps = state => ({
  characters: state,
});

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators, // we get all action creators through props (9)
)(CharacterList);