const Hero = ({ title, description, backgroundImage }) => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-text">
          <h1 className="title">{title}</h1>
          <div className="description">{description}</div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: ${backgroundImage ? "flex-start" : "center"};
          width: 100%;
          height: ${backgroundImage ? "50vh" : "30vh"};
          min-height: ${backgroundImage ? "350px" : "250px"};
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
          width: 600px;
        }

        .description {
          font-size: 16px;
        }
        @media screen and (max-width: 768px) {
          .title {
            font-size: 35px;
            width: 100%;
          }
          .hero {
            background-image: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
