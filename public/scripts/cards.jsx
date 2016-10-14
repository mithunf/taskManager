import React from 'react'
import {render} from 'react-dom';
import $ from 'jquery';
import IScroll from 'iscroll';

export default class Cards extends React.Component{

	drag(ev){
			ev.dataTransfer.setData("content", ev.target.id);	
		}
	
	render(){
		return(
				<div className="cardElements mdl-card--border mdl-shadow--2dp through" draggable="true" id={this.props.title} onDragStart={this.drag}>
					<div className="cardValues">
						<span>{this.props.title}</span>
						<span>{this.props.desc}</span>
						<span>{this.props.date}</span>
						<span>{this.props.priority}</span>
					</div>
					<div className="cardImage">
						<img src={this.props.image}/>
					</div>
					
				</div>
		);
	}
}







