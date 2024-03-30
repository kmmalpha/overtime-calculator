import './App.css';
import OvertimeCalculator from './components/OvertimeCalculator';

const App = () => {
	return (
		<div className="App">
			<header className='App-Header'>
				<h1>Overtime Calculator</h1>
				<OvertimeCalculator />
			</header>
		</div>
	);
}

export default App;
