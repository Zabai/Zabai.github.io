import CardMedia from '@/components/CardMedia';
import Section from '@/components/Section';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { STUDIES } from './Studies.constants';

export default function Studies() {
  const { t } = useTranslation(undefined, { keyPrefix: 'studies' });

  return (
    <Section id="studies" subtitle={t('subtitle')} title={t('title')}>
      <div className="columns is-centered is-multiline">
        {STUDIES.map((item) => (
          <div className="column is-6" key={item.title}>
            <a
              className="box is-full-height"
              href={item.url}
              rel="noreferrer"
              target="_blank"
            >
              <CardMedia
                image={
                  <Image
                    alt={item.image.alt}
                    height={100}
                    src={item.image.src}
                    width={100}
                  />
                }
                subtitle={item.subtitle}
                title={item.title}
              />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
