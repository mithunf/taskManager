import React from 'react'

export default function({
	name,
	children
}) {
	return (
		<div className="comment">
			<h2 className="commentAuthor">{ name }</h2>
			{ children }
		</div>
	)
}