import WhatWeOffer from "./WhatWeOffer";

export default function LegendaryTale() {
  const shareYourLegendaryTale = [
    {
      legendaryImage: "./images/share.png",
      legendaryTitle: "Share Your Story",
      legendaryDescription: `Publish your AI generated hero's jpurney to social media or send
      directly to friends.`,
      id: 1,
    },
    {
      legendaryImage: "./images/community.png",
      legendaryTitle: "Join the Community",
      legendaryDescription: `Connect with other heros, exchange tips, and find accountability partners on
      your quest.`,
      id: 2,
    },
    {
      legendaryImage: "./images/stars2.png",
      legendaryTitle: "Inspire Others",
      legendaryDescription: `Your journey can motivate friends to begin thier own quest and build better habbits.`,
      id: 3,
    },
  ];

  return (
    <section>
      <ul>
        {shareYourLegendaryTale.map((tale) => (
          <WhatWeOffer
            key={tale.id}
            legendaryImage={tale.legendaryImage}
            legendaryHeading={tale.legendaryTitle}
            legendaryText={tale.legendaryDescription}
          />
        ))}
      </ul>
    </section>
  );
}
