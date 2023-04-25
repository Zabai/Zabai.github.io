import Section from '@/components/Section';
import { useTranslation } from 'react-i18next';

export default function Resume() {
  const { t } = useTranslation(undefined, { keyPrefix: 'resume' });

  return (
    <Section id="resume" subtitle={t('subtitle')} title={t('title')}>
      <div className="has-text-centered">
        <a
          className="button is-link is-medium"
          href={`/Zabai Armas Herrera CV 2022.pdf`}
          rel="noreferrer"
          target="_blank"
        >
          <span className="icon">
            <i className="fas fa-file-alt"></i>
          </span>
          <span>{t('button')}</span>
        </a>
      </div>
    </Section>
  );
}
