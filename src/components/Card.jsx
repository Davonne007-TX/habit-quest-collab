import Button from "./Button";

export default function Card({
  characterImage,
  character,
  characterDescription,
  btnTxt,
  btnStyles,
}) {
  return (
    <section className="max-w-4xl shadow-md text-white md:max-w-6xl mt-10">
      <div className="border-1 p-4 max-w-sm md:max-w-md lg:max-w-sm h-80 rounded-xl bg-purple-500">
        <div className="flex flex-col justify-center items-center text-center gap-4 leading-6 mt-8">
          <span className="text-6xl">{characterImage}</span>
          <h1 className="font-bold text-2xl">{character}</h1>
          <p className="">{characterDescription}</p>
          <Button btnTxt={btnTxt} btnStyles={btnStyles} />
        </div>
      </div>
    </section>
  );
}
