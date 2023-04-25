import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren & {
  image?: JSX.Element;
  subtitle?: string;
  title: string;
};

export default function CardMedia({ children, image, subtitle, title }: Props) {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">{image}</p>
      </figure>

      <div className="media-content">
        <div className="content has-text-left">
          <p className="title is-4">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>

        {children}
      </div>
    </article>
  );
}
