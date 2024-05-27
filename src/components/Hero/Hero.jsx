import "/src/components/Hero/Hero.css";
// import { VisualElements } from "/src/components/Background-Design/visualElements";

function Hero() {
  return (
    <>
      <div className="heroMain">
        <h1 className="heroMainText">Curious Cat Creative</h1>
      </div>

      <div className="heroSlogan">
        <p className="heroSloganText">
          Lorem, ipsum dolor sit amet consectetur <br></br>adipisicing elit.
          Recusandae corrupti <br></br>reprehenderit suscipit totam ipsum dolor
        </p>
      </div>

      <div className="design">{/* <VisualElements /> */}</div>
    </>
  );
}

export { Hero };
