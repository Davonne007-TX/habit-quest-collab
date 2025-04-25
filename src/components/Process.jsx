import Card from "./Card";

export default function Process() {
  const howQuestUnfolds = [
    {
      process: "Creating Habits",
      processDescription:
        "Set up daily habits that align with your personal goals.",
      id: 1,
    },
    {
      process: "Complete Tasks",
      processDescription:
        "Check off completed habits to earn XP and level up your character.",
      id: 2,
    },
    {
      process: "Journal Reflections",
      processDescription:
        "Record your thoughts your experiences in your quest journal.",
      id: 3,
    },
    {
      process: "Reveal Your Story",
      processDescription:
        "AI generates your hero's journey based on your progress. Share story on Social Media.",
      id: 4,
    },
  ];

  return (
    <section className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-20 py-14">
      <ul className="flex flex-col justify-center items-center lg:flex-row gap-10 w-full">
        {howQuestUnfolds.map((unfold) => (
          <Card
            key={unfold.id}
            backgroundColor="bg-gradient-to-r from-purple-600 via-indigo-500 to-teal-400"
            personalizeCard="flex flex-col mt-22"
            cardHeading={unfold.process}
            cardDescription={unfold.processDescription}
            descriptionStyles="text-xl p-2"
          />
        ))}
      </ul>
    </section>
  );
}
