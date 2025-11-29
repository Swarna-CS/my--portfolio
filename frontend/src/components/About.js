import { cardData } from "../constants/data";

export default function InfoCards() {
  return (
    <section
      id="infocards"
      className="bg-[#0d0f17] text-white pt-10 pb-20 px-10 flex flex-col items-center"
    >
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl w-full">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="bg-[#171b25] p-8 rounded-2xl shadow-lg border border-gray-800 hover:shadow-2xl hover:scale-[1.02] transition-all"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-gray-400 leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
