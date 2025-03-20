import Card from "./Card";

export default function ChooseYourCharacter() {
  const pickYourCharacter = [
    {
      image: "🧙‍♂️",
      altText: "Wizard, emoji by emojipedia.org",
      name: "Wizard",
      description: `Highly intelliget and full of magic. Perfect
      for those focused on learning and mental growith.`,
      buttonText: "Begin Journey",
      id: 1,
    },
    {
      image: "🥷",
      altText: "Ninja, emoji by emojipedia.org ",
      name: "Ninja",
      description: `Highly intelliget and full of magic. Perfect
      for those focused on learning and mental growith.`,
      buttonText: "Begin Misson ",
      id: 2,
    },
    {
      image: "🦸🏻",
      altText: "Superhero, emoji by emojipedia.orgs ",
      name: "Superhero",
      description: `Highly intelliget and full of magic. Perfect
      for those focused on learning and mental growith.`,
      buttonText: "Begin Quest",
      id: 3,
    },
  ];
  return (
    <section className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-6">
      {pickYourCharacter.map((character) => (
        <Card
          key={character.id}
          characterImage={character.image}
          character={character.name}
          characterDescription={character.description}
          btnTxt={character.buttonText}
          btnStyles={"bg-white rounded-xl text-purple-500 p-2 font-bold"}
        />
      ))}
    </section>
  );
}
