type Props = {
  icon?: string;
  title: string;
  to: string;
};

export default function NavbarLink({ icon, title, to }: Props) {
  return (
    <a className="navbar-item" href={to}>
      {icon && (
        <span className="icon">
          <i className={`fas ${icon}`}></i>
        </span>
      )}
      <span>{title}</span>
    </a>
  );
}
