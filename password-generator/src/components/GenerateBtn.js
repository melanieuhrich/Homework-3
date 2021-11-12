import React from 'react';
import Button from 'react-bootstrap/Button';

const styles = {
	btn: {
		backgroundColor: 'teal',
		border: 'teal'
	}
};

function GenerateBtn() {
	return <Button style={styles.btn}>Generate Password</Button>;
}

export default GenerateBtn;
