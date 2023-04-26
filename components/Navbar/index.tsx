import { useEffect, useState } from 'react';

type Props = {
  endElements?: JSX.Element;
};

export default function Navbar({ endElements }: Props) {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    const htmlItems = document.getElementsByTagName('html');
    for (const htmlItem of htmlItems) {
      htmlItem.classList.add('has-navbar-fixed-top');
    }

    return () => {
      for (const htmlItem of htmlItems) {
        htmlItem.classList.remove('has-navbar-fixed-top');
      }
    };
  }, []);

  return (
    <nav className="navbar is-link is-fixed-top">
      <div className="navbar-brand">
        <a
          aria-expanded="false"
          aria-label="menu"
          className={`navbar-burger burger ${isBurgerOpen ? 'is-active' : ''}`}
          onClick={() => setBurgerOpen(!isBurgerOpen)}
          role="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className={`navbar-menu ${isBurgerOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">{endElements}</div>
      </div>
    </nav>
  );
}
