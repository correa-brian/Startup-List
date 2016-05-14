import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class ProfileList extends Component {

	constructor(props, context){
		super(props, context)

		this.addProfile = this.addProfile.bind(this)
		this.updateProfile = this.updateProfile.bind(this)

			this.state = {

				profile: {
					name: '',
					location: '',
					worth: ''
				},

				profiles: [
					{name: 'Jose Conseco', team: 'California', worth: '$50'},
					{name: 'Alex Rodriguez', team: 'New York', worth: '$50,000,000'},
					{name: 'Barry Bonds', team: 'California', worth: '$90,000,000'},
					{name: 'Ryan Braun', team: 'Wisconsin', worth: '$10,000,000'},
				]

			}

		}

		addProfile(event){
			event.preventDefault()
			console.log('addProfile: '+JSON.stringify(this.state.profile))

			var updatedProfiles = Object.assign([], this.state.profiles)
			updatedProfiles.push(this.state.profile)

			this.setState({
				profiles: updatedProfiles
			})
		}

		updateProfile(event){
			console.log('updateProfile: '+ event.target.id +' == '+ event.target.value)

			var updatedProfile = Object.assign({}, this.state.profile)
			updatedProfile[event.target.id] = event.target.value

			this.setState({
				profile: updatedProfile
			})	
		}

	render(){

		var list = this.state.profiles.map(function(profile, i){
			return <ListItem key={i} text={profile} />
		})

		return (
			<div className='list-box'>
				
				Profile List

				<ol>
					{list}
				</ol>

				<h2> Add Profile </h2>

				<input id="name" onChange={this.updateProfile} type="text" placeholder="Name" /><br />
				<input id="location" onChange={this.updateProfile} type="text" placeholder="Team" /><br />
				<input id="worth" onChange={this.updateProfile} type="text" placeholder="Worth" /><br />
				<a onClick={this.addProfile} href="#">Add</a>

			</div>
		)
	}
}

export default ProfileList