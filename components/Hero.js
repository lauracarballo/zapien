const Hero = ({ title, description, backgroundImage }) => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-text">
          <h1 className="title">{title}</h1>
          <h2 className="description">{description}</h2>
        </div>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: ${backgroundImage ? "flex-start" : "center"};
          width: 100%;
          height: 50vh;
          min-height: 350px;
          margin: 25px 0;
          ${backgroundImage &&
          `
          background-image: url(${backgroundImage});
          background-repeat: no-repeat;
          background-position: right top;
          background-size: 50%;`}
        }

        .hero-text {
          max-width: 100%;
          flex-direction: column;
          text-align: ${backgroundImage ? "left" : "center"};
          color: #000;
        }

        .title {
          font-size: 40px;
          font-weight: 400;
        }

        .description {
          font-size: 15px;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Hero;
