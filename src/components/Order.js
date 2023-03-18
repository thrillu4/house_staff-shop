import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";

export class Order extends Component {
  render() {
    return (
        <div className="item">
            <img src={'./img/' + this.props.item.img} alt="card" />
            <h2>{this.props.item.title}</h2>
            <b>{this.props.item.price}</b>
            <AiFillDelete className='delete-item' onClick={() => this.props.onDelete(this.props.item.id)}/>
        </div>
    )
  }
}

export default Order