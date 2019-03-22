import React, { Component } from 'react'

class Items extends Component{
	render(){
    	const items = this.props.items
    	return (
          <div>
          	<p className="items">Items</p>
        	<ol className="item-list">
          		{items.map((item, index) => <li key={index}>{item}</li>)}
        	</ol>
          </div>
        )
    }
}

export default Items