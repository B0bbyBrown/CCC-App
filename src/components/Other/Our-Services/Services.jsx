import "/src/components/Our-Services/Services.css";

const Services = () => {
  return (
    <div className="venn-container" id="services">
      <h1>Services</h1>
      <div className="venn-diagram">
        <div className="circle circle1">
          <div className="content circle-1-content">Lorem Ipsum</div>
        </div>

        <div className="circle circle2">
          <div className="content circle-2-content">Lorem Ipsum</div>
        </div>

        <div className="content center-text-top">Lorem Ipsum</div>

        <div className="circle circle3">
          <div className="content circle-3-content">Lorem Ipsum</div>
        </div>

        <div className="content center-text-bottom">Lorem Ipsum</div>
      </div>
    </div>
  );
};

export { Services };
