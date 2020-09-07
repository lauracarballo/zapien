const MenuBar = ({ menubarRef }) => {
  return (
    <>
      <section ref={menubarRef} className="menubar">
        <p>Signed in as Laura </p>
        <div className="dropdown__menu dropdown__menu-services">
          <a className="menu-link" href="/">
            Your Profile
          </a>
          <a className="menu-link" href="/">
            Your Campaigns
          </a>
        </div>
        <div className="dropdown__menu dropdown__menu-tools">
          <a className="menu-link" href="/">
            Help
          </a>
          <a className="menu-link" href="/">
            Settings
          </a>
          <a className="menu-link" href="/">
            Sign out
          </a>
        </div>
      </section>
      <style jsx>{`
        .menubar {
          height: fit-content;
          text-align: center;
          padding: 15px;
          position: fixed;
          top: 55px;
          right: 12px;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
          z-index: 9;
        }

        .menubar:before {
          position: absolute;
          display: inline-block;
          content: "";
          top: -15px;
          right: 51px;
          border: 8px solid transparent;
          border-bottom-color: #fff;
        }
        .menu-link {
          font-size: 14px;
          padding: 0.5rem 0;
          letter-spacing: 0.1rem;
          text-decoration: none;
          text-align: center;
          transition: color 0.3s linear;
        }
        .menu-link:hover {
          background-color: rgba(140, 191, 138, 0.2);
          border-radius: 5px;
        }

        .dropdown__menu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5px;
        }
        .dropdown__menu-services {
          border-bottom: 2px solid rgba(140, 191, 138, 0.5);
          border-top: 2px solid rgba(140, 191, 138, 0.5);
        }
      `}</style>
    </>
  );
};

export default MenuBar;
