const Image = ({ frontImage, backImage, reverse }) => {
  return (
    <div className="container">
      <img className={reverse ? "back-reverse" : "back"} src={backImage} />
      <img className={reverse ? "front-reverse" : "front"} src={frontImage} />
      <style jsx>{`
        .container {
          display: flex;
          width: 50%;
          flex-direction: row;
          position: relative;
          top: 0;
          left: 0;
        }
        .back {
          width: 284px;
          height: 260px;
          position: relative;
          top: 0;
          left: 70px;
        }
        .back-reverse {
          width: 284px;
          height: 260px;
          position: relative;
          top: 105px;
          left: 125px;
        }
        .front {
          width: 240px;
          height: 300px;
          position: absolute;
          top: 46px;
          left: 310px;
        }
        .front-reverse {
          width: 240px;
          height: 333px;
          position: absolute;
          top: 0px;
          right: 300px;
        }
      `}</style>
    </div>
  );
};

export default Image;
