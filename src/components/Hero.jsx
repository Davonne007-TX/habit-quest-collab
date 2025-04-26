import Button from "./Button";
import Image from "./Image";

export default function Hero() {
  const title = "Turn Your Habits Into an Epic Hero's Journey";

  const quest = `HabitQuest transforms your daily habits into an adventure. Complete task,
  journal your experiences, and watch as AI crafts your personal hero story. Share your story 
  with the world and connect with other developers.`;
  const transform = "./images/transform2.jpeg";

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-8 mt-20 md:mt-28">
      <section className="flex flex-col justify-center items-center lg:flex-row max-w-7xl gap-10">
        <section className="max-w-xs md:max-w-lg flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold md:leading-18">
            {title}
          </h2>
          <p className="text-lg md:text-2xl">{quest}</p>

          <section className="flex gap-8 mt-4">
            <Button
              btnTxt={"Get Started on your Quest ↗"}
              btnStyles={
                "bg-black text-white hover:scale-105 rounded-md text-md md:text-lg"
              }
            />
            <Button
              btnTxt={"Learn More"}
              btnStyles={
                "border-1 rounded-md border-black hover:bg-purple-400 text-md md:text-lg"
              }
            />
          </section>
        </section>
        <Image
          image={transform}
          imageStyles={"max-w-xs md:max-w-lg lg:max-w-2xl rounded-md"}
        />
      </section>
    </section>
  );
}
