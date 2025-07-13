import { useState, type ChangeEventHandler } from "react";
import { useIncrement, type incrementHook } from "./hooks/useIncrement";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { AsyncComponent } from "./components/AsyncComponent";
import { TimerComponent } from "./components/TimerComponent";

function App() {
	const [count, increment, decrement] = useIncrement(0) as incrementHook;
	const [name, setName] = useState<string>("");
	useDocumentTitle(name ? `Edit name : ${name}` : null);

	const handleNameInput: ChangeEventHandler<HTMLInputElement> = (e) => {
		setName((e.target as HTMLInputElement).value);
	};

	return (
		<>
			Compteur {count}
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<TimerComponent />
			<input type="text" value={name} onChange={handleNameInput} />
			<AsyncComponent />
		</>
	);
}

export default App;
