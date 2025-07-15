const Star = ({
  key,
  star,
  rating,
  hover,
  color,
  clickHandler,
  mouseEnterHandler,
  mouseLeaveHandler,
}: StarProps) => {
  return (
    <span
      key={key}
      className="star"
      style={{
        color: star <= (hover || rating) ? color : "#ccc",
      }}
      onClick={clickHandler ? () => clickHandler() : undefined}
      onMouseEnter={mouseEnterHandler ? () => mouseEnterHandler() : undefined}
      onMouseLeave={mouseLeaveHandler ? () => mouseLeaveHandler() : undefined}
    >
      {" "}
      {"\u2605"}{" "}
    </span>
  );
};

type StarProps = {
  key: number;
  star: number;
  rating: number;
  hover: number;
  color: string;
  clickHandler?: Function;
  mouseEnterHandler?: Function;
  mouseLeaveHandler?: Function;
};
export default Star;
