const Card = ({
  activeSlide: { image, name, title, quote },
  animationClass,
}) => {
  return (
    <div
      className={`card card-side bg-base-100 shadow-xl p-8 ring-2 ring-accent h-96 w-3/4 ${animationClass}`}
    >
      <div className="avatar">
        <div className="mask mask-hexagon w-32">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <p className="text-accent">{title}</p>
        <p>{quote}</p>
      </div>
    </div>
  );
};
export default Card;
