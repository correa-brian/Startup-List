import React, { Component } from 'react'

class ListItem extends Component {
	constructor(props, context){
		super(props, context)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		console.log('handleClick')
	}

	render(){

		var content = ""

		if(this.props.text.team == null && this.props.text.worth == null){
			var color = (this.props.text.location == 'SF') ? 'red' : 'black'
				content = <span style={{color:color}}>{this.props.text.name}, {this.props.text.location}</span>
		}

		else {
			content = <span>{this.props.text.name}, {this.props.text.team}, {this.props.text.worth}</span>
		}

		return (
			<li> {content} </li>
		)
	}
}

export default ListItem