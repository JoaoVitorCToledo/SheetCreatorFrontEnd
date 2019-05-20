import React, { Component } from 'react';

class AttributeItem extends Component {
  render () {
    return (
      <div class="attribute-item-template">
        <div class="title-area">{this.props.name}</div>
        <div class="value-area">50</div>
        <div class="modifier">3</div>
      </div>
    )
  }
}

export default AttributeItem;
