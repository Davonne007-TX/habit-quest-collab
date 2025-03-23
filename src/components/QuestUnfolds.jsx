import Card from "./Card";

export default function QuestUnfolds() {
  const habitTracking = [
    {
      serviceImage: "./images/iconSensor.png",
      alt: "Icon of a sensor, by icons8",
      serviceHeading: "Habit Tracking",
      serviceDescription: `Create, track and complete daily habits
      to gain expierience and level up your character..`,
      id: 1,
    },
    {
      serviceImage: "./images/journal.png",
      alt: "Icon of a journal, by icons8",
      serviceHeading: "Journal your Journey",
      serviceDescription: `Record your thoughts, challenges, and victories in your personal
      quest journey.`,
      id: 2,
    },
    {
      serviceImage: "./images/stars.png",
      alt: "Icon of three stars, by icons8",
      serviceHeading: "AI Generative Story",
      serviceDescription: `Watch how AI transforms your habit and journal enteries into an epic
      hero narritave customize just for you.`,
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
          alt={tracking.alt}
          cardHeading={tracking.serviceHeading}
          cardDescription={tracking.serviceDescription}
        />
      ))}
    </section>
  );
}
