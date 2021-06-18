const Footer = () => {
  const x = (
    <section className="footer">
      <footer>
        <div className="flex-row flex-apart">
          <div className="pad-all-5">
            <div>&copy; Deepak Jangra 2020</div>
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
      </footer>
    </section>
  );
  return x;
};

export default Footer;
