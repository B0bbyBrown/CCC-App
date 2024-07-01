import "./Case-Studies.css";
import image1 from "../../assets/images/Projects/Samsara.png";
import image2 from "../../assets/images/Projects/Neon-Pineapple.png";
import image3 from "../../assets/images/Projects/Rectangle17.jpg";

const projects = [
  {
    id: 1,
    title: "Samsara",
    date: "Date",
    image: image1,
  },
  {
    id: 2,
    title: "Neon Pineapple",
    date: "Date",
    image: image2,
  },
  {
    id: 3,
    title: "Rita Kumar",
    date: "Date",
    image: image3,
  },
  {
    id: 4,
    title: "Sela Bella",
    date: "Date",
    image: image1,
  },
  {
    id: 5,
    title: "Infinity Labs",
    date: "Date",
    image: image2,
  },
];

const CaseStudies = () => {
  return (
    <div className="Case-Studies" id="projects">
      <h1 className="headerOfComponent">Case Studies</h1>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.image} alt={`${project.title} image`} />
            <div className="projectInfo">
              <h2>{project.title}</h2>
              <p>{project.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CaseStudies };
