import { useRouter } from "next/router";
import Link from "next/link";
import Button from "./Button";
import Burger from "./MobileNav";
import MenuBar from "./MenuBar";
import { useState } from "react";

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
          padding-left: 50px;
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

  return (
    <div className="container">
      <nav>
        <div className="nav-logo">
          <Link href="/">
            <a className="logo">Zapien</a>
          </Link>
        </div>
        <ul className="nav-primary">
          <NavLinks
            links={[
              {
                name: "Brands",
                href: "/brands",
              },
              {
                name: "Conscious Creators",
                href: "/creators",
              },
            ]}
          />
          <li className="nav-link">
            <Button secondary href="/sign-up">
              Sign up
            </Button>
          </li>
        </ul>
        <div className="mobile-menu">
          <Burger open={open} setOpen={setOpen} />
          <MenuBar open={open} setOpen={setOpen} />
        </div>
        <style jsx>{`
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
          }

          .nav-link {
            display: flex;
            padding-left: 50px;
          }

          .nav-primary {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0px;
            font-size: 15px;
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
      </nav>
    </div>
  );
};

export default Nav;
