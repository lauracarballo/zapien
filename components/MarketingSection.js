import Image from "./Image";

const MarketingSection = (props) => {
  const { frontImage, backImage, reverse, children } = props;
  return (
    <div className="container">
      <div className="MarketingSection">
        <div className="content">{children}</div>
        <Image
          reverse={reverse}
          frontImage={frontImage}
          backImage={backImage}
        />
        <style jsx>{`
          .MarketingSection {
            display: flex;
            flex-direction: ${reverse ? "row-reverse" : "row"};
            min-height: 350px;
            margin: 125px 0;
          }

          .content {
            width: 50%;
            padding-right: 25px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MarketingSection;
