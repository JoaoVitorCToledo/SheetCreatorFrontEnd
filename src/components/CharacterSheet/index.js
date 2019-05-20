import React, { Component } from 'react';
import AttributeList from './attributeList'

class CharacterSheet extends Component {
  render () {
    return (
      <div class="character-sheet-template">
        <div class="attribute-area">
          <AttributeList/>
        </div>

        <div class="skill-area">Skills</div>

        <div class="stats-area">Stats</div>

        <div class="equipment-area">Equipment</div>

        <div class="description-area">Description</div>
      </div>
    )
  }
}

export default CharacterSheet;
