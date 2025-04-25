import Card from "./Card";

export default function ChooseYourCharacter() {
  const pickYourCharacter = [
    {
      icon: "🧙‍♂️",
      altText: "Wizard, emoji by emojipedia.org",
      name: "Wizard",
      description: `Highly intelligent Wizard and full of magic! Perfect
      for those focused on learning and mental growth.`,
      buttonText: "Begin Journey",
      id: 1,
    },
    {
      icon: "🥷",
      altText: "Ninja, emoji by emojipedia.org ",
      name: "Ninja",
      description: `Highly skilled Ninja waiting to make its move. Perfect
      for those building fundamentals.`,
      buttonText: "Begin Mission ",
      id: 2,
    },
    {
      icon: "🦸🏻",
      altText: "Superhero, emoji by emojipedia.orgs ",
      name: "Superhero",
      description: `Highly invincible, wanting to help others. Perfect for those who want 
      to share their knowledge.`,
      buttonText: "Begin Quest",
      id: 3,
    },
  ];
  return (
    <section className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-10 md:gap-20">
      {pickYourCharacter.map((character) => (
        <Card
          backgroundColor={"bg-purple-600"}
          key={character.id}
          cardIcon={character.icon}
          cardHeading={character.name}
          personalizeCard="mt-4 flex flex-col gap-2"
          descriptionStyles="text-xl"
          cardDescription={character.description}
          btnTxt={character.buttonText}
          btnStyles={"bg-white rounded-xl text-purple-500 p-2 font-bold"}
        />
      ))}
    </section>
  );
}
