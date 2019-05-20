import React, { Component } from 'react';
import AttributeItem from './attributeItem'

class AttributeList extends Component {
  render () {
    return (
      <div class="attribute-list-template">
        <AttributeItem class="attribute-area" name="Strength"/>
        <AttributeItem class="attribute-area" name="Constituion"/>
        <AttributeItem class="attribute-area" name="Dexterity"/>
        <AttributeItem class="attribute-area" name="Inteligence"/>
        <AttributeItem class="attribute-area" name="Charisma"/>
        <AttributeItem class="attribute-area" name="Perception"/>
      </div>
    )
  }
}

export default AttributeList;
