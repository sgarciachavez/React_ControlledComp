import React, { Component } from 'react'

class DeleteButton extends Component{
	render(){
    	const deleteLastItem = this.props.deleteLastItem
        const noItemsFound = this.props.noItemsFound
    	return (
          <button onClick={deleteLastItem} disabled={noItemsFound}>
          Delete Last Item
        </button>
        )
    }
}

export default DeleteButton