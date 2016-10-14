import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Columns from './columns.jsx';


class MainContainer extends React.Component{

	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.setState({data:[], loading:true})
	}

	componentDidMount(){
		this.setState({loading: true});
		$.ajax({
		     url: "http://localhost:8088/scripts/details.json",
		     dataType: 'json',
		     cache: false,
		     success: function(data) {
		       this.setState({data: data, loading: false});
		     }.bind(this),
		     error: function(xhr, status, err) {
		       console.error(url, status, err.toString());
		     }.bind(this)
		   });
	}
	render(){
		if(this.state.loading){
			return <div>Loading...</div>;
		}
		return(
				<div className="mainWrapper">
					<Columns title="todo" details={this.state.data.todo}/>
					<Columns title="inprogress" details={this.state.data.inprogress}/>
					<Columns title="QA-failed" details={this.state.data.qaready}/>
					<Columns title="QA-completed" details={this.state.data.qafailed}/>
					<Columns title="accepted" details={this.state.data.accepted}/>
					<Columns title="closed" details={this.state.data.closed}/>
				</div>
				
		);
	}
}

render(<MainContainer/>, document.getElementById('app'));



