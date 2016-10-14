import React from 'react'

export default function({
	currUser,
	pushChat
}) {
	let input;

	return (
		<div className="comment-form">
			<input type="text"
				ref={node => input = node}
			/>
			<button onClick={e => {
				pushChat({
					user_id: currUser.id,
					text: input.value
				});

				input.value = '';
			}}>Submit</button>
		</div>
	)
}