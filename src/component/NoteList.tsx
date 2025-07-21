import type { NotesProps } from "../types";

const NoteList = ({ notes }: Partial<NotesProps>) => {
  if (!notes || !notes.length) {
    return <p className="main-title">No Notes Yet</p>;
  }
  return (
    <div>
      {notes.map((note, index) => (
        <div className="tooltip" key={`wrapper-${index}`}>
          <h3>
            <strong>Titre :</strong> {note.title}
          </h3>
          <p>
            <strong>Catégorie</strong> - {note.category}
          </p>
          <p>
            <strong>Priorité</strong> - {note.priority}{" "}
          </p>
          <p key={`description-${index}`}>{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
