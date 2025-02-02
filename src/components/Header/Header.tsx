import "./Header.css";

export default function Header() {
  function scrollToElement(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    const index = event.currentTarget.href.indexOf("#");
    const id = event.currentTarget.href.slice(1 + index);

    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header className="cabecalho">
        <section className="cabecalho__menu">
          <ul className="cabecalho__menu__link">
            <li className="cabecalho__menu__link__links">
              <a href="#">INÍCIO</a>
            </li>
            <li id="link1" className="cabecalho__menu__link__links">
              <a href="#principal" onClick={scrollToElement}>
                HISTÓRIA
              </a>
            </li>
            <li id="link2" className="cabecalho__menu__link__links">
              <a href="#la_masia" onClick={scrollToElement}>
                LA MASIA
              </a>
            </li>
          </ul>

          <img
            src="./img/fc-barcelona_logo.svg"
            alt="Logo Barcelona"
            className="cabecalho__menu__logo"
          />

          <ul className="cabecalho__menu__link">
            <li id="link3" className="cabecalho__menu__link__links">
              <a href="#">TITULOS</a>
            </li>
            <li id="link4" className="cabecalho__menu__link__links">
              <a href="#">LEGENDS</a>
            </li>
            <li id="link5" className="cabecalho__menu__link__links">
              <a href="#">PLANTEL</a>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
}
