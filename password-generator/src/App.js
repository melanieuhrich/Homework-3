import Title from './components/Title';
import LowCharCard from './components/LowCharCard';
import UpCharCard from './components/UpCharCard';
import NumCard from './components/NumCard';
import SpecCard from './components/SpecCard';

// const styles = {
// 	whole: {
// 		backgroundColor: 'red'
// 	}
// };

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Title />
				<LowCharCard />
				<UpCharCard />
				<NumCard />
				<SpecCard />
			</header>
		</div>
	);
}

export default App;
