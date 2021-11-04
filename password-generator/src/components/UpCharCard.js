import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const styles = {
	yesButton: {
		marginLeft: 50
	},
	noButton: {
		marginLeft: 10
	}
};

function UpCharCard() {
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Text>Would you like to include uppercase letters?</Card.Text>
					<Button style={styles.yesButton} variant="primary">
						Yes
					</Button>
					<Button style={styles.noButton} variant="primary">
						No
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default UpCharCard;
