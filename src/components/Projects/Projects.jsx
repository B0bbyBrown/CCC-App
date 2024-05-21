import "/src/components/Projects/Projects.css";
// import Rectangle15.jpg from "src/assets/images/Projects"

function Projects() {
  return (
    <>
      
      <div className="project2">
        <div className="img">
          <image
            src="src/components/Projects/image/Rectangle 16.jpg"
            alt="project3"
          />
        </div>

        <div className="content">
          <h2>Project 2</h2>
          <p>Project 2 description</p>
        </div>
      </div>

      <div className="project3">
        <div className="img">
          <image
            src="src/components/Projects/image/Rectangle 17.jpg"
            alt="project4"
          />
        </div>

        <div className="content">
          <h2>Project 3</h2>
          <p>Project 3 description</p>
        </div>
      </div>

      <div className="project4">
        <div className="img">
          <image
            src="src/components/Projects/image/Rectangle 15.jpg"
            alt="project5"
          />
        </div>

        <div className="content">
          <h2>Project 4</h2>
          <p>Project 4 description</p>
        </div>
      </div>

      <div className="project5">
        <div className="img">
          <image
            src="src/components/Projects/image/Rectangle 16.jpg"
            alt="project6"
          />
        </div>

        <div className="content">
          <h2>Project 5</h2>
          <p>Project 5 description</p>
        </div>
      </div>

      <div className="project6">
        <div className="img">
          <image
            src="src/components/Projects/image/Rectangle 17.jpg"
            alt="project6"
          />
        </div>

        <div className="content">
          <h2>Project 6</h2>
          <p>Project 6 description</p>
        </div>
      </div>
    </>
  );
}

export { Projects };
