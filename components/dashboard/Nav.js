import { useRouter } from "next/router";
import Link from "next/link";
import Menu from "../dashboard/Menu";
import MenuBar from "../dashboard/MenuBar";
import { useState, useEffect, useRef } from "react";

const NavLinks = ({ links }) => {
  const { pathname } = useRouter();
  return (
    <>
      {links.map((link) => {
        return (
          <li className="nav-link">
            <Link href={link.href}>
              <a className={pathname == link.href ? "nav-active" : ""}>
                {link.name}
              </a>
            </Link>
          </li>
        );
      })}
      <style jsx>{`
        .nav-link {
          display: flex;
          padding: 0px 80px;
        }
        .nav-active {
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

const Nav = () => {
  const [open, setOpen] = useState(false);
  const menubarRef = useRef();
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (open && event.target !== menubarRef.current) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [open, menubarRef]);
  return (
    <div className="nav-background">
      <div className="container">
        <nav>
          <div className="nav-logo">
            <Link href="/creators/dashboard">
              <a className="logo">Zapien</a>
            </Link>
          </div>
          <ul className="nav-primary">
            <NavLinks
              links={[
                {
                  name: "Dashboard",
                  href: "/creators/dashboard",
                },
                {
                  name: "Profile",
                  href: "/creators/profile",
                },
                {
                  name: "Campaigns",
                  href: "/creators/campaigns",
                },
              ]}
            />
          </ul>
          <div className="tools">
            <Menu onClick={() => setOpen(!open)} />
            {open && <MenuBar menubarRef={menubarRef} />}
          </div>
        </nav>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-background {
          background-color: rgba(140, 191, 138, 0.15);
          padding: 5px 0px;
        }

        .nav-primary {
          display: flex;
          align-items: center;
          font-size: 16px;
        }

        .mobile-menu {
          display: none;
        }

        @media screen and (max-width: 768px) {
          .mobile-menu {
            display: block;
          }

          nav {
            margin-top: 20px;
          }

          .nav-primary {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;
