import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class StartupList extends Component {

	constructor(props, context){
		super(props, context)

		this.state = {
			startups: [

				{name: 'investFeed', city: 'NYC'},
				{name: 'Alphabet', city: 'SF'},
				{name: 'Amazon', city: 'Seattle'},
				{name: 'MakeSpace', city: 'NYC'}
			]
		}
	}

	render(){

		var list = this.state.startups.map(function(startup, i){
			return <ListItem key={i} text={startup} />

		})

		return (
				<div>
					<ol>
						{list}
					</ol>
				</div>
			)
	}
}

export default StartupList