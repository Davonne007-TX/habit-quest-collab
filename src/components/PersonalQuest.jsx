import React from "react";
import CustomHeading from "./CustomHeading";
import ChooseYourCharacter from "./ChooseYourCharacter";

export default function PersonalQuest() {
  const character = "Choose Your Character";
  const select =
    "Select a character class that matches your personality and goals";

  const quest = "Embark on Your Personal Quest";
  const embark = `HabitQuest uses AI to track your habit tracking to create a 
    storytelling creative story peronalized just for you.`;

  return (
    <>
      <section className="p-4">
        <CustomHeading heading={character} text={select} />
        <ChooseYourCharacter />

        <CustomHeading heading={quest} text={embark} />
      </section>
    </>
  );
}
