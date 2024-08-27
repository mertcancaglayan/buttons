import "./App.css";
import Downloadbutton from "./buttons/download-button/Downloadbutton";
import Popbutton from "./buttons/pop-button/Popbutton";
import Squeezebutton from "./buttons/squeeze-button/Squeezebutton";
import Transparentbutton from "./buttons/transparent-button/Transparentbutton";

function App() {
	return (
		<div className="App">
			<Downloadbutton></Downloadbutton>
			<Squeezebutton></Squeezebutton>
			<Popbutton></Popbutton>
			<Transparentbutton></Transparentbutton>
		</div>
	);
}

export default App;
