import Card from "./Card";

export default function ChooseYourCharacter() {
  const pickYourCharacter = [
    {
      image: "",
      altText: "",
      name: "Wizard",
      description: `Highly intelliget and full of magic. Perfect
      for those focused on learning and mental growith.`,
      id: 1,
    },
    {
      image: "",
      altText: "",
      name: "Warrior",
      description: `Highly intelliget and full of magic. Perfect
      for those focused on learning and mental growith.`,

      id: 2,
    },
    {
      image: "",
      altText: "",
      name: "Rouge",
      description: `Highly intelliget and full of magic. Perfect
      for those focused on learning and mental growith.`,
      id: 3,
    },
  ];
  return (
    <section className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-6">
      {pickYourCharacter.map((character) => (
        <Card
          key={character.id}
          character={character.name}
          characterDescription={character.description}
        />
      ))}
    </section>
  );
}
