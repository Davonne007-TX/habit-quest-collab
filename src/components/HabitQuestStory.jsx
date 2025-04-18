import Button from "./Button";
import Image from "./Image";
import UserIcons from "./UserIcons";

export default function HabitQuestStory() {
  const user = "Shared by @Habitin";
  const consecutive = `As dawn approaches and the sun is rising. Sir Habitin stood at the edge of taking the next
  step in his coding career and staying consistent with his learning for the next 90 days. Consistency. Strategy. Focus. `;

  return (
    <section className="max-w-xl md:max-w-2xl items-center bg-gray-200 rounded-xl p-8 mt-8">
      <div className="flex flex-col gap-4 ml">
        <Image
          image="/images/hq.png"
          imageStyles="w-14 rounded-full"
          alt="Logo, Laptop with HQ on the screen with purple background, Image generated by Chatgpt"
        />
        <div className="flex flex-col ml-2">
          <h1 className="text-xl font-semibold">HabitQuest Story</h1>
          <p>{user}</p>
        </div>

        <div className="bg-white max-w-xs md:max-w-xl lg::max-w-2xl p-8 flex gap-2 mt-2 flex-col rounded-xl ">
          <h2 className="font-bold text-2xl">The Trails of Persistence</h2>
          <p>{consecutive}</p>

          <div className="flex flex-row gap-8 mt-10">
            <Button
              btnTxt={"Level 5 Ninja"}
              btnStyles="bg-green-300 p-2  w-40 rounded-full text-green-800"
            />
            <Button
              btnTxt="7-Day Streak"
              btnStyles="bg-blue-400 p-2 w-40  rounded-full text-blue-800"
            />
          </div>
        </div>

        <UserIcons />
      </div>
    </section>
  );
}
