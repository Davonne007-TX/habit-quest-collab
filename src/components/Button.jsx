export default function Button({ btnStyles, btnTxt }) {
  return (
    <button className={`cursor-pointer p-2 ${btnStyles}`}>{btnTxt}</button>
  );
}
