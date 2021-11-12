import React from 'react';
import Card from 'react-bootstrap/Card';

function LengthCard() {
	return (
		<div>
			<Card style={{ width: '13rem' }}>
				<Card.Body>
					<Card.Text>What would you like the length of your password to be?</Card.Text>
					<textarea readonly id="length" placeholder="Enter length" aria-label="Generated Password" />
				</Card.Body>
			</Card>
		</div>
	);
}

export default LengthCard;
