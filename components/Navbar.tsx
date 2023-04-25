import { useEffect, useState } from 'react';

type NavbarItem = {
  icon?: string;
  title: string;
  to: string;
};

type Props = {
  endItems: NavbarItem[];
};

export default function Navbar({ endItems }: Props) {
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
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isBurgerOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">
          {endItems?.map(({ icon, title, to }) => (
            <a className="navbar-item" href={to} key={title}>
              {icon && (
                <span className="icon">
                  <i className={`fas ${icon}`}></i>
                </span>
              )}
              <span>{title}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
