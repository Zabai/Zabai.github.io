import { PropsWithChildren } from 'react';

export default function Footer({ children }: PropsWithChildren) {
  return (
    <footer className="footer">
      <div className="has-text-centered">{children}</div>
    </footer>
  );
}
