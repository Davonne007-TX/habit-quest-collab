import React from "react";
import CustomHeading from "./CustomHeading";
import ChooseYourCharacter from "./ChooseYourCharacter";

export default function PersonalQuest() {
  const character = "Choose Your Character";
  const select =
    "Select a character class that matches your personality and goals";
  return (
    <>
      <CustomHeading heading={character} text={select} />
      <ChooseYourCharacter />
    </>
  );
}
