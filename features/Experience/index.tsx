import CardMedia from '@/components/CardMedia';
import Section from '@/components/Section';
import Image from 'next/image';
import { EXPERIENCE } from './Experience.constants';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation(undefined, { keyPrefix: 'experience' });

  return (
    <Section id="experience" subtitle={t('subtitle')} title={t('title')}>
      <div className="columns is-centered is-multiline">
        {EXPERIENCE.map((item) => (
          <div className="column is-6" key={item.subtitle}>
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
                subtitle={t(item.subtitle)}
                title={t(item.title)}
              >
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={`${item.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </CardMedia>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
