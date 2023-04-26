type Props = {
  className?: string;
  icon?: string;
  onClick: () => void;
  title: string;
};

export default function NavbarButton({
  className,
  icon,
  onClick,
  title,
}: Props) {
  return (
    <div className="navbar-item">
      <button className={`button ${className ?? ''}`} onClick={onClick}>
        {icon && (
          <span className="icon is-small">
            <i className={`fas ${icon}`}></i>
          </span>
        )}
        <span>{title}</span>
      </button>
    </div>
  );
}
