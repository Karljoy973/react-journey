import { useState } from "react";
import type { NotesProps } from "../types";
import NoteForm from "./NoteForm";

//

export default function Notes({ notes, setNotes }: NotesProps) {
  const [isFormActive, setIsFormActive] = useState(false);
  return (
    <>
      <div className={`card `}>
        <button
          className={` `}
          onClick={() => setIsFormActive((value) => !value)}
        >
          {isFormActive ? "x" : "+"}
        </button>
        <div className="row">
          <p className="notes-image"></p>
          <h2 className="main-title"> Notes App</h2>
        </div>
        {isFormActive ? <NoteForm notes={notes} setNotes={setNotes} /> : <></>}
      </div>
    </>
  );
}
