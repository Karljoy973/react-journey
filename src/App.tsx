import { useState } from 'react'

const showTitle = false;
const todos = ["cuisine", "nettoie ta chambre", "va faire les courses"];
function App() {
	const [count, setCount] = useState(0); 
	/**
	* // pour muter des objects 
	* const [data, setData] = useState({key1: value1, key2: value2 ... }); 
	* const handleEvent = () => {
	* setData(...data, keyK: data.keyK: newValueK)  parce qu'on ne peut pas faire de mutation dans un setter, on écrase la valeur
	* attention je ne peux pas mettre un hook dans une condition, ou qu'il y ait de return avant 
	* je veux hook(function ) et non function(hook) 
	* */
	const handleClick = () => {
		setCount((count) => count +1); 
	};
  return <>
		<p> Compteur {count} </p>
	
	<button onClick={handleClick} >Incrémenter</button>
	</>
}

export default App;

