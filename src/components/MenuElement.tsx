export function MenuElement({ title }: MenuElementProps) {
  return (
    <>
      <li>{title}</li>
    </>
  );
}

type MenuElementProps = { title: string };
