function ProjectCard({ Name, Description }) {
  <div className="project1">
    <div className="img">
      <image src="src\assets\images\Projects\Rectangle15.jpg" alt="project2" />
    </div>

    <div className="content">
      <h2>{Name}</h2>
      <p>{Description}</p>
    </div>
  </div>;
}
export { ProjectCard };
