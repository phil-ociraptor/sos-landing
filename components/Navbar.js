const Navbar = () => (
  <div className="Navigation">
    <div className="SoS-Text">
      <h1>SUMMER OF SHIPPING</h1>
      <img src="Ship Logo.svg" className="SoS-logo" />
    </div>
    <div className="Tabs">
      <a href="/index">
        HOME
      </a>

      <a href="https://forms.gle/3N3CfqbH6YkM1DF67">
        WIKI
      </a>

      <a href="https://forms.gle/3N3CfqbH6YkM1DF67">
        PROJECTS
      </a>

      <a href="https://forms.gle/3N3CfqbH6YkM1DF67">
        MATCH MAKING
      </a>
    </div>

    <style jsx>{`
        .Navigation {
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
        background: #4C4A63;
        box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
      }

      .SoS-logo {
        width: 10%;
        height: auto;
        padding-left: 1em;
      }

      .SoS-Text {
        padding-left: .5em;
        display: flex;
      }

      .SoS-Text h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        color: #EAEAEA;
      }

      .Tabs {
        display: flex;
        width: auto;
        font-size: 32px;
      }

      .Tabs a {
        padding-right: 1em;
        text-decoration: none;
        font-weight: 200;
        color: #EAEAEA;
        transition: transform .6s ease;
      }

      .Tabs a:hover {
        color: #4dd0e1;
        transform: scale(1.05);
      }
    `}</style>
  </div>
);

export default Navbar;