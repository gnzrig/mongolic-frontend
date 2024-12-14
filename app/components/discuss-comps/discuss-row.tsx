"use client";

const DiscussRow = () => {
  const items = [
    {
      id: 1,
      image:
        "https://daily-wire-production.imgix.net/episodes/cm4jzsnkqbc3p0806jrmsfhrr/cm4jzsnkqbc3p0806jrmsfhrr-1734015683361.png?fit=crop&ar=16%3A9&w=640&auto=format&ixlib=react-9.3.0",
      title: "Ep.896 Get More Klavan In Barnes & Noble",
      description: "Dec 12, 2024",
    },
    {
      id: 2,
      image:
        "https://daily-wire-production.imgix.net/episodes/cm4hbp2nmml060842gflegkiq/cm4hbp2nmml060842gflegkiq-1733942107661.png?fit=crop&ar=16%3A9&w=640&auto=format&ixlib=react-9.3.0",
      title: "Ep.896 Get More Klavan In Barnes & Noble 2",
      description: "Dec 12, 2024",
    },
    {
      id: 3,
      image:
        "https://daily-wire-production.imgix.net/episodes/cm4hf81eaqvl908981rord9s7/cm4hf81eaqvl908981rord9s7-1733857289618.png?fit=crop&ar=16%3A9&w=640&auto=format&ixlib=react-9.3.0",
      title: "Ep.896 Get More Klavan In Barnes & Noble 3",
      description: "Dec 12, 2024",
    },
    {
      id: 4,
      image:
        "https://daily-wire-production.imgix.net/episodes/cm48o0oal82nf08066vtp32nv/cm48o0oal82nf08066vtp32nv-1733509466364.png?fit=crop&ar=16%3A9&w=640&auto=format&ixlib=react-9.3.0",
      title: "Ep.896 Get More Klavan In Barnes & Noble 4",
      description: "Dec 12, 2024",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 w-[75vw] my-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-xl text-white flex flex-col items-center"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-sm font-bold text-[#999999]">{item.title}</h3>
          <p className="text-xs text-[#999999]">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DiscussRow;
