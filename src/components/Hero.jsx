import Button from "./Button";
import Image from "./Image";

export default function Hero() {
  const title = "Turn Your Habits Into an Epic Hero's Journey";

  const quest = `Mauris consequat erat nisi, id vestibulum erat lobortis ut.
  Quisque at mollis turpis, nec mollis est. Pellentesque ac ex mi. Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. Mauris blandit malesuada sapien et pellentesque.`;

  const transform = "./images/transform2.jpeg";

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-8 mt-20 md:mt-40">
      <section className="flex flex-col justify-center items-center md:flex-row max-w-6xl gap-10">
        <section className="max-w-xs md:max-w-lg flex flex-col gap-4">
          <h2 className="text-2xl md:text-6xl font-bold md:leading-18">
            {title}
          </h2>
          <p>{quest}</p>

          <section className="flex gap-8 mt-4">
            <Button
              btnTxt={"Get Started on your Quest ↗"}
              btnStyles={"bg-black text-white p-2 rounded-md"}
            />
            <Button
              btnTxt={"Learn More"}
              btnStyles={"p-2 border-1 rounded-md border-black"}
            />
          </section>
        </section>
        <Image
          image={transform}
          imageStyles={"max-w-xs md:max-w-lg lg:max-w-xl rounded-md"}
        />
      </section>
    </section>
  );
}
