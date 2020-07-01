const DescriptionSection = ({ title, intro, description }) => {
  return (
    <div className="background">
      <div className="container">
        <div className="description-section">
          <div className="section-title underline">{title}</div>
          <div className="styling-intro">
            <h2>{intro}</h2>
          </div>
          <div className="styling-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .background {
          background-color: #eff1f9;
        }

        .section-title {
          display: inline-block;
          font-size: 16px;
        }

        .description-section {
          padding: 70px 0px;
          text-align: center;
        }

        .styling-description > p {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default DescriptionSection;
