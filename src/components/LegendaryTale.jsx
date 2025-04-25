import WhatWeOffer from "./WhatWeOffer";

export default function LegendaryTale() {
  const shareYourLegendaryTale = [
    {
      legendaryImage: "./images/share.png",
      backgroundColor: "#90EE90",
      legendaryTitle: "Share Your Story",
      legendaryDescription: `Publish your AI generated hero's journey to social media and share your story with your network.`,
      id: 1,
    },
    {
      legendaryImage: "./images/community.png",
      backgroundColor: "#CCCCFF",
      legendaryTitle: "Join the Community",
      legendaryDescription: `Connect with other heros, share experiences, coding tips and find accountability friends on
      your quest.`,
      id: 2,
    },
    {
      legendaryImage: "./images/stars2.png",
      backgroundColor: "#CF9FFF",
      legendaryTitle: "Inspire Others",
      legendaryDescription: `Your journey can motivate others to begin their own quest and build better coding habits.`,
      id: 3,
    },
  ];

  return (
    <section className="flex  flex-col justify-center items-center">
      {shareYourLegendaryTale.map((tale) => (
        <WhatWeOffer
          key={tale.id}
          legendaryImage={tale.legendaryImage}
          backgroundColor={tale.backgroundColor}
          legendaryHeading={tale.legendaryTitle}
          legendaryText={tale.legendaryDescription}
        />
      ))}
    </section>
  );
}
