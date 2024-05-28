import "/src/components/Contact/Contact.css";

const Platforms = [
  {
    id: 1,
    name: "Instagram",
    image: "src/assets/images/Icons/Platform=Instagram, Color=Original.png",
  },
  {
    id: 2,
    name: "Twitter",
    image: "src/assets/images/Icons/Platform=X (Twitter), Color=Original.png",
  },
  {
    id: 3,
    name: "Email",
    image: "src/asset/images/Icons/Platform=Google, Color=Negative.png",
    mailto: "mailto: support@curiouscatcreative.com",
  },
  {
    id: 4,
    name: "Facebook",
    image: "src/assets/images/Icons/Platform=Facebook, Color=Original.png",
  },
  {
    id: 5,
    name: "LinkedIn",
    image: "src/assets/images/Icons/Platform=LinkedIn, Color=Original.png",
  },
];

function Contact() {
  return (
    <div>
      <div className="contactSection">
        <div className="contactHeader">
          <h1>Socials & Contact</h1>
        </div>

        <div className="platforms">
          {Platforms.map((platform) => (
            <div key={platform.id} className="platform">
              <img src={platform.image} alt={`${platform.name} icon`} />
              <h2>{platform.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Contact };
