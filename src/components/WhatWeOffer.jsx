export default function WhatWeOffer({ legendaryHeading, legendaryText }) {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col gap-4 tems-center max-w-sm">
        <h2 className="font-bold">{legendaryHeading}</h2>
        <p className="text-gray-400">{legendaryText}</p>
      </div>
    </section>
  );
}
