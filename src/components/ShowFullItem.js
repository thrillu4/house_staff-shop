import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item' onClick={() => this.props.onShowItem()}>
            <div>
                <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} alt="card" />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}</b>
                <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
      </div>
    )
  }
}

export default ShowFullItem