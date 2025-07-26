export type NoteSelectProps = {
  options: { value: string; label: string }[];
  name: string;
  id?: string;
  value: string;
  setValue: Function;
};

export type NoteInputProps = {
  type:
    | "email"
    | "text"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "radio"
    | "search"
    | "range"
    | "tel"
    | "time"
    | "url"
    | "week";
  label: string;
  placeholder: string;
  value: string;
  setValue: Function;
};

export type note = {
  id?: number;
  title: string;
  category: NoteCategory;
  priority: NotePrio;
  description: string;
};

export type NotesProps = {
  notes: note[];
  deleteNotes?: Function;
  showNotes?: Function;
  setNotes?: Function;
};

export type NoteCategory = "Travail" | "Personnel" | "Projets";
export type NotePrio = "Faible" | "Médium" | "Haute";
