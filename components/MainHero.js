import Button from "../components/Button";

const MainHero = ({ title, description, image }) => {
  return (
    <div className="background-media">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-text">
            <h1 className="title underline">{title}</h1>
            <p className="description">{description}</p>
            <div style={{ paddingTop: 15 }}>
              <Button href="/brands" style={{ marginRight: 25 }}>
                I'M A BRAND
              </Button>
              <Button secondaryButton href="/creators">
                I'M A CREATOR
              </Button>
            </div>
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
              height: 80vh;
              min-height: 600px;
            }

            .button {
              margin-right: 15px;
            }

            .hero-text {
              position: relative;
              left: 0;
              top: 5vw;
              width: 50%;
              height: 365px;
              padding: 25px 25px;
              color: #023a00;
              background-color: rgba(192, 222, 192, 1);
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              z-index: 1;
            }

            .button__container {
              display: flex;
              width: 75%;
              justify-content: space-between;
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
              margin-top: 35px;
            }

            .title {
              font-size: 3vw;
            }

            @media screen and (max-width: 768px) {
              .background-media {
                margin: 0px;
                background-color: rgba(192, 222, 192, 1);
              }

              .hero-wrapper {
                padding: 150px 0;
                height: auto;
                min-height: auto;
              }

              .title {
                font-size: 8vw;
              }

              .hero-text {
                position: relative;
                left: 0;
                top: 0;
                width: 100%;
                height: 200px;
                color: #023a00;
                background-color: #fff;
                box-shadow: none;
                z-index: 1;
                padding: 0;
              }
              .description {
                font-size: 16px;
                margin-top: 35px;
                line-height: 25px;
              }
              .img-style {
                display: none;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
