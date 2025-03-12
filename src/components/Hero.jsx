import Button from "./Button";
import Image from "./Image";

export default function Hero() {
  const title = "Turn Your Habits Into an Epic Hero's Journey";
  const quest = `Mauris consequat erat nisi, id vestibulum erat lobortis ut. Quisque at mollis turpis, nec mollis est. Pellentesque ac ex mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit malesuada sapien et pellentesque.`;

  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-20 md:mt-40">
      <section className="flex flex-col md:flex-row max-w-6xl gap-4">
        <section className="max-w-lg flex flex-col gap-4">
          <h2 className="text-6xl font-bold leading-18">{title}</h2>
          <p>{quest}</p>

          <section className="flex gap-8 mt-4">
            <Button
              btnTxt={"Get Started on your Quest ↗"}
              btnStyles={"bg-black text-white p-4 rounded-md"}
            />
            <Button
              btnTxt={"Learn More"}
              btnStyles={"p-4 border-1 rounded-md border-black"}
            />
          </section>
        </section>
        <Image
          image={"./images/transform.jpeg"}
          imageStyles={"max-w-md md:max-lg lg:max-w-xl"}
        />
      </section>
    </section>
  );
}
