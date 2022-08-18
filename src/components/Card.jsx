const Card = ({ card }) => {
  console.log({ card });
  return (
    <div className="bg-white rounded-xl border-2 shadow-md p-3 border-gray-300">
      <div
        className={`h-12 w-12 ${
          card.whiteBg ? "bg-white" : "bg-gray-200"
        } shadow-lg rounded-lg flex items-center justify-center`}
      >
        <img src={card.icon} alt={card.cardTitle} />
      </div>

      <p className="text-4xl font-semibold text-gray-900 mt-3">{card.count}</p>

      <h2 className="text-xl font-semibold text-gray-900 mt-3">
        {card.cardTitle}
      </h2>

      <p className="text-base font-normal text-gray-400 mt-1">
        {card.cardDesc}
      </p>
    </div>
  );
};

export default Card;
