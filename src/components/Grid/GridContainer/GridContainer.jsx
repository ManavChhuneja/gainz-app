import "./GridContainer.css";

const GridContainer = ({ children }) => {
  return (
    <div className="flex-container">
      <div className="grid-container">{children}</div>
    </div>
  );
};

export default GridContainer;
