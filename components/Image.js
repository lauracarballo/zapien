const Image = ({ frontImage, backImage, reverse }) => {
  return (
    <div className="img-container">
      <img className={reverse ? "back-reverse" : "back"} src={backImage} />
      <img className={reverse ? "front-reverse" : "front"} src={frontImage} />
      <style jsx>{`
        .img-container {
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
          position: absolute;
          top: 0;
          left: 0px;
          border-radius: 5px;
          object-fit: cover;
        }
        .back-reverse {
          width: 284px;
          height: 260px;
          position: absolute;
          top: 70px;
          right: 50px;
          border-radius: 5px;
          object-fit: cover;
        }
        .front {
          width: 240px;
          height: 300px;
          position: absolute;
          top: 46px;
          left: 260px;
          border-radius: 5px;
          object-fit: cover;
        }
        .front-reverse {
          width: 240px;
          height: 300px;
          position: absolute;
          top: 0px;
          right: 310px;
          border-radius: 5px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Image;
