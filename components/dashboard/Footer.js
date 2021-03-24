import { useRouter } from "next/router";
import Link from "next/link";

const FooterLinks = ({ links }) => {
  const { pathname } = useRouter();
  return (
    <>
      {links.map((link) => {
        return (
          <li className="footer-link">
            <Link href={link.href}>
              <a className={pathname == link.href ? "footer-active" : ""}>
                {link.name}
              </a>
            </Link>
          </li>
        );
      })}
      <style jsx>{`
        .footer-link {
          display: flex;
        }
        .footer-active {
          position: relative;
          padding-bottom: 0;
        }

        .nav-active:after {
          content: "";
          width: 100%;
          height: 3px;
          background: #8cbf8a;
          position: absolute;
          bottom: -8px;
          left: 0;
          max-width: 250px;
        }
      `}</style>
    </>
  );
};

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <FooterLinks
          links={[
            {
              name: "About us",
              href: "/",
            },
            {
              name: "Terms",
              href: "/",
            },
            {
              name: "Privacy",
              href: "/",
            },
            {
              name: "Help",
              href: "/",
            },
          ]}
        ></FooterLinks>
        <div className="copyright">
          <span> Ⓒ 2020 Zapien</span>
        </div>
        <style jsx>{`
          footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 0px;
          }

          .copyright {
            font-size: 12px;
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Footer;
