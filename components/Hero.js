const Hero = (props) => {
  return (
    <div className="hero">
      <div className=" container hero-styling-cover">
        <div className=" hero-text">
          <h1 className="title">{props.title}</h1>
          <h2 className="description">{props.description}</h2>
        </div>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          background-image: url(/images/collage.jpg);
          height: 80vh;
          width: 100%;
        }

        .hero:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.65);
          z-index: 1;
          content: "";
        }

        .hero-styling-cover {
          display: flex;
          position: relative;
          height: 80vh;
          width: 100%;
          text-align: left;
          align-items: center;
          z-index: 2;
        }

        .hero-text {
          max-width: 100%;
          flex-direction: column;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Hero;
