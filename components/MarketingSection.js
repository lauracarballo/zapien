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
            padding: 100px 0px;
          }

          .content {
            width: 50%;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MarketingSection;
