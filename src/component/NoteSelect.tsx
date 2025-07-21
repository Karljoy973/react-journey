import type { NoteSelectProps } from "../types";

export const NoteSelect = ({
  options,
  name,
  id,
  value,
  setValue,
}: NoteSelectProps) => {
  return (
    <>
      <label htmlFor={id || name}>{name} </label>
      <select
        className="note-select"
        name={name}
        id={id}
        onChange={setValue ? (e) => setValue(e.target.value) : undefined}
        value={value}
        key={0}
      >
        {options
          ? options.map((e, index) => (
              <option
                className="note-option"
                value={e.value}
                key={`${name}-option-${index}`}
              >
                {e.label}
              </option>
            ))
          : null}
      </select>
    </>
  );
};
