import { useState, type FormEventHandler } from "react";
import { prio, categorie } from "../data/main";
import { NoteInput } from "./NoteInput";
import { NoteSelect } from "./NoteSelect";
import type { NotesProps } from "../types";

const NoteForm = ({ notes, setNotes }: NotesProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Travail");
  const [priority, setPriority] = useState("Forte");
  const [description, setDescription] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!title || !description) {
      return;
    }
    const newNote = { id: Date.now(), title, category, priority, description };
    if (!!setNotes && !!notes) {
      setNotes([newNote, ...notes]);
    }
    setTitle("");
    setCategory("Travail");
    setPriority("Forte");
    setDescription("");
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        name="note-form"
        action="note-form"
      >
        <NoteInput
          label="Titre"
          type="text"
          placeholder="Titre de la note"
          key={0}
          setValue={setTitle}
          value={title}
        />
        <NoteSelect
                  options={prio}
                  name="Priorité"
                  id="priority-select"
                  key={2}        />
        <NoteSelect
                  options={categorie}
                  name="Catégorie"
                  id="category-select"
                  key={3}        />
        <NoteInput
          label="Description"
          type="text"
          key={1}
          placeholder="Que dois-tu faire ?"
          value={description}
          setValue={setDescription}
        />

        <button type="submit" formAction="note-form">
          Nouvelle Note
        </button>
      </form>
    </>
  );
};

export default NoteForm;
