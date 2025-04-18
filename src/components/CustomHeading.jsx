export default function CustomHeading({ heading, text }) {
  return (
    <section className="flex flex-col justify-center items-center mt-50">
      <h3 className="text-3xl md:text-5xl font-bold text-center">{heading}</h3>
      <p className="text-gray-400 text-xl md:text-2xl mt-4 text-center max-w-4xl">
        {text}
      </p>
    </section>
  );
}
