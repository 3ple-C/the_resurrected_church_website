import React from 'react';

function App() {
	const containerStyle = {
		position: 'relative',
		textAlign: 'center',
		fontFamily: 'Arial, sans-serif',
		left: '30%',
		top: "30%",
		position: "absolute",
	};

	const imgStyle = {
		position: 'absolute',
		left: '0',
		top: '0',
		zIndex: -1,
		// Lower z-index value
		boxShadow: '0px 0px 10px 0px black',
		borderRadius: "10px",
		width: 400,
		height: 400,
	};

	const headingStyle = {
		zIndex: 1,
		// Higher z-index value
		padding: '10px',
		borderRadius: '5px',
		margin: '0',
		textShadow: '2px 2px 4px white',
	};

	const textStyle = {
		margin: '10px',
		textShadow: '2px 2px 4px white',
	};

	return (
		<div style={containerStyle}>
			<h1 style={headingStyle}>
				The z-index Property
			</h1>
			<img
				src=
"https://media.geeksforgeeks.org/wp-content/uploads/20230816223829/geeksgforgeeks-logo-1.png"
				width="100"
				height="140"
				style={imgStyle}
				alt="Image"
			/>
			<p style={textStyle}>
				The image is going to be positioned
				behind the heading because it has
				a z-index of -1.
			</p>
		</div>
	);
}

export default App;
