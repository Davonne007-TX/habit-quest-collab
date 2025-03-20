import Image from "./Image";
import Button from "./Button";

export default function Card({
  characterImage,
  imageStyles,
  character,
  characterDescription,
  btnTxt,
  btnStyles,
}) {
  return (
    <section className="max-w-4xl shadow-md text-white md:max-w-6xl mt-10 flex">
      <div className="border-1 p-4 max-w-sm md:max-w-md lg:max-w-sm h-60 rounded-xl  bg-purple-500">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <Image image={characterImage} imageStyles={imageStyles} />
          <h1 className="font-bold text-2xl">{character}</h1>
          <p>{characterDescription}</p>
          <Button btnTxt={btnTxt} btnStyles={btnStyles} />
        </div>
      </div>
    </section>
  );
}
