const Hero = ({ title, description, backgroundImage }) => {
  return (
    <div className="hero">
      <div className="container ">
        <div className="hero-text">
          <h1 className="title">{title}</h1>
          <h2 className="description">{description}</h2>
        </div>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          align-items: center;
          width: 100%;
          padding-top: 70px;
        }

        .hero-text {
          max-width: 100%;
          flex-direction: column;
          text-align: center;
          color: #000;
        }

        .title {
          font-size: 35px;
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
