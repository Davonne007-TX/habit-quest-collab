import Card from "./Card";

export default function QuestUnfolds() {
  const habitTracking = [
    {
      serviceImage: "./images/iconSensor.png",
      alt: "Icon of a sensor, by icons8",
      serviceHeading: "Habit Tracking",
      serviceDescription: `Create, track and complete daily habits
      to gain experience and level up your character.`,
      id: 1,
    },
    {
      serviceImage: "./images/journal.png",
      alt: "Icon of a journal, by icons8",
      serviceHeading: "Journal your Journey",
      serviceDescription: `Record your thoughts, challenges, and victories in your personal
      quest journey. Lets document your journey into tech.`,
      id: 2,
    },
    {
      serviceImage: "./images/stars.png",
      alt: "Icon of three stars, by icons8",
      serviceHeading: "AI Generative Story",
      serviceDescription: `Watch how AI transforms your habit and journal entries into an epic
      hero narrative customize just for you.`,
      id: 3,
    },
  ];

  return (
    <section className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-10 md:gap-20">
      {habitTracking.map((tracking) => (
        <Card
          backgroundColor={"bg-blue-600"}
          key={tracking.id}
          cardImage={tracking.serviceImage}
          alt={tracking.alt}
          personalizeCard="flex flex-col mt-4 gap-2"
          cardHeading={tracking.serviceHeading}
          descriptionStyles="text-xl"
          cardDescription={tracking.serviceDescription}
        />
      ))}
    </section>
  );
}
