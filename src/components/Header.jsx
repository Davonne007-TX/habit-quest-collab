import Button from "./Button";

const ourLinks = [
  { habitQuestLinks: "Features", id: 1 },
  { habitQuestLinks: "How it Works", id: 2 },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center p-8">
      <h1 className="text-3xl font-bold">HabitQuest</h1>

      <nav className="flex-1">
        <ul className="hidden md:flex justify-center items-center gap-8">
          {ourLinks.map((link) => (
            <li key={link.id}>{link.habitQuestLinks}</li>
          ))}
        </ul>
      </nav>

      <section className="ml-auto flex gap-10">
        <Button btnTxt={"Login"} btnStyles={""} />
        <Button
          btnTxt={"Sign Up"}
          btnStyles={"bg-black text-white p-2 rounded-md w-24"}
        />
      </section>
    </header>
  );
}
