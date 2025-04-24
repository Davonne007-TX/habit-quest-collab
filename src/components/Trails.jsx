import Button from "./Button";

export default function Trails() {
  const consecutive = `As dawn approaches and the sun is rising. Sir Habitin stood at the edge of taking the next
  step in his coding career and staying consistent with his learning for the next 90 days. Consistency. Strategy. Focus. `;

  return (
    <section className="bg-white max-w-xs md:max-w-xl lg::max-w-2xl p-8 flex gap-2 flex-col rounded-xl ">
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
    </section>
  );
}
