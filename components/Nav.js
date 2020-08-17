import { useRouter } from "next/router";
import Link from "next/link";
import Button from "./Button";
import Burger from "./MobileNav";
import MenuBar from "./MenuBar";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  console.log({ pathname });
  return (
    <div className="container">
      <nav>
        <div className="nav-logo">
          <Link href="/">
            <a className="logo">Zapien</a>
          </Link>
        </div>
        <ul className="nav-primary">
          <li className="nav-link">
            <Link href="/brands">
              <a className={pathname == "/brands" ? "nav-active" : ""}>
                Brands
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/creators">
              <a className={pathname == "/creators" ? "nav-active" : ""}>
                Conscious Creators
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Button href="/sign-up">Sign up</Button>
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

          .nav-primary {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0px;
            font-size: 15px;
          }

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
