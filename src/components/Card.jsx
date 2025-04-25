import Button from "./Button";
import Image from "./Image";

export default function Card({
  personalizeCard,
  processNumber,
  cardImage,
  alt,
  cardIcon,
  cardHeading,
  cardDescription,
  descriptionStyles,
  btnTxt,
  btnStyles,
  backgroundColor,
}) {
  return (
    <section className="max-w-7xl shadow-md text-white md:max-w-sm mt-10 flex">
      <div
        className={`relative border-1 p-4 max-w-sm md:max-w-md h-80 rounded-xl ${backgroundColor} overflow-hidden`}
      >
        <div className="absolute text-white text-9xl opacity-10 font-extrabold top-2 left-4 select-none z-0">
          {processNumber}
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center gap-4">
          <div className={personalizeCard}>
            <span className="text-6xl">{cardIcon}</span>
            <Image image={cardImage} imageStyles="mx-auto" alt={alt} />

            <h1 className="font-bold text-3xl">{cardHeading}</h1>
            <p className={descriptionStyles}>{cardDescription}</p>
          </div>
          <Button btnTxt={btnTxt} btnStyles={btnStyles} />
        </div>
      </div>
    </section>
  );
}
