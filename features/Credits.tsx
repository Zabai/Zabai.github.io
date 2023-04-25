import Footer from '@/components/Footer';
import { Trans, useTranslation } from 'react-i18next';

const LINKS = [
  { title: 'Animate.css', url: 'https://animate.style' },
  { title: 'Bulma CSS', url: 'https://bulma.io/' },
  { title: 'Font Awesome', url: 'hhttps://fontawesome.com/' },
  { title: 'i18next', url: 'https://www.i18next.com/' },
  { title: 'Next.js', url: 'https://nextjs.org/' },
  { title: 'React JS', url: 'https://react.dev/' },
  { title: 'Typescript', url: 'https://www.typescriptlang.org/' },
];

export default function Credits() {
  const { t } = useTranslation(undefined, { keyPrefix: 'footer' });

  return (
    <Footer>
      <p>
        {t('made')}{' '}
        {LINKS.map((link, index) => (
          <span key={link.title}>
            <a href={link.url} target="_blank">
              {link.title}
            </a>
            {index < LINKS.length - 1 ? ' - ' : '.'}
          </span>
        ))}
      </p>

      <Trans
        components={{
          author: <a href="https://mubaidr.js.org" target="_blank" />,
          template: (
            <a
              className="has-text-weight-bold"
              href="https://bulmatemplates.github.io/bulma-templates/templates/personal.html"
            />
          ),
        }}
        i18nKey="footer.credits"
      />
    </Footer>
  );
}
