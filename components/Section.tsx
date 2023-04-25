import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  id?: string;
  subtitle?: string;
  title: string;
};

export default function Section({ children, id, subtitle, title }: Props) {
  return (
    <section className="section" id={id}>
      <div className="has-text-centered">
        <h1 className="title is-2">{title}</h1>
        {subtitle && <h2 className="subtitle is-5">{subtitle}</h2>}
      </div>

      <div className="container has-text-justified">{children}</div>
    </section>
  );
}
