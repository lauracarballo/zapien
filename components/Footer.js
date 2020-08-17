import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="info">
          <div className="about">
            <Link href="/">
              <a className="logo">Zapien</a>
            </Link>
            <p className="about-us-content">
              The aim of our platform is to promote a sustainable lifestyle by
              providing a tool that connects like-minded brands and influencers.
              We want to spread awareness about the climate crisis and social
              issues through a successfully implemented marketing model that
              relies on daily content generated by inspiring and experienced
              “eco” influencers and content creators.
            </p>
          </div>
          <div className="footer-links">
            <ul className="footer-linklist">
              <li>
                <Link href="/brands">
                  <a>I am a Brand</a>
                </Link>
              </li>
              <li>
                <Link href="/creators">
                  <a>I am a Conscious Creator</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <ul className="footer-linklist">
              <li>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a>Terms</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © 2020,
          <Link href="/">
            <a> Zapien</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        footer {
          margin-top: 20px;
          padding: 50px 0px;
          background-color: #f8f8f8;
          color: #333;
        }
        .info {
          display: grid;
          grid-template-columns: 50% 25% 25%;
        }

        .about {
          display: flex;
          flex-wrap: wrap;
        }

        .about-us-content {
          font-size: 12px;
          margin-top: 5px;
          text-align: justify;
          line-height: 1.5;
        }
        .footer-links {
          display: flex;
          padding-top: 36px;
          padding-left: 50px;
        }

        .footer-linklist {
          list-style: none;
          font-size: 12px;
        }

        .footer-linklist > li {
          padding-bottom: 6px;
        }

        .copyright {
          margin-top: 35px;
          font-size: 0.83333em;
        }
        @media screen and (max-width: 768px) {
          .info {
            display: grid;
            grid-template-columns: 60% 40%;
          }

          .about {
            grid-row: 2;
            grid-column: 1 / 3;
          }

          .footer-links {
            display: flex;
            padding-bottom: 50px;
            justify-content: space-between;
            padding-left: 0px;
          }

          .footer-linklist {
            padding-inline-start: 5px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
