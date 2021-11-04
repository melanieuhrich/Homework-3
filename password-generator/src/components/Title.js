import React from 'react';

const styles = {
	title: {
		color: 'blue',
		textAlign: 'center',
		fontFamily: 'arial'
	}
};

function Title() {
	return <h1 style={styles.title}>Password Generator</h1>;
}

export default Title;
