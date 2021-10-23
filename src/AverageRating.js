const AverageRating = ({ rating }) => {
  return (
    <>
      <img
        className={"rating"}
        src={`/images/${rating}.png`}
        alt={`rating = ${rating}`}
      />
    </>
  );
};
export default AverageRating;
