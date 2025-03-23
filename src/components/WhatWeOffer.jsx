import Image from "./Image";

export default function WhatWeOffer({
  legendaryHeading,
  legendaryText,
  legendaryImage,
}) {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col gap-2 tems-center max-w-sm">
        <Image image={legendaryImage} imageStyles={"w-10"} />
        <h2 className="font-bold">{legendaryHeading}</h2>
        <p className="text-gray-400">{legendaryText}</p>
      </div>
    </section>
  );
}
