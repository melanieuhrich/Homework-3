import './App.css';
import Title from './components/Title';
import LengthCard from './components/LengthCard';
import LowCharCard from './components/LowCharCard';
import UpCharCard from './components/UpCharCard';
import NumCard from './components/NumCard';
import SpecCard from './components/SpecCard';
import GenerateBtn from './components/GenerateBtn';
import PasswordCard from './components/PasswordCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

const lowChar = 'abcdefghijklmnopqrstuvwxyz';
const upChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '1234567890';
const spec = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
let selectionString = '';
let length = parseInt();

class App extends React.Component {
	getRandomInt = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	};

	writePassword = () => {
		selectionString = '';
	};

	// validateLength = () => {
	// 	if (length < 8) {
	// 		console.log('Password length should be greater than 8 characters');
	// 		alert('Password length should be greater than 8 characters');
	// 	}

	// 	if (length > 128) {
	// 		console.log('Password length should be less than 128 characters');
	// 		alert('Password length should be less than 128 characters');
	// 	}
	// };

	filterLowChar = () => {
		selectionString = selectionString + lowChar;
	};

	filterUpChar = () => {
		selectionString = selectionString + upChar;
	};

	filterNum = () => {
		selectionString = selectionString + num;
	};

	filterSpec = () => {
		selectionString = selectionString + spec;
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="title">
						<Title />
					</div>
					<Row>
						<Col>
							<LengthCard />
						</Col>
						<Col>
							<LowCharCard />
						</Col>
						<Col>
							<UpCharCard />
						</Col>
						<Col>
							<NumCard />
						</Col>
						<Col>
							<SpecCard />
						</Col>
					</Row>
					{/* <LengthCard /> */}
					{/* <div className="row1">
						<Row>
							<Col className="col1">
								<LowCharCard />
							</Col>
							<Col className="col2">
								<UpCharCard />
							</Col>
						</Row>
					</div>
					<div className="row2">
						<Row>
							<Col className="col3">
								<NumCard />
							</Col>
							<Col className="col4">
								<SpecCard />
							</Col>
						</Row>
						<div className="btn-container">
							<div className="generate-btn">
								<GenerateBtn />
							</div>
						</div>
						<div className="pw-card">
							<PasswordCard />
						</div>
					</div> */}
				</header>
			</div>
		);
	}
}

export default App;
