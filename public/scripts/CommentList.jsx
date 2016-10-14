import React from 'react'
import Comment from './Comment.jsx';

export default function({ chatData, userList }) {
	const getUser = id => userList.find(item => item.id === id);

	return (
		<div className="comment-list">
			{
				chatData.map((comment, index) => {
					return (
						<Comment key={ index }
							name={ getUser(comment.user_id).name }
						>
							{ comment.text }
						</Comment>
					)}
				)
			}
		</div>
	)
}