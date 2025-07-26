import { useState, type FormEventHandler } from "react";
import { prio, categorie } from "../data/main";
import { NoteInput } from "./NoteInput";
import { NoteSelect } from "./NoteSelect";
import type { NotesProps } from "../types";

const NoteForm = ({ notes, setNotes }: NotesProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categorie[0].value);
  const [priority, setPriority] = useState(prio[0].value);
  const [description, setDescription] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!title || !description) {
      return;
    }
    if (!!setNotes && !!notes) {
      const newNote = {
        id: Date.now(),
        title,
        category,
        priority,
        description,
      };
      setNotes([newNote, ...notes]);
    }
    setTitle("");
    setCategory(categorie[0].value);
    setPriority(prio[0].value);
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
          key={2}
          value={priority}
          setValue={setPriority}
        />
        <NoteSelect
          options={categorie}
          name="Catégorie"
          id="category-select"
          key={3}
          value={category}
          setValue={setCategory}
        />
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
