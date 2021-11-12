import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const styles = {
	yesButton: {
		marginLeft: 50,
		backgroundColor: 'teal',
		border: 'teal'
	},
	noButton: {
		marginLeft: 10,
		backgroundColor: 'teal',
		border: 'teal'
	}
};

function SpecCard() {
	return (
		<div>
			<Card style={{ width: '13rem' }}>
				<Card.Body>
					<Card.Text>Would you like to include special characters?</Card.Text>
					<Button style={styles.yesButton}>Yes</Button>
					<Button style={styles.noButton}>No</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default SpecCard;
