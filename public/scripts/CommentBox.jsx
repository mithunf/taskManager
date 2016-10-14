import React from 'react'
import { Component } from 'react';

import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

export default class extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userList: [],
			chatData: [],
			currUser: {}
		},

		this.pushChat = this.pushChat.bind(this);
	}

	componentWillMount() {
		// fetch user list and fill
		this.setState({
			userList: [{
				id: 1,
				name: 'Saber'
			}, {
				id: 2,
				name: 'Mithun'
			}],

			currUser: {
				id: 2,
				name: 'Mithun'
			}
		})

		// fetch data from this.props.data.url
		// then set to state => 
		this.setState({
			chatData: [{
				user_id: 1,
				text: 'Hello World'
			}]
		})
	}

	pushChat(chat) {
		this.setState({
			chatData: [].concat( this.state.chatData, [chat] )
		})
	}

	render(){
		return(
			<div className="CommentBox">
				<h1>Comments</h1>

				<CommentList chatData={this.state.chatData}
					userList={ this.state.userList }
				/>

				<CommentForm currUser={this.state.currUser}
					pushChat={this.pushChat}
				/>
			</div>	
		);
	}
};