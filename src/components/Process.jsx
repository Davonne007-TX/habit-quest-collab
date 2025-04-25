import Card from "./Card";

export default function Process() {
  const howQuestUnfolds = [
    {
      processNumber: "1",
      process: "Creating Habits",
      processDescription:
        "Set up daily habits that align with your personal goals.",
      id: 1,
    },
    {
      processNumber: "2",
      process: "Complete Tasks",
      processDescription:
        "Check off completed habits to earn XP and level up your character.",
      id: 2,
    },
    {
      processNumber: "3",
      process: "Journal Reflections",
      processDescription:
        "Record your thoughts your experiences in your quest journal.",
      id: 3,
    },
    {
      processNumber: "4",
      process: "Reveal Your Story",
      processDescription:
        "AI generates your hero's journey based on your progress. Share story on Social Media.",
      id: 4,
    },
  ];

  return (
    <section className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-20 py-14">
      <ul className="flex flex-col justify-center items-center lg:flex-row gap-10 w-full relative">
        {howQuestUnfolds.map((unfold) => (
          <>
            <div className="flex flex-col justify-center items-center">
              <Card
                key={unfold.id}
                backgroundColor="bg-gradient-to-r from-purple-600 via-indigo-500 to-teal-400"
                personalizeCard="flex flex-col mt-28"
                processNumber={unfold.processNumber}
                cardHeading={unfold.process}
                cardDescription={unfold.processDescription}
                descriptionStyles="text-xl p-2"
              />
            </div>
          </>
        ))}
      </ul>
    </section>
  );
}
