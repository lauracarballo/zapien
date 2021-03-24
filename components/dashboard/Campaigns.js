const Campaigns = ({ img, title, brandName, endOfCampaign }) => {
  return (
    <>
      <div className="campaign-card">
        <img className="campaign__img" src={img} alt="" />
        <div className="campaign__content">
          <h4 className="campaign__content__title">{title}</h4>
          <p className="campaign__content__brand">{brandName}</p>
          <p>End date: {endOfCampaign}</p>
        </div>
      </div>
      <style jsx>{`
        .campaign-card {
          display: block;
          min-width: 300px;
          max-width: 350px;
          margin: 50px 5px;
          background-color: #f3f3f3;
        }
        .campaign__content {
          padding: 0px 20px;
        }
        .campaign__img {
          display: block;
          align-items: center;
          height: 220px;
          width: 350px;
          object-fit: cover;
        }
        .campaign__content__title {
          font-size: 25px;
        }
        .campaign__content__brand {
          font-size: 18px;
        }
      `}</style>
    </>
  );
};

export default Campaigns;
