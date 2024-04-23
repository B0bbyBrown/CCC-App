import "/src/components/Light-Dark/LightDark.css";

function LightDark() {
  return (
    <div className="lightDarkButton">
      <h2 className="light">Light</h2>

      <div className="button">
        <div className="toggle-container">
          <input type="checkbox" />
          <span className="slider round"></span>
        </div>
      </div>

      <h2 className="dark">Dark</h2>
    </div>
  );
}

export { LightDark };
