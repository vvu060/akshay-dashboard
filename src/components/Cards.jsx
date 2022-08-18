import Card from "./Card";
import { cards } from "../assets/data";

const Cards = () => {
  return (
    <>
      <div className="grid gap-4 grid-cols-2">
        {cards.slice(0, 4).map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
      <div className="grid gap-x-4 mt-4 grid-cols-3">
        {cards.slice(4, cards.length).map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </>
  );
};

export default Cards;
