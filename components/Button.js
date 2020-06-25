const Button = (props) => (
  <button>
    {props.name}
    <style jsx>{`
      button {
        background-color: white;
        color: #036200;
        padding: 5px 35px;
        border-radius: 4px;
        border: 2px solid #036200;
      }

      button:hover {
        background-color: #036200;
        color: white;
      }
    `}</style>
  </button>
);

export default Button;
