import { lazy, Suspense, useState } from "react";
import { LoadingFallback } from "./component/Fallback";
import NoteList from "./component/NoteList";
import type { note } from "./types";

export default function App() {
	const Notes = lazy(() => import("./component/Notes"));
	const [notes, setNotes] = useState([] as note[]);
	const deleteNotes = (id: number) =>
		setNotes(notes.filter((note) => note.id !== id));
	return (
		<>
			<Suspense fallback={<LoadingFallback />}>
				<Notes notes={notes ? notes : undefined} setNotes={setNotes} />
				<div className="card animated-card">
					<h1>Tâches à faire</h1>
					<NoteList notes={notes} deleteNotes={deleteNotes} />
				</div>
			</Suspense>
		</>
	);
}
