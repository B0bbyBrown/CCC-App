import "../Projects/Projects.css";
import image1 from "../../assets/images/Projects/Rectangle15.jpg";
import image2 from "../../assets/images/Projects/Rectangle16.jpg";
import image3 from "../../assets/images/Projects/Rectangle17.jpg";

const projects = [
  {
    id: 1,
    title: "Project 1",
    date: "Date",
    image: image1,
  },
  {
    id: 2,
    title: "Project 2",
    date: "Date",
    image: image2,
  },
  {
    id: 3,
    title: "Project 3",
    date: "Date",
    image: image3,
  },
  {
    id: 4,
    title: "Project 4",
    date: "Date",
    image: image1,
  },
  {
    id: 5,
    title: "Project 5",
    date: "Date",
    image: image2,
  },
];

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h1>Our Projects</h1>
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

export { Projects };
