function Layout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: "Montserrat", sans-serif;
          line-height: 1.8;
          color: #000;
        }
        h1 {
          font-weight: 700;
          font-size: 50px;
        }

        h2 {
          font-weight: 400;
          font-size: 25px;
        }

        h3 {
          font-weight: 700;
          font-size: 20px;
        }

        p {
          font-weight: 400;
          font-size: 15px;
        }

        a {
          color: black;
          text-decoration: none;
        }

        .container {
          max-width: 1140px;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
      `}</style>
    </div>
  );
}

export default Layout;
