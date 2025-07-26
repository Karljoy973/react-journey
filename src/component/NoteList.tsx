import type { NotesProps, note } from "../types";
import Note from "./Note";

const NoteList = ({ notes, deleteNotes }: NotesProps) => {
  if (!notes || !notes.length) {
    return <p className="main-title">No Notes Yet</p>;
  }
  return (
    <div>
      {notes.map((note, index) => (
        <Note note={note} deleteNotes={deleteNotes} index={index} />
      ))}
    </div>
  );
};

export default NoteList;
