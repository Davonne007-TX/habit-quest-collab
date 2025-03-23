import React from "react";
import CustomHeading from "./CustomHeading";
import ChooseYourCharacter from "./ChooseYourCharacter";
import QuestUnfolds from "./QuestUnfolds";
import LegendaryTale from "./LegendaryTale";

export default function PersonalQuest() {
  const character = "Choose Your Character";
  const select =
    "Select a character class that matches your personality and goals";

  const quest = "Embark on Your Personal Quest";
  const usingAI = `HabitQuest uses AI to track your habit tracking to create a 
    storytelling creative personalized just for you.`;

  const share = "Share Your Epic Tale";
  const hero = `Your hero journey is meant to be shared. Connect with friends and
  inspire others, as your grow together.`;

  return (
    <>
      <section className="p-4">
        <CustomHeading heading={character} text={select} />
        <ChooseYourCharacter />

        <CustomHeading heading={quest} text={usingAI} />
        <QuestUnfolds />

        <CustomHeading heading={share} text={hero} />
        <LegendaryTale />
      </section>
    </>
  );
}
