import { lazy, Suspense, useEffect, useState } from "react";
import { LoadingFallback } from "./component/Fallback";
import NoteList from "./component/NoteList";
import type { note } from "./types";
import FetchNotesAPI from "./component/FetchNotesAPI";

export default function App() {
	const Notes = lazy(() => import("./component/Notes"));
	const [notes, setNotes] = useState(() => {
		let storedNotes: note[] = [];
		if (!!localStorage.getItem("notes")) {
			storedNotes = JSON.parse(localStorage.getItem("notes") as string);
		}
		return storedNotes;
	});

	useEffect(() => {
		if (!notes) setNotes([]);
		{
			localStorage.setItem("notes", JSON.stringify(notes));
		}
	}, [notes]);

	const deleteNotes = (id: number) =>
		setNotes(notes.filter((note) => note.id !== id));

	return (
		<>
			<Suspense fallback={<LoadingFallback />}>
				<Notes notes={notes} setNotes={setNotes} />
				<div className="card animated-card">
					<h1>Tâches à faire</h1>
					<NoteList notes={notes} deleteNotes={deleteNotes} />
				</div>

				<FetchNotesAPI url={import.meta.env.VITE_NOTES} />
			</Suspense>
		</>
	);
}
