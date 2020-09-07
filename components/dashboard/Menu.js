const Menu = ({ onClick }) => {
  return (
    <button className="menu" onClick={onClick}>
      <i className="menu__icon fas fa-cog"></i>
      <style jsx>{`
        .menu {
          height: 3rem;
          border: none;
          padding: 2px;
          background: transparent;
        }
        &:focus {
          outline: none;
        }

        .menu__icon {
          font-size: 18px;
        }
      `}</style>
    </button>
  );
};

export default Menu;
