import Link from "next/link";
import Button from "./Button";
import Burger from "./MobileNav";
import MenuBar from "./MenuBar";
import { useState } from "react";

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
          <li className="nav-link">
            <Link href="/brands">
              <a>Brands</a>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/creators">
              <a>Conscious Creators</a>
            </Link>
          </li>
          <li className="nav-link">
            <Button href="/login">Login</Button>
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
            padding-left: 80px;
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
