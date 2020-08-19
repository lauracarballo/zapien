const Burger = ({ open, setOpen }) => {
  return (
    <button className="mobile-button" onClick={() => setOpen(!open)}>
      <div className="button-styling"></div>
      <div className="button-styling"></div>
      <div className="button-styling"></div>
      <div className="button-styling"></div>
      <style jsx>{`
        .mobile-button {
          position: fixed;
          top: 3%;
          right: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: ${open ? "rgba(192, 222, 192, 1)" : "transparent"};
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }
        &:focus {
          outline: none;
        }
        .button-styling {
          width: 2rem;
          height: 0.25rem;
          background: ${open ? "#fff" : "rgba(192, 222, 192, 1)"};
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }
        .button-styling:first-child {
          transform: ${open ? "rotate(45deg)" : "rotate(0)"};
        }

        .button-styling:nth-child(2) {
          opacity: ${open ? "0" : "1"};
          transform: ${open ? "translateX(20px)" : "translateX(0)"};
        }

        .button-styling:nth-child(3) {
          transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
        }
      `}</style>
    </button>
  );
};

export default Burger;
