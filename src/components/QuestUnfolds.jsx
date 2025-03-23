import Card from "./Card";

export default function QuestUnfolds() {
  const habitTracking = [
    {
      serviceImage: "./images/iconSensor.png",
      service: "Habit Tracking",
      serviceDescription: `Highly skilled Ninja waiting to make its move. Perfect
      for those building fundamentals, building till their moment..`,

      id: 1,
    },
    {
      serviceImage: "./images/journal.png",
      service: "Journal your Journey",
      serviceDescription: `Highly skilled Ninja waiting to make its move. Perfect
      for those building fundamentals, building till their moment..`,
      id: 2,
    },
    {
      serviceImage: "./images/stars.png",
      service: "AI Generative Story",
      serviceDescription: `Highly skilled Ninja waiting to make its move. Perfect
      for those building fundamentals, building till their moment..`,
      id: 3,
    },
  ];

  return (
    <section className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-2 md:gap-8">
      {habitTracking.map((tracking) => (
        <Card
          backgroundColor={"bg-blue-600"}
          key={tracking.id}
          cardImage={tracking.serviceImage}
          cardHeading={tracking.serviceHeading}
          cardDescription={tracking.serviceDescription}
        />
      ))}
    </section>
  );
}
