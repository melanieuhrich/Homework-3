import React from 'react';
import Card from 'react-bootstrap/Card';

function PasswordCard() {
	return (
		<Card>
			<textarea readonly id="password" placeholder="Your Secure Password" aria-label="Generated Password" />
		</Card>
	);
}

export default PasswordCard;
