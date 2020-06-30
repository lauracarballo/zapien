const MainHero = ({ title, description, image }) => {
  return (
    <div className="container">
      <div className="hero-wrapper">
        <div className="hero-text">
          <h1 className="title underline">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <div className="image-wrapper">
          <div className="hero-image">
            <img className="img-style" src={image} />
          </div>
        </div>
        <style jsx>{`
          .hero-wrapper {
            position: relative;
            padding: 90px 0;
          }

          .hero-text {
            position: relative;
            left: 0;
            top: 4vw;
            width: 50%;
            padding: 15px 25px;
            color: #023a00;
            background-color: rgba(192, 222, 192, 1);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            z-index: 1;
          }

          .image-wrapper {
            width: 60%;
            position: absolute;
            right: 0;
            top: 8%;
          }

          .img-style {
            width: 100%;
          }

          .description {
            font-size: 18px;
            margin-top: 8px;
          }

          .title {
            font-size: 3vw;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MainHero;
