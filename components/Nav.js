import Link from "next/link";
import Button from "./Button";

const Nav = () => (
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
          <Link href="/">
            <Button name="Log In" />
          </Link>
        </li>
      </ul>
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
      `}</style>
    </nav>
  </div>
);

export default Nav;
