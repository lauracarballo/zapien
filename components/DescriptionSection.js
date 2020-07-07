const DescriptionSection = ({ title, intro, description }) => {
  return (
    <div className="background">
      <div className="container">
        <div className="description-section">
          <div className="section-title underline">{title}</div>
          <h2 className="styling-intro">{intro}</h2>
          <div className="styling-description">{description}</div>
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

        .styling-description {
          font-size: 20px;
        }

        .styling-intro {
          margin-top: 25px;
          margin-bottom: auto;
        }
      `}</style>
    </div>
  );
};

export default DescriptionSection;
