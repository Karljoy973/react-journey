import { useState, useEffect, type ChangeEventHandler } from "react";
import { useIncrement, type incrementHook } from "./hooks/useIncrement";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

function App() {
	const [timer, setTimer] = useState(5);
	const [remainingSeconds, setRemainingSeconds] = useState(5);
	let intervalRef: number | undefined = undefined;

	const [count, increment, decrement] = useIncrement(0) as incrementHook;
	const [name, setName] = useState<string>("");
	useDocumentTitle(name ? `Edit name : ${name}` : null);

	const handleNameInput: ChangeEventHandler<HTMLInputElement> = (e) => {
		setName((e.target as HTMLInputElement).value);
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setTimer(+e.target.value);
		setRemainingSeconds(+e.target.value);
	};

	useEffect(() => {
		intervalRef = setInterval(() => {
			setRemainingSeconds((value) => {
				if (value <= 1) {
					clearInterval(intervalRef);
					return 0;
				}
				return value - 1;
			});
		}, 1000);

		return () => {
			clearInterval(intervalRef);
		};
	}, [timer]);
	return (
		<>
			<div>
				<input type="text" value={name} onChange={handleNameInput} />
				<input
					value={timer}
					onChange={handleChange}
					placeholder="Timer..."
				/>
				<p id="text-timer">Il vous reste : {remainingSeconds}s</p>
			</div>
			<div>
				Compteur {count}
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</div>
		</>
	);
}

export default App;
