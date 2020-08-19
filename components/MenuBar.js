const MenuBar = ({ open }) => {
  return (
    <div className="menu">
      <a className="mobile-link" href="/">
        Home
      </a>
      <a className="mobile-link" href="/brands">
        Brands
      </a>
      <a className="mobile-link" href="/creators">
        Conscious Creators
      </a>
      <a className="mobile-link" href="/contact">
        Contact
      </a>
      <style jsx>{`
        .menu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100vh;
          text-align: center;
          padding: 2rem;
          position: fixed;
          background-color: rgba(192, 222, 192, 1);
          top: 0;
          right: 0;
          z-index: 9;
          transition: transform 0.3s ease-in-out;
          transform: ${open ? "translateX(0%)" : "translateX(100%)"};
        }

        .mobile-link {
          font-size: 2rem;
          text-transform: uppercase;
          padding: 2rem 0;
          font-weight: bold;
          letter-spacing: 0.5rem;
          text-decoration: none;
          transition: color 0.3s linear;
        }
      `}</style>
    </div>
  );
};

export default MenuBar;
