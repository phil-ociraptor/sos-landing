function Navbar() {

  return (
    <div className="navigation">
      <div className="sos-Text">
        <h1>🚢SUMMER OF SHIPPING </h1>
      </div>
      <div className="tabs">
        <a href="/index">
          HOME
      </a>

        <a href="/wiki">
          WIKI
      </a>
      </div>

      <style jsx>{`
        .navigation {
        z-index: 1;
        white-space: nowrap;
        position: fixed;
        display: flex;
        justify-content:space-between;
        align-items: center;
        top: 0px;
        left: 0px;
        padding: 1em;
        width: 100%;
        height: 40px;
        background: #272727;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
      }

      .sos-logo {
        width: 10%;
        height: auto;
        padding-left: 1em;
      }

      .sos-Text {
        padding-left: .5em;
        display: flex;
      }

      .sos-Text h1 {
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        color: #eaeaea;
      }

      .tabs {
        display: flex;
        width: auto;
        font-size: 32px;
      }

      .tabs a {
        padding-right: 1em;
        text-decoration: none;
        font-weight: 200;
        color: #eaeaea;
        transition: transform .6s ease;
      }

      .tabs a:hover {
        color: #4dd0e1;
        transform: scale(1.05);
      }
    `}</style>
    </div>
  );
}

export default Navbar;