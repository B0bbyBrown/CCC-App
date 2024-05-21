import "/src/components/About/Body/AboutB.css";

function AboutB() {
  return (
    <div className="body">
      <div className="aboutBodyCard">
        <p className="aboutBodyText">
          Lorem ipsum dolor sit amet consectetur. Malesuada nisl magnis eget
          gravida rhoncus velit. Molestie nunc lobortis leo laoreet duis
          elementum etiam. Sit neque nunc eget viverra lectus diam lorem
          pulvinar arcu. Nisi non risus ornare platea gravida dolor.
        </p>
      </div>

      <div className="image">
        <img
          src="src\components\About\Image\About-Us-PNG.png"
          alt="about"
          id="image"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}

export { AboutB };
