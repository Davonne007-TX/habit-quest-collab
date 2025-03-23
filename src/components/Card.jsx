import Button from "./Button";

export default function Card({
  cardImage,
  cardIcon,
  cardHeading,
  cardDescription,
  descriptionStyles,
  btnTxt,
  btnStyles,
  backgroundColor,
}) {
  return (
    <section className="max-w-4xl shadow-md text-white md:max-w-6xl mt-10">
      <div
        className={`border-1 p-4 max-w-sm md:max-w-md lg:max-w-sm h-80 rounded-xl ${backgroundColor}`}
      >
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <img src={cardImage} className="mt-4" />
          <span className="text-6xl -mt-4">{cardIcon}</span>
          <h1 className="font-bold text-2xl">{cardHeading}</h1>
          <p className={descriptionStyles}>{cardDescription}</p>
          <Button btnTxt={btnTxt} btnStyles={btnStyles} />
        </div>
      </div>
    </section>
  );
}
