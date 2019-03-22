import React, { Component } from 'react'

class AddButton extends Component{
	render(){
    	const inputIsEmpty = this.props.inputIsEmpty
       
    	return (
          <button disabled={inputIsEmpty}>Add</button>
        )
    }
}

export default AddButton