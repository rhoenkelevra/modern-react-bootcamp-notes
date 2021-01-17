import React from 'react';

class Friend extends React.Component {
	render(){
		const { name, hobbies } = this.props;
		// another approach
		// const lis = {hobbies.map(h => <li>{h}</li>)}
		// <ul> {lis} </ul> 
		return (
			<div>
				<h1>{name}</h1>
				<ul>
					{hobbies.map(h => <li>{h}</li>)}
				</ul>
			</div>
		)
	}
}

export default Friend;