import type { NoteInputProps } from "../types";

/**
 * @function NoteInput
 * @description - Function that encapsulate the style of the inputs of my application
 * @param {NoteInputProps} props
 * @returns {JSX.Element}
 */
export const NoteInput = ({
  type,
  label,
  placeholder,
  value,
  setValue,
}: Partial<NoteInputProps>) => {
  return (
    <>
      <div className="input-wrapper col">
        <label htmlFor={label}>{label}</label>
        <input
          type={type}
          value={value}
          onChange={setValue ? (e) => setValue(e.target.value) : undefined}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
