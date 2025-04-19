export default function UserIcons() {
  const users = [
    {
      backgroundColor: "#90EE90",
      userName: "MT",

      id: 1,
    },
    {
      backgroundColor: "#ADD8E6",
      userName: "DV",
      id: 2,
    },
    {
      backgroundColor: "#FFB6C1",
      userName: "JD",
      id: 3,
    },
    {
      backgroundColor: "#DAB1DA",
      userName: "+5",
      id: 4,
    },
  ];

  return (
    <section className="flex flex-col  justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <ul className="flex justify-center items-center">
          {users.map((user, index) => (
            <li
              style={{ backgroundColor: user.backgroundColor }}
              className={`w-12 h-12 flex flex-col items-center justify-center rounded-full text-black font-semibold border border-white ${
                index !== 0 ? "-ml-4" : ""
              }`}
              key={user.id}
            >
              <p>{user.userName}</p>
            </li>
          ))}
        </ul>
        <p className="ml-4 p-2">6 people have liked this story</p>
      </div>
    </section>
  );
}
