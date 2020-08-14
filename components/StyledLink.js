import Link from "next/link";

const StyledLink = ({ href, children, ...props }) => {
  return (
    <>
      <Link href={href}>
        <a className="link__container" {...props}>
          <div className="link">
            <div className="link__text">{children}</div>
            <div className="link__arrow-container">
              <span className="link_arrow-first">→</span>
              <span className="link_arrow-second">→</span>
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .link__container {
          display: flex;
        }

        .link {
          display: flex;
          position: relative;
          margin-bottom: 1px;
        }

        .link__text {
          text-transform: uppercase;
        }

        .link:after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: black;
          transform: scaleX(1);
          transform-origin: left center;
          transition: transform 0.33s linear;
        }

        .link:hover:after {
          transform: scaleX(0);
          transform-origin: right center;
        }

        .link__arrow-container {
          display: inline-block;
          position: relative;
          overflow: hidden;
          width: 15px;
        }
        .link_arrow-first {
          position: absolute;
          left: 0;
          transform: translateX(0%);
        }

        .link:hover .link_arrow-first {
          transform: translateX(200%);
          transition: transform 0.33s linear;
        }

        .link_arrow-second {
          position: absolute;
          transform: translateX(-150%);
          left: 8px;
        }

        .link:hover .link_arrow-second {
          transform: translateX(-50%);
          transition: transform 0.33s linear;
        }
      `}</style>
    </>
  );
};

export default StyledLink;
