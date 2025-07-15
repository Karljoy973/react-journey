export function BlogInput({
  type = "text",
  placeholder,
  required,
  label,
  name,
}: Partial<BlogInputSpecs>) {
  return (
    <>
      {label ? <label htmlFor={name ?? ""}>{label}</label> : ""}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        name={name}
      />
    </>
  );
}

type BlogInputSpecs = {
  type: string;
  placeholder: string;
  required: boolean;
  label: string;
  name: string;
};

//il faut lui rajouter son css par défaut
