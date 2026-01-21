import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-color: #f0f0f0;
	color: #333;
	font-size: 2rem;
	font-weight: bold;
	font-family: 'Arial', sans-serif;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

`;

function App() {

	return (
		<Div>
			<i className="fa fa-camera-retro"></i>
			<h1>Dev Blog</h1>
		</Div>
	);
}

export default App;
