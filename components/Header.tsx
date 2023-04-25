type Props = {
  backgroundImage?: string;
  subtitle?: string;
  title: string;
};

export default function Header({ backgroundImage, subtitle, title }: Props) {
  return (
    <section className="hero is-link is-fullheight is-fullheight-with-navbar">
      <div className={backgroundImage} />

      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">{title}</h1>
          <h2 className="subtitle is-3">{subtitle}</h2>
        </div>
      </div>
    </section>
  );
}
