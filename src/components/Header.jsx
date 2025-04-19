import Button from "./Button";
import Image from "./Image";

const ourLinks = [
  { habitQuestLinks: "Features", id: 1 },
  { habitQuestLinks: "How it Works", id: 2 },
];

export default function Header() {
  return (
    <header className="flex justify-between text-lg items-center p-4 bg-gray-100">
      <Image
        image={"./images/hq.png"}
        imageStyles={"w-14 rounded-full ml-8 md:ml-20"}
        altTxt={
          "Logo, Laptop with HQ on the screen with purple background, Image generated by Chatgpt"
        }
      />
      <h1 className="text-xl md:text-3xl font-bold md:ml-4">HabitQuest</h1>

      <nav className="flex-1">
        <ul className="hidden lg:flex justify-center items-center gap-8">
          {ourLinks.map((link) => (
            <li key={link.id}>{link.habitQuestLinks}</li>
          ))}
        </ul>
      </nav>

      <section className="ml-auto flex flex-col md:flex-row gap-4 md:gap-10 md:mr-20">
        <Button btnTxt={"Login"} btnStyles={""} />
        <Button
          btnTxt={"Sign Up"}
          btnStyles={"bg-black text-white p-2 rounded-md w-20 mds:w-24"}
        />
      </section>
    </header>
  );
}
