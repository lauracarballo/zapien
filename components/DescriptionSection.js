const DescriptionSection = ({ title, intro }) => {
  return (
    <div className="container">
      <div className="description-section">
        <div className="grid-col-1">
          <h3 className="title">{title}</h3>
        </div>
        <div className="grid-col-2">
          <p className="description">{intro}</p>
        </div>
      </div>
      <style jsx>{`
        .description-section {
          display: grid;
          grid-template-columns: 50% 50%;
          background-color: none;
          margin-top: 70px;
          padding: 70px 0px;
        }

        .grid-col-2 {
          grid: 2;
        }

        .description {
          max-width: 100%;
          flex-direction: column;
          text-align: left;
          color: black;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default DescriptionSection;
