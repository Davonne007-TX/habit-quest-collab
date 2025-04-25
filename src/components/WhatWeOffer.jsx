import Image from "./Image";

export default function WhatWeOffer({
  legendaryHeading,
  legendaryText,
  legendaryImage,
  backgroundColor,
}) {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col gap-2 justify-center max-w-sm">
        <div
          className="w-14 p-4 rounded-full"
          style={{ backgroundColor: backgroundColor }}
        >
          <Image image={legendaryImage} imageStyles="w-full" />
        </div>

        <h2 className="font-bold text-lg">{legendaryHeading}</h2>
        <p className="text-gray-400 text-md">{legendaryText}</p>
      </div>
    </section>
  );
}
