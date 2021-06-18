const Header = () => {
  return (
    <section className="header">
      <header>
        <div className="flex-row flex-apart">
          <div className="pad-all-5 flex-row logo-container">
            <div className="logo"> DJ </div>
            <div className="company">Deepak Jangra</div>
          </div>
          <nav>
            <ul className="no-list-style flex-row pad-all-5">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Header;
