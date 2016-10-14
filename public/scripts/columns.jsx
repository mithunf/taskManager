import React from 'react'
import {render} from 'react-dom'
import Cards from './cards.jsx';
import $ from 'jquery';
import IScroll from 'iscroll';

export default class Columns extends React.Component{

	allowdrop(ev){
		ev.preventDefault();
	}

	drop(ev){
		ev.preventDefault();
		var item = ev.dataTransfer.getData("content");
		ev.target.appendChild(document.getElementById(item));
	}

	constructor(props) {
		super(props);
		this.node = undefined;
		this.iscroll = undefined;
	}
	componentDidMount(){
			this.iscroll = new IScroll(this.node, {
			mouseWheel: true,
			scrollbars: false,
			disableMouse:true
		})
	}
	componentWillUnmount() {
		this.iscroll.destroy();
	}

	render(){

		var val=this.props.details;

		return(
				<div className="column mdl-shadow--2dp through mdl-shadow--12dp" ref="scroll">
					<h6 className="mdl-card__title mdl-card__title-text">{this.props.title}</h6>
					<div className="wrapper" ref={node => this.node = node} onDrop={this.drop} onDragOver={this.allowdrop}>
						<div>
							{val.map((todo, index) => (<Cards 
								title={todo.title} 
								image={todo.image} 
								desc={todo.desc} 
								date={todo.date} 
								priority={todo.priority} 
								key={index}/> ))}
						</div>
					</div>
				</div>
		);
	}
}




