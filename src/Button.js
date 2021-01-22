import React from 'react'

class Button extends React.Component {
	render() {
		return (
			<button onClick={()=> console.log("clicked")}>
				Click Me!
			</button>
		)
	}
}

export default Button;