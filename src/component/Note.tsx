import type { note } from "../types";

type noteProps = { note: note; index: number; deleteNotes?: Function };
const Note = ({ note, index, deleteNotes }: noteProps) => {
  return (
    <div
      className="tooltip"
      key={`wrapper-${index}`}
      style={{
        borderLeftColor:
          note.priority == "Faible"
            ? "green"
            : note.priority == "Médium"
              ? "yellow"
              : "red",
      }}
    >
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
      <button onClick={deleteNotes ? () => deleteNotes(note.id) : undefined}>
        <p className="poubelle"></p>
      </button>
    </div>
  );
};

export default Note;
